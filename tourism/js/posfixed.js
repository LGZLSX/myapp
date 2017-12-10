/*!
 * jQuery plugin gapples v1.0
 * posfixed
 * http://gapples.sinaapp.com/
 *
 * Copyright 2013 gapples.sinaapp.com
 * Released under the GPLv2 license
 * http://gapples.sinaapp.com/license
 * 
 * Written by Boyn Xiong
 * Date: 2013-1-3
 */

(function($) {
    $.extend($.fn, {
        posfixed: function(configSettings) {
            var settings = {
                direction: "top",
                type: "while",
                hide: false,
                distance: 0
            };
            $.extend(settings, configSettings);

            //initial
            // if($.browser.msie&&$.browser.version==6.0){
            // 	$("html").css("overflow-x","hidden");
            // 	$("body").css({
            // 		height:"100%",
            // 		overflow:"auto"
            // 	});
            // }

            var obj = this;
            var initPos = $(obj).offset().top;
            var initPosLeft = $(obj).offset().left;
            var anchoredPos = settings.distance;

            if (settings.type == "while") {
                if ($.browser.msie && $.browser.version == 6.0) {
                    $("body").scroll(function(event) {
                        var objTop = $(obj).offset().top - $("body").scrollTop() - 85;
                        if (objTop <= settings.distance) {
                            $(obj).css("position", "absolute");
                            $(obj).css("top", settings.distance + "rem");
                            $(obj).css("left", initPosLeft + "rem");
                            $(obj).css("opacity", "1");
                            $(obj).css("z-index", "999");
                        }
                        if ($(obj).offset().top <= initPos) {
                            $(obj).css("position", "static");
                        }
                    });

                } else {
                    $(window).scroll(function(event) {

                        if (settings.direction == "top") {
                            var objTop = $(obj).offset().top - $(window).scrollTop() - 85;

                            if (objTop <= settings.distance) {
                                $(obj).css("position", "fixed");
                                $(obj).css(settings.direction, settings.distance + "rem");
                                $(obj).css("opacity", "1");
                                $(obj).css("z-index", "999");
                                // $(obj).css("background", "rgba(69, 187, 187, 1)");
                                // $('.swipernav li').css("color", "#fff");
                                // $('.swipernav li').css("background", "rgbargba(69, 187, 187, 1)");
                                // $('.selected').css("color", "#333");
                                // $('.selected').css("background", "rgba(255, 255, 255, 0.8)");
                            }
                            if ($(obj).offset().top <= initPos) {
                                $(obj).css("position", "absolute");
                                $(obj).css("top", "0");
                                // $(obj).css("background", "rgba(255, 255, 255, 1)");
                                // $('.swipernav li').css("color", "#333");
                                // $('.swipernav li').css("background", "rgba(255, 255, 255, 1)");
                                // $('.selected').css("color", "rgba(69, 187, 187, 1)");
                                // $('.selected').css("background", "rgba(69, 187, 187, 0.1)");
                            }
                        } else {
                            var objBottom = $(window).height() - $(obj).offset().top + $(window).scrollTop() - $(obj).outerHeight();

                            if (objBottom <= settings.distance) {

                                $(obj).css("position", "fixed");
                                $(obj).css(settings.direction, settings.distance + "rem");

                            }
                            if ($(obj).offset().top >= initPos) {
                                $(obj).css("position", "static");
                            }
                        }



                    });
                }
            }

            if (settings.type == "always") {
                if ($.browser.msie && $.browser.version == 6.0) {
                    if (settings.hide) {
                        $(obj).hide();
                    }
                    $("body").scroll(function(event) {
                        if ($("body").scrollTop() > 600) {
                            $(obj).fadeIn(200);
                        } else {
                            $(obj).fadeOut(200);
                        }
                    });
                    $(obj).css("position", "absolute");
                    $(obj).css(settings.direction, settings.distance + "px");
                    if (settings.tag != null) {
                        if (settings.tag.obj != null) {
                            if (settings.tag.direction == "right") {
                                $(obj).css("left", (settings.tag.obj.offset().left + settings.tag.obj.width() + settings.tag.distance) + "px");
                                $(window).resize(function() {
                                    $(obj).css("left", (settings.obj.tag.offset().left + settings.tag.obj.width() + settings.tag.distance) + "px");
                                });
                            } else {
                                console.log(settings.tag.obj.offset().left - settings.tag.obj.width() - settings.tag.distance);
                                $(obj).css("left", (settings.tag.obj.offset().left - $(obj).outerWidth() - settings.tag.distance) + "px");
                                $(window).resize(function() {
                                    $(obj).css("left", (settings.tag.obj.offset().left - $(obj).outerWidth() - settings.tag.distance) + "px");
                                });
                            }

                        } else {
                            $(obj).css(settings.tag.direction, settings.tag.distance + "px");
                        }
                    }

                } else {
                    if (settings.hide) {
                        $(obj).hide();
                    }
                    $(window).scroll(function(event) {
                        if ($(window).scrollTop() > 600) {
                            $(obj).fadeIn(200);
                        } else {
                            $(obj).fadeOut(200);
                        }
                    });
                    var objLeft = $(obj).offset().left;

                    $(obj).css("position", "fixed");
                    $(obj).css(settings.direction, settings.distance + "px");
                    if (settings.tag != null) {
                        if (settings.tag.obj != null) {
                            if (settings.tag.direction == "right") {
                                $(obj).css("left", (settings.tag.obj.offset().left + settings.tag.obj.width() + settings.tag.distance) + "px");
                                $(window).resize(function() {
                                    $(obj).css("left", (settings.obj.tag.offset().left + settings.tag.obj.width() + settings.tag.distance) + "px");
                                });
                            } else {
                                console.log(settings.tag.obj.offset().left - settings.tag.obj.width() - settings.tag.distance);
                                $(obj).css("left", (settings.tag.obj.offset().left - $(obj).outerWidth() - settings.tag.distance) + "px");
                                $(window).resize(function() {
                                    $(obj).css("left", (settings.tag.obj.offset().left - $(obj).outerWidth() - settings.tag.distance) + "px");
                                });
                            }

                        } else {
                            $(obj).css(settings.tag.direction, settings.tag.distance + "px");
                        }
                    }
                }



            }


        }
    });


})(jQuery);