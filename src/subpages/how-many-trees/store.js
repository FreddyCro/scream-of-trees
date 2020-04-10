  
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    folder: 'how-many-trees',
    isMainPage: false,
    currentSlide: 1,
    slideAmount: 11,
    script: [
      {
        type: 'i',
        trigger: 1,
        videoPath: null,
        posterPath: null,
        imagePath: '/slide_1/',
        hasTablet: true,
        videoController: false,
        squareType: false,
      },
      {
        type: 'i',
        trigger: 2,
        videoPath: null,
        posterPath: null,
        imagePath: '/slide_2/',
        hasTablet: false,
        videoController: false,
        squareType: false,
      },
      {
        type: 'v',
        trigger: 3,
        videoPath: '/slide_3/',
        posterPath: '/slide_3/',
        imagePath: null,
        hasTablet: false,
        videoController: false,
        squareType: false,
      },
      {
        type: 'v',
        trigger: 4,
        videoPath: '/slide_4/',
        posterPath: '/slide_4/',
        imagePath: null,
        hasTablet: false,
        videoController: false,
        squareType: false,
      },
      {
        type: 'i',
        trigger: 5,
        videoPath: null,
        posterPath: null,
        imagePath: '/slide_5/',
        hasTablet: true,
        videoController: false,
        squareType: false,
      },
      {
        type: 'v',
        trigger: 6,
        videoPath: '/slide_6/',
        posterPath: '/slide_6/',
        imagePath: null,
        hasTablet: false,
        videoController: false,
        squareType: false,
      },
      {
        type: 'i',
        trigger: 7,
        videoPath: null,
        posterPath: null,
        imagePath: '/slide_7/',
        hasTablet: true,
        videoController: false,
        squareType: false,
      },
      {
        type: 'i',
        trigger: 8,
        videoPath: null,
        posterPath: null,
        imagePath: '/slide_8/',
        hasTablet: true,
        videoController: false,
        squareType: false,
      },
      {
        type: 'i',
        trigger: 9,
        videoPath: null,
        posterPath: null,
        imagePath: '/slide_9/',
        hasTablet: true,
        videoController: false,
        squareType: false,
      },
      {
        type: 'v',
        trigger: 10,
        videoPath: '/slide_10/',
        posterPath: '/slide_10/',
        imagePath: null,
        hasTablet: true,
        videoController: false,
        squareType: false,
      },
      {
        type: 'i',
        trigger: 11,
        videoPath: null,
        posterPath: null,
        imagePath: null,
        hasTablet: true,
        videoController: false,
        squareType: false,
      },
    ],
    relatedArticles: [
      {
        title: '樹的無聲吶喊',
        imgSrc: 'relate_5',
        url: '',
        menu: {
          active: true,
          self: false
        },
        outlink: false,
        active: true,
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
          self: true
        },
        outlink: false,
        active: false,
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
          else video.pause();
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