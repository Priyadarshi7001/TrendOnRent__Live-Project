'use strict';

jQuery(function ($) {

  "use strict";

  var window_select = $(window);

 
 
  var click_selector = $(".rq_btn_header_search i");
  var click_selector2 = $(".search-close.close i");
  var event_taker = $(".header-search.open-search");

  click_selector.on("click", function () {
    event_taker.addClass("open");
  });
  click_selector2.on("click", function () {
    event_taker.removeClass("open");
  });

  

});