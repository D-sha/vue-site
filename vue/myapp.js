const url = "http://127.0.0.1:5000/me"
var app = new Vue({
  el: '#app',
  data: {
    results: []
  },
  mounted() {
    axios.get(url).then(response => {
      this.results = response.data
    })
  }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
  })
