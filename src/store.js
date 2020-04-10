import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    folder: 'scream-of-trees',
    isMainPage: true,
    currentSlide: 1,
    slideAmount: 6,
    script: [
      /**
       * type: 
       *  v: video
       *  i: image
       */
      {
        type: 'v',
        trigger: 1,
        videoPath: '/slide_1/',
        posterPath: '/slide_1/',
        imagePath: null,
        hasTablet: false,
        videoController: false,
        squareType: false,
      },
      {
        type: 'v',
        trigger: 2,
        videoPath: '/slide_2/',
        posterPath: '/slide_2/',
        imagePath: null,
        hasTablet: false,
        videoController: false,
        squareType: true,
      },
      {
        type: 'i',
        trigger: 6,
        videoPath: null,
        posterPath: null,
        imagePath: null,
        hasTablet: true,
        videoController: false,
        squareType: false,
      },
    ],
    galleryScript: [3, 4, 5],
    relatedArticles: [
      {
        title: '樹的無聲吶喊',
        imgSrc: 'relate_5',
        url: '',
        menu: {
          active: true,
          self: true
        },
        outlink: false,
        active: false,
      },
      {
        title: '來不及長大的樹',
        imgSrc: 'relate_1',
        url: 'no-chance-to-grow',
        menu: {
          active: true,
          self: false
        },
        outlink: false,
        active: true,
      },
      {
        title: '台灣還要種多少樹才夠',
        imgSrc: 'relate_2',
        url: 'how-many-trees',
        menu: {
          active: true,
          self: false
        },
        outlink: false,
        active: true,
      },
      {
        title: '讓我們的樹健康長大',
        imgSrc: 'relate_3',
        url: 'grow-up-healthily',
        menu: {
          active: true,
          self: false
        },
        outlink: false,
        active: true,
      },
      {
        title: '願景工程系列專題',
        imgSrc: 'relate_4',
        url: 'https://vision.udn.com/',
        menu: {
          active: true,
          self: false
        },
        outlink: true,
        active: true,
      },
      {
        title: 'AR',
        imgSrc: '',
        url: '',
        menu: {
          active: false,
          self: false
        },
        outlink: false,
        active: false,
      }
    ],
    useVideoControl: false,
  },
  mutations: {
    updateCurrentSlide(state, payload) {
      state.currentSlide = payload;
    },
    updateCurrentSlidePlayStatus(state) {
      state.script.forEach(e => {
        const video = document.getElementById(`video-${e.trigger}`);
        if (e.type === 'v' && video) {
          if (e.trigger === state.currentSlide) video.play();
          else video.pause()
        }
      });
    },
  },
  actions: {
    updateCurrentSlide(context, payload) {
      context.commit('updateCurrentSlide', payload);
    },
    updateCurrentSlidePlayStatus(context) {
      context.commit('updateCurrentSlidePlayStatus');
    },
  },
});