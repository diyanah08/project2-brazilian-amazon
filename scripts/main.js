/* global $ */

$(function() {

  $('.page').hide();
  $('#page-one').show();

  $(".nav-link").click(function() {
    let page = $(this).data('dest');
    $('.page').hide();
    $('#' + page).show();
  });
});
