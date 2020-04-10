import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    folder: "grow-up-healthily",
    isMainPage: false,
    currentSlide: 1,
    slideAmount: 20,
    script: [
      {
        type: "v",
        trigger: 1,
        videoPath: "/slide_1/",
        posterPath: "/slide_1/",
        imagePath: null,
        hasTablet: false,
        videoController: false,
        squareType: false,
      },
      {
        type: "i",
        trigger: 2,
        videoPath: null,
        posterPath: null,
        imagePath: "/slide_2/",
        hasTablet: true,
        videoController: false,
        squareType: false,
      },
      {
        type: "i",
        trigger: 3,
        videoPath: null,
        posterPath: null,
        imagePath: "/slide_3/",
        hasTablet: true,
        videoController: false,
        squareType: false,
      },
      {
        type: "v",
        trigger: 4,
        videoPath: "/slide_4/",
        posterPath: "/slide_4/",
        imagePath: null,
        hasTablet: false,
        videoController: false,
        squareType: false,
      },
      {
        type: "v",
        trigger: 5,
        videoPath: "/slide_5/",
        posterPath: "/slide_5/",
        imagePath: null,
        hasTablet: false,
        videoController: true,
        squareType: true,
      },
      {
        type: "i",
        trigger: 6,
        videoPath: null,
        posterPath: null,
        imagePath: "/slide_6/",
        hasTablet: true,
        videoController: false,
        squareType: false,
      },
      {
        type: "i",
        trigger: 7,
        videoPath: null,
        posterPath: null,
        imagePath: "/slide_7/",
        hasTablet: true,
        videoController: false,
        squareType: false,
      },
      {
        type: "v",
        trigger: 8,
        videoPath: "/slide_8/",
        posterPath: "/slide_8/",
        imagePath: null,
        hasTablet: false,
        videoController: false,
        squareType: false,
      },
      {
        type: "i",
        trigger: 9,
        videoPath: null,
        posterPath: null,
        imagePath: "/slide_9/",
        hasTablet: true,
        videoController: false,
        squareType: false,
      },
      {
        type: "v",
        trigger: 10,
        videoPath: "/slide_10/",
        posterPath: "/slide_10/",
        imagePath: null,
        hasTablet: false,
        videoController: true,
        squareType: true,
      },
      {
        type: "v",
        trigger: 11,
        videoPath: "/slide_11/",
        posterPath: "/slide_11/",
        imagePath: null,
        hasTablet: false,
        videoController: false,
        squareType: false,
      },
      {
        type: "v",
        trigger: 12,
        videoPath: "/slide_12/",
        posterPath: "/slide_12/",
        imagePath: null,
        hasTablet: false,
        videoController: true,
        squareType: true,
      },
      {
        type: "i",
        trigger: 13,
        videoPath: null,
        posterPath: null,
        imagePath: "/slide_13/",
        hasTablet: true,
        videoController: false,
        squareType: false,
      },
      {
        type: "i",
        trigger: 14,
        videoPath: null,
        posterPath: null,
        imagePath: "/slide_14/",
        hasTablet: true,
        videoController: false,
        squareType: false,
      },
      {
        type: "v",
        trigger: 15,
        videoPath: "/slide_15/",
        posterPath: "/slide_15/",
        imagePath: null,
        hasTablet: false,
        videoController: true,
        squareType: true,
      },
      {
        type: "v",
        trigger: 16,
        videoPath: "/slide_16/",
        posterPath: "/slide_16/",
        imagePath: null,
        hasTablet: false,
        videoController: false,
        squareType: false,
      },
      {
        type: "i",
        trigger: 17,
        videoPath: null,
        posterPath: null,
        imagePath: "/slide_17/",
        hasTablet: true,
        videoController: false,
        squareType: false,
      },
      {
        type: "v",
        trigger: 18,
        videoPath: "/slide_18/",
        posterPath: "/slide_18/",
        imagePath: null,
        hasTablet: false,
        videoController: true,
        squareType: true,
      },
      {
        type: "v",
        trigger: 19,
        videoPath: "/slide_19/",
        posterPath: "/slide_19/",
        imagePath: null,
        hasTablet: false,
        videoController: false,
        squareType: false,
      },
      {
        type: "i",
        trigger: 20,
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
        title: "樹的無聲吶喊",
        imgSrc: "relate_5",
        url: "",
        menu: {
          active: true,
          self: false,
        },
        outlink: false,
        active: true,
      },
      {
        title: "來不及長大的樹",
        imgSrc: "relate_1",
        url: "no-chance-to-grow",
        menu: {
          active: true,
          self: false,
        },
        outlink: false,
        active: true,
      },
      {
        title: "台灣還要種多少樹才夠",
        imgSrc: "relate_2",
        url: "how-many-trees",
        menu: {
          active: true,
          self: false,
        },
        outlink: false,
        active: true,
      },
      {
        title: "讓我們的樹健康長大",
        imgSrc: "relate_3",
        url: "grow-up-healthily",
        menu: {
          active: true,
          self: true,
        },
        outlink: false,
        active: false,
      },
      {
        title: "願景工程系列專題",
        imgSrc: "relate_4",
        url: "https://vision.udn.com/",
        menu: {
          active: true,
          self: false,
        },
        outlink: true,
        active: true,
      },
      {
        title: "AR",
        imgSrc: "",
        url: "",
        menu: {
          active: false,
          self: false,
        },
        outlink: false,
        active: false,
      },
    ],
    useVideoControl: true,
    videoStatus: {
      controllerActive: false,
      isMuted: true,
      isPlay: true,
      totalTime: 0,
      currentTime: 0,
    },
  },
  mutations: {
    updateCurrentSlide(state, payload) {
      state.currentSlide = payload;
    },
    updateCurrentSlidePlayStatus(state) {
      state.script.forEach((e) => {
        const video = document.getElementById(`video-${e.trigger}`);
        if (e.type === "v" && video) {
          if (e.trigger === state.currentSlide) video.play();
          else video.pause();
        }
      });
    },
    updateVideoPlay(state) {
      state.videoStatus.isPlay = !state.videoStatus.isPlay;
      const video = document.getElementById(`video-${state.currentSlide}`);
      if (!video) return;
      if (state.videoStatus.isPlay) video.pause();
      else video.play();
    },
    updateVideoMute(state) {
      state.videoStatus.isMuted = !state.videoStatus.isMuted;
      state.script.forEach(e => {
        if (e.videoController) {
          const video = document.getElementById(`video-${e.trigger}`);
          if (video) video.muted = state.videoStatus.isMuted;
        }
      })
    },
    updateControllerActive(state, payload) {
      state.videoStatus.controllerActive = payload;
    },
    updateVideoTime(state, payload) {
      state.videoStatus.totalTime = payload.totalTime;
      state.videoStatus.currentTime = payload.currentTime;
    },
  },
  actions: {
    updateCurrentSlide(context, payload) {
      context.commit("updateCurrentSlide", payload);
    },
    updateCurrentSlidePlayStatus(context) {
      context.commit("updateCurrentSlidePlayStatus");
    },
    updateVideoPlay(context) {
      context.commit("updateVideoPlay");
    },
    updateVideoMute(context) {
      context.commit("updateVideoMute");
    },
    updateControllerActive(context, payload) {
      context.commit("updateControllerActive", payload);
    },
    updateVideoTime(context, payload) {
      context.commit("updateVideoTime", payload);
    },
  },
});
