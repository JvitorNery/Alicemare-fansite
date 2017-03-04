function modalShow(val) {

  //document.querySelector(".info-char-view").innerHTML = "<h3 class='title-view'>" + val.title + "</h3><h3>Appearence</h3>"+val.Appearence+"<h3>Pesonality</h3>"+val.Pesonality+"<h3>Role</h3>"+val.Role+"<h3>Backstory</h3>"+val.Backstory+"<h3>Trivia</h3>"+val.Trivia;
  document.querySelector(".modal").innerHTML = '<div class="modal-background" onclick="modalHide()"><img src="'+val.src2+'"/></div>';
  
}
function modalHide() {
  document.querySelector(".modal").innerHTML =' ';
}
var appChar = new Vue({
  el: '#app',
  data: {
    img: [
    {'src': 'http://s3.zerochan.net/Alice.Mare.240.1958661.jpg','src2':'http://s1.zerochan.net/Alice.Mare.600.1958661.jpg'},
    {'src': 'http://s3.zerochan.net/Alice.Mare.240.1958661.jpg','src2':'http://s1.zerochan.net/Alice.Mare.600.1958661.jpg'},
    {'src': 'http://s3.zerochan.net/Alice.Mare.240.1958661.jpg','src2':'http://s1.zerochan.net/Alice.Mare.600.1958661.jpg'},
    {'src': 'http://s3.zerochan.net/Alice.Mare.240.1958661.jpg','src2':'http://s1.zerochan.net/Alice.Mare.600.1958661.jpg'},
    {'src': 'http://s3.zerochan.net/Alice.Mare.240.1958661.jpg','src2':'http://s1.zerochan.net/Alice.Mare.600.1958661.jpg'},
    {'src': 'http://s3.zerochan.net/Alice.Mare.240.1958661.jpg','src2':'http://s1.zerochan.net/Alice.Mare.600.1958661.jpg'},
    {'src': 'http://s3.zerochan.net/Alice.Mare.240.1958661.jpg','src2':'http://s1.zerochan.net/Alice.Mare.600.1958661.jpg'},
    {'src': 'http://s3.zerochan.net/Alice.Mare.240.1958661.jpg','src2':'http://s1.zerochan.net/Alice.Mare.600.1958661.jpg'},
    {'src': 'http://s3.zerochan.net/Alice.Mare.240.1958661.jpg','src2':'http://s1.zerochan.net/Alice.Mare.600.1958661.jpg'},
    {'src': 'http://s3.zerochan.net/Alice.Mare.240.1958661.jpg','src2':'http://s1.zerochan.net/Alice.Mare.600.1958661.jpg'},
    {'src': 'http://s3.zerochan.net/Alice.Mare.240.1958661.jpg','src2':'http://s1.zerochan.net/Alice.Mare.600.1958661.jpg'},
    {'src': 'http://s3.zerochan.net/Alice.Mare.240.1958661.jpg','src2':'http://s1.zerochan.net/Alice.Mare.600.1958661.jpg'},
    {'src': 'http://s3.zerochan.net/Alice.Mare.240.1958661.jpg','src2':'http://s1.zerochan.net/Alice.Mare.600.1958661.jpg'},
    {'src': 'http://s3.zerochan.net/Alice.Mare.240.1958661.jpg','src2':'http://s1.zerochan.net/Alice.Mare.600.1958661.jpg'},
    {'src': 'http://s3.zerochan.net/Alice.Mare.240.1958661.jpg','src2':'http://s1.zerochan.net/Alice.Mare.600.1958661.jpg'},
    ]


  },
  methods: {
    showIMG: function(index, val) {

      //alert(val.title + " " + val.desc)
      modalShow(val)

    }
  }
});

var allen = {
      'title': 'Allen'
    };

/*acript on page load to set Allen auto select*/
//document.addEventListener('load',insertInfo(allen));