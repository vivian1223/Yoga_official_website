const app = Vue.createApp({
  data() {
    return {
     
        homeFeedbackPageStatus: 0,
        homeFeedbackPageList:[],
        homePageStatus:true,
        courseIntroPageStatus:false,

      feedbackList: [
        {
          name: "Joanne",
          date: "Oct 17 2020",
          rank: 5,
          comment: "服務很好、設備優良！",
          imgUrl:
            "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/yoga-week8/user-1.png",
        },
        {
          name: "穎旻",
          date: "Oct 17 2020",
          rank: 5,
          comment: "上課後身體健康很多",
          imgUrl:
            "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/yoga-week8/user-2.png",
        },
        {
          name: "子琪",
          date: "Oct 17 2020",
          rank: 5,
          comment: "上課很有趣！",
          imgUrl:
            "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/yoga-week8/user-3.png",
        },
        {
          name: "葉子",
          date: "Oct 17 2020",
          rank: 5,
          comment: "老師的教學很專業",
          imgUrl:
            "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/yoga-week8/user-4.png",
        },
        {
          name: "Ray",
          date: "Oct 17 2020",
          rank: 5,
          comment: "很舒壓",
          imgUrl:
            "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/yoga-week8/user-5.png",
        },
        {
          name: "俊儀",
          date: "Oct 17 2020",
          rank: 5,
          comment: "讚的！",
          imgUrl:
            "https://raw.githubusercontent.com/hexschool/webLayoutTraining1st/master/yoga-week8/uset-6.png",
        },
      ],
    };
  },
  computed: {},
  methods: {  
    showNextFeedbackPage() {
        this.homeFeedbackPageStatus = 1;
        this.homeFeedbackPageList= this.feedbackList.filter((item, index) => Math.floor(index / 3) === 1);
    },
    showPreFeedbackPage(){
        this.homeFeedbackPageStatus = 0;
        this.homeFeedbackPageList= this.feedbackList.filter((item, index) => Math.floor(index / 3) === 0);
    },
    showCourseIntroPage(){
      this.homePageStatus = false;
      this.courseIntroPageStatus = true;
      location.hash = 'courseIntro';
    },
    showHomePage(){
      this.courseIntroPageStatus = false;
      this.homePageStatus = true;
      location.hash = 'home';
    }
  },
  created() {
    this.homeFeedbackPageList= this.feedbackList.filter((item, index) => Math.floor(index / 3) === 0);
  },
});
app.mount("#app");
