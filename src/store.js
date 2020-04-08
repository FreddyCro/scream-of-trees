  import Vue from 'vue';
  import Vuex from 'vuex';

  Vue.use(Vuex);

  export default new Vuex.Store({
    state: {
      currentSlide: 1,
      length: 6,
      folder: 'scream-of-trees',
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
          videoVoice: false,
        },
        {
          type: 'v',
          trigger: 2,
          videoPath: '/slide_2/',
          posterPath: '/slide_2/',
          imagePath: null,
          hasTablet: false,
          videoVoice: false,
        },
        {
          type: 'i',
          trigger: 6,
          videoPath: null,
          posterPath: null,
          imagePath: '/slide_6/',
          hasTablet: true,
          videoVoice: false,
        },
      ],
      galleryScript: [3, 4, 5],
      relatedArticles: [
        {
          title: '來不及長大的樹',
          imgSrc: ''
        },
        {
          title: '台灣還要種多少樹才夠？',
          imgSrc: ''
        },
        {
          title: '讓我們的樹健康長大',
          imgSrc: ''
        },
        {
          title: '願景工程「為未來種一顆樹」系列專題',
          imgSrc: ''
        }
      ]
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