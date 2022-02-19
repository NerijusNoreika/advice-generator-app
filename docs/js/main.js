Vue.createApp({
    data() {
      return {
        adviceId: '',
        advice: ''
      }
    },
    created() {
        this.generateQuote();
    },
    methods: {
      generateQuote() {
        fetch('https://api.adviceslip.com/advice')
        .then(resp => resp.json())
        .then(data => {
            this.adviceId = data.slip.id;
            this.advice = data.slip.advice;
        })
      }
    }
  }).mount('#app')
