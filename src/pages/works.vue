<template>
  <div class="wrapper works js-container">

    <main class="main">
      <ul class="m-lists" v-if="posts && posts.length">
        <li class="m-lists__item" v-for="post of posts"><router-link :to="{ path: '/' + post.slug}">
          <div class="image"><img :src="post.featured_image.src" alt=""></div>
          <div class="content">
            <div class="txt">
              <h2 class="name">{{post.title.rendered}}</h2>
              <ul class="skills">
                <li>{{post.acf.technologies}}</li>
              </ul>
            </div>
          <!-- content --></div>
        </router-link><!-- m-lists__item --></li>
      <!-- lists --></ul>
    <!-- main --></main>
  </div>
</template>

<script>
// setting
import { HTTP } from '../environment';

export default {
  name: 'works',

  data() {
    return {
      posts: []
    }
  },

  created() {
    this.fetchData();
  },

  watch: {
    '$route': 'fetchData'
  },

  methods: {
    fetchData() {
      HTTP.get('wp-json/wp/v2/posts')
      .then((resp) => {
        this.posts = resp.data
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

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
    margin-bottom: 50px;

    .image {
      position: absolute;
      left: 0;
      top: 0;
      overflow: hidden;
      width: 100%;
      height: 100%;
    }

    a::after {
      content: "";
      display: block;
      padding-top: 45%;
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
.mode-pc .main .m-lists a:hover .content {
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

      a::after {
        padding-top: 0;
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
