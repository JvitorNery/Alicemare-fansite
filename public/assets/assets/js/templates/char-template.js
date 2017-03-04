Vue.component('char-item', {
  props: ['char'],
  template: '<div class="div-char">\
  <div class="img-div">\
    <img :src={{char.src}} />\
  </div>\
  <div class="info-char">\
    <h3>{{char.title}}</h3>\
    <p>{{char.desc}}</p>\
  </div>\
</div>'});
