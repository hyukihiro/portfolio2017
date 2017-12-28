import MobileDetect from 'mobile-detect';
import { HTTP } from '../../../environment';
const { detect } = require('detect-browser');
const browser = detect();

class State {

  constructor() {

    this.userAgent = window.navigator.userAgent;
    this.mobileDetect = new MobileDetect(this.userAgent);
    this.deviceType = this.getDeviceType();
    this.browserName = browser.name;

    this.getPosts();
  }

  getDeviceType() {
    if(this.mobileDetect.tablet()) {
      return "tablet";
    } else if (this.mobileDetect.mobile()) {
      return "mobile";
    } else {
      return "desktop";
    }
  }

  isIE() {
    return (this.userAgent.indexOf('MSIE ') > 0 || this.userAgent.indexOf('Trident/') > 0 || this.userAgent.indexOf('Edge/') > 0);
  }

  getPosts() {
    let _this = this;
    HTTP.get('wp-json/wp/v2/posts')
    .then((resp) => {
      _this.projects = resp.data
    })
    .then(() => {
      _this.projectInit();
    })
    .catch((err) => {
      console.log(err)
    })
  }

  projectInit() {
    this.currentProjectIndex = 0;
    this.projectsNb = this.projects.length;
  }

}


export default new State();
