import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    folder: 'no-chance-to-grow',
    isMainPage: false,
    currentSlide: 1,
    slideAmount: 10,
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
        hasTablet: true,
        videoController: false,
        squareType: false,
      },
      {
        type: 'i',
        trigger: 3,
        videoPath: null,
        posterPath: null,
        imagePath: '/slide_3/',
        hasTablet: true,
        videoController: false,
        squareType: false,
      },
      {
        type: 'i',
        trigger: 4,
        videoPath: null,
        posterPath: null,
        imagePath: '/slide_4/',
        hasTablet: true,
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
        type: 'i',
        trigger: 6,
        videoPath: null,
        posterPath: null,
        imagePath: '/slide_6/',
        hasTablet: true,
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
        type: 'v',
        trigger: 9,
        videoPath: '/slide_9/',
        posterPath: '/slide_9/',
        imagePath: null,
        hasTablet: false,
        videoController: false,
        squareType: false,
      },
      {
        type: 'i',
        trigger: 10,
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
          self: true
        },
        outlink: false,
        active: false,
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