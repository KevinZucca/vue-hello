const { createApp } = Vue

createApp({
    data() {
      return {
        message: 'The Progressive JavaScript Framework - ',
        name: 'Vue',
        img: "https://swansoftwaresolutions.com/wp-content/uploads/2020/01/Benefits-of-Using-VUE.JS.jpeg",
        filterClass: ""
      }
    },

    methods: {
        addFilter() {
            this.filterClass = this.filterClass == "filter" ? "" : "filter"
        }
    }


  }).mount('#app')
 