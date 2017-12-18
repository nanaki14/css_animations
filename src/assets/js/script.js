const $ = require("jquery");
const easing = require("jquery.easing");

let Common = function(){};

$(function() {

    Common.smoothScroll();

  });

Common = {

  //スムーススクロール
  smoothScroll : function() {

    $('a[href^="#"]').click(function() {
      $('html,body').animate({ scrollTop:
      $($(this).attr('href')).offset().top }, '600','easeInCubic');
      return false;
    });

  },
  share : function() {
    var shareTitle = encodeURI($('title').html());
    var shareUrl = encodeURI(document.URL);
    var shareUrlComponent = encodeURIComponent(document.URL);
    $('.js-twitterShare').attr("href", "http://twitter.com/share?url="+ shareUrl + "&text=" + shareTitle);
    $('.js-facebookShare').attr("href", "http://www.facebook.com/sharer.php?u="+ shareUrl +"&t=" + shareTitle);
    $('.js-lineShare').attr("href", "http://line.me/R/msg/text/?"+ shareUrl);
    $('.js-pocketShare').attr("href", "http://getpocket.com/edit?url="+ shareUrl + "&title=" + shareTitle);
  }

}
