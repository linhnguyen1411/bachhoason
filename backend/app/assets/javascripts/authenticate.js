//= require jquery
//= require jquery_ujs
//= require plugin/bootstrap.min.js
//= require plugin/toastr.min.js
//= require plugin/ajax_errors.js
//= require sweetalert
//= require constant
//= require_tree ./authenticate

$(document).ready(function(){
  $.backstretch([
    "/assets/19.jpg",
    "/assets/18.jpg",
    ], {
      fade: 1000,
      duration: 7000
  });
})
