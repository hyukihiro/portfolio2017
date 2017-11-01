<template>
  <div class="wrapper works">

    <main class="main">
      <ul class="m-lists" v-if="posts && posts.length">
        <li class="m-lists__item" v-for="post of posts"><a v-bind:href="post.slug">
          <div class="image"><img :src="post._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url" alt=""></div>
          <div class="content">
            <div class="txt">
              <h2 class="name">{{post.title.rendered}}</h2>
              <ul class="skills">
                <li>{{post.acf.technologies}}</li>
              </ul>
            </div>
          <!-- content --></div>
        </a><!-- m-lists__item --></li>
      <!-- lists --></ul>
    <!-- main --></main>
  </div>
</template>

<script>
// setting
import { HTTP } from '../environment';

// components
import GlobalHeader from '../components/_globalHeader.vue';
import GlobalLoading from '../components/_globalLoading.vue';
import Globalmenu from '../components/_globalMenu.vue';
import GlobalFooter from '../components/_globalFooter.vue';

export default {
  name: 'works',

  data() {
    return {
      posts: []
    }
    console.log(this.posts);
  },

  created() {
    this.fetchData();
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData() {
      if ( this.$route.params.id === undefined ) { // if there is no slug, we're at the home page so we need to fetch it
        HTTP.get('wp-json/wp/v2/posts?_embed')
        .then((resp) => {
          this.posts = resp.data
        })
        .catch((err) => {
          console.log(err)
        })

      } else {
        HTTP.get('wp-json/wp/v2/posts?_embed') // if we're not at the home page, then we grab the page via its slug
        .then((resp) => {
          this.posts = resp.data
        })
        .catch((err) => {
          console.log(err)
        })
      }
    }
  }
}
</script>

<style lang="scss" scope>

@import '../assets/sass/_mixin.scss';

.main {
  margin-top: 100px;
}


/* sp
--------------------------------------------------------------------------*/
@include mq(sp) {
  .main {
    margin-top: 58px;
  }
}


.m-lists {
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  &__item {
    position: relative;
    width: 50%;
    padding-top: 26.25%;
    margin-bottom: 50px;

    .image {
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }

    .image > img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .content {
      position: absolute;
      left: 50%;
      top: 50%;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      transform: translate(-50%, -50%);
      padding: 30px;
      color: #fff;
      background: rgba(0, 0, 0, .8);
      opacity: 0;
      transition: all .25s cubic-bezier(0.19, 1, 0.22, 1);
    }

    .content .name {
      font-size: 2.0rem;
    }

    .content .skills {
      padding-top: 5px;
      display: flex;
      flex-wrap: wrap;
    }

    .content .skills li {
      position: relative;
      padding-right: 5px;
      margin-right: 5px;
      font-weight: 500;
    }
  }
}

/* hover
--------------------------------------------------------------------------*/
.mode-pc .main .m-lists .content:hover {
  opacity: 1;
  transition: all .5s cubic-bezier(0.19, 1, 0.22, 1);
  backface-visibility: hidden;
}

/* xl
--------------------------------------------------------------------------*/
@include mq(xl) {
  .main {
    .m-lists {
      width: 140rem;
      margin: 0 auto;
    }
  }
}


/* sp
--------------------------------------------------------------------------*/
@include mq(sp) {
  .main {

    .m-lists {
      flex-direction: column;
    }

    .m-lists__item {
      width: 100%;
      padding-top: 56.25%;
      margin-bottom: 30px;

      .image > img {
        width: 100%;
        height: auto;
      }

      .content {
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        transform: translate(-50%, -50%);
        padding: 20px;
        opacity: 1;
        transition: none;
      }

      .content .name {
        font-size: 1.6rem;
      }

      .content .skills li {
        margin-right: 0;
      }
    }
  }
}


</style>