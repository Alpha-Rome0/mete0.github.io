var taglines = (function () {
    "use strict";

    function changeTaglines() {
        var taglines = jQuery(".tagline"),
            taglinesIndex = -1;

        function showNextTagline() {
            ++taglinesIndex;
            taglines.eq(taglinesIndex % taglines.length)
                .fadeIn(500)
                .delay(1000)
                .fadeOut(500, showNextTagline);
        }

        showNextTagline();
    }

    return {
        init: function () {
            changeTaglines();
        }
    };

}());

jQuery(function () {
    "use strict";
    taglines.init();

});

$(function () {
    $('#first').collapsible('accordion-open', {
        contentOpen: 0
    });

});

$(document).ready(function () {
    var c1 = $("#c1");
    var c1i = c1.find('i');
    var c2= $("#c2");
    var c2i= c2.find('i');
    c1.click(function () {
        if (c1.hasClass("down")) {
            c1i.text('keyboard_arrow_right');
            c1.removeClass("down");
        } else {
            c1i.text('keyboard_arrow_down');
            c1.addClass("down");
        }
        if (c2.hasClass("down")) {
            c2i.text('keyboard_arrow_right');
            c2i.removeClass("down");
        }
    });

    c2.click(function () {
        if (c2.hasClass("down")) {
            c2i.text('keyboard_arrow_right');
            c2.removeClass("down");
        }else {
            c2i.text('keyboard_arrow_down');
            c2.addClass("down");
        }
        if (c1.hasClass("down")) {
            c1i.text('keyboard_arrow_right');
            c1.removeClass("down");
        }
    });
});