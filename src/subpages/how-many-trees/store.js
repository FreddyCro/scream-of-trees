  
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentSlide: 1,
    length: 6,
    /**
     * type: 
     *  v: video
     *  i: image
     *  n: null
     */
    script: [
      {
        type: 'v',
        trigger: 1,
        videoSrc: '',
        posterSrc: '',
        imageSrc: '',
        videoVoice: false,
      },
      {
        type: 'v',
        trigger: 2,
        videoSrc: '',
        posterSrc: '',
        imageSrc: '',
        videoVoice: false,
      },
      {
        type: 'v',
        trigger: 6,
        videoSrc: '',
        posterSrc: '',
        imageSrc: '',
        videoVoice: false,
      },
    ],
  },
  mutations: {
    updateCurrentSlide(state, payload) {
      state.currentSlide = payload;
    },
  },
  actions: {
    updateCurrentSlide(context, payload) {
      context.commit('updateCurrentSlide', payload);
    },
  },
});