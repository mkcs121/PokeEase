$(document).ready(function () {

    /*
    $("#menu .close-button").click(function() {
        $(".open-menu").css('transform', 'translateX(0)');
        $(".open-menu").children('i').css('transform', 'rotate(0)');
        $(this).css('transform', 'translateX(-60px)');
        $(this).children('i').css('transform', 'rotate(180deg)');
        $("#menu").delay(300).fadeOut(300);
        $(".open-menu").delay(300).fadeIn(300);
    });

    $(".open-menu").click(function() {
        $(this).css('transform', 'translateX(60px)');
        $(this).children('i').css('transform', 'rotate(180deg)');
        $("#menu .close-button").css('transform', 'translateX(0)');
        $("#menu .close-button").children('i').css('transform', 'rotate(0)');
        $("#menu").delay(300).fadeIn(300);
        $(this).delay(300).fadeOut(300);
    });
    */

    $("#menu .close-button").click(function() {
        $("#menu").animate({"left": "-200px"}, 300);
        $(".open-menu").delay(300).animate({"opacity": "1"}, 300);
    });

    $(".open-menu").click(function() {
        $(this).css("opacity", "0");
        $("#menu").delay(300).animate({"left": "0"}, 300);
    });

    $("#menu .item").click(function() {
        $("#popup").fadeIn();
        $("#popup .title span").text($(this).attr('id'));
        $("#popup .title").css('background-color', $(this).css('background-color'));
    });

    $("#popup .overlay").click(function() {
        $("#popup").fadeOut();
    });

    $("#popup .close-me").click(function() {
        $("#popup").fadeOut();
    });

    $("#journal .event").each(function() {
        $(this).children('.event-type').text($(this).attr('class').split(' ')[1]);
        $(this).children('.event-type').css('color', $(this).children('.category').css("background-color"));
    });

    $("#journal .close-button").click(function() {
        $("#journal").animate({"right": "-300px"}, 300);
        $(".open-journal").delay(300).animate({"opacity": "1"}, 300);
    });

    $(".open-journal").click(function() {
        $(this).css("opacity", "0");
        $("#journal").delay(300).animate({"right": "0"}, 300);
    });

    resizeItemContainer();

    $("#journal .clear-all").click(function() {
        var delay = 0;
        $($("#journal .items .event").get().reverse()).each(function() {
            $(this).delay(delay).slideUp(300);
            delay += 50;
        });
        /* $($("#journal .items .event").get().reverse()).first().children('*').slideUp();
        $($("#journal .items .event").get().reverse()).first().slideUp(); */
    });

    $("#journal .event .dismiss").click(function() {
        $(this).closest(".event").slideUp(300);
        /* $(this).parent(".event").animate({opacity: "0", "min-height": "0"}); */
    });

	$('#journal .event').qtip({
		content: {
			/*title: function(event, api) {
				return $(this).find('.info').contents().get(0).nodeValue.trim();
			},*/
			text: function(event, api) {
				var tooltip = $('<div/>');
				var image = $('<img/>', {
					src: $(this).find('img').attr('src'),
					style: 'width: 50px; float: left;'
				})
				$(tooltip).append(image);
				$(tooltip).append('<br/>');
				var title = $('<h3/>', {
					text: $(this).find('.info').contents().get(0).nodeValue.trim(),
					style: 'display: inline-block;' 
				})
				$(tooltip).append(title);
				$(tooltip).append('<br/>');
				var stats = $('<span/>', {
					text: $(this).find('.stats').text(),
					style: 'display: inline-block;' 
				});			
				$(tooltip).append(stats);
				return tooltip;
			}
		},
		position: {
			my: 'right center',
			at: 'center left',
			adjust: {
				x: -18
			}
		},
		style: {
			classes: 'qtip-tipsy qtip-shadow qtip-rounded'
		}
	});
    $("#journal .event").wrapInner('<div class="item-container"></div>');

});

$(window).resize(function() {
    resizeItemContainer();
});

function resizeItemContainer() {
    $("#journal .items").css('height', ($(window).height() - $("#journal .title").height() - $("#journal .clear-all").height()));
}