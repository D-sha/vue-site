const url = "http://192.168.30.11:5000/me"
var app = new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted() {
      try{
        axios.get(url).then(response => {
        this.results = response.data
        })
    }catch(e) {
        console.error(e)
    }
  }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  })
