(function($) {
    $.titleEffect = function(options) {

        var defaults = {
                titles: [document.title],
                effect: 'replace',
                delay: 1000,
                seperator: ','
            },
            plugin = this,
            options = options || defaults;

        plugin.titleScroller = function(text) {

            setInterval(function() {

                document.title = text;

                text = text.substr(1) + text.substr(0, 1);

            }, options.delay || defaults.delay);
        }

        plugin.titleReplacer = function() {

            var totalTiles = options.titles.length;
            var i = 0;
            setInterval(function() {

                text = options.titles[i];
                document.title = text;

                if (i == (totalTiles - 1)) {
                    i = 0;
                }else{
                    i++;
                }
                
            }, options.delay || defaults.delay);
        }

        /**
         * [titleBlinker - Blinks Array of Title]
         * @return {Void} 
         */
        plugin.titleBlinker = function() {
            var totalTiles = options.titles.length;
            tempTitles = options.titles;

            for (var x = 0; x <= (totalTiles * 2); x+=2) {
                tempTitles.splice(x, 0, " \u200e");
            }

            tempTitles.shift();
            options.titles = tempTitles;
            
            var i = 0;
            setInterval(function() {

                text = options.titles[i];
                document.title = text;

                if (i == (options.titles.length - 1)) {
                    i = 0;
                }else{
                    i++;
                }
                
            }, options.delay || defaults.delay);

        }


        plugin.init = function() {

            var settings = $.extend({}, defaults, options);

            $.data(document, 'titleEffect', settings);

            if (document.title == '') {
                if (options.titles.length > 0) {
                    document.title = options.titles[0];
                }
            }

            if (options.effect == 'scroll') {

                var titles = settings.titles.join((options.seperator || defaults.seperator) + ' ') + '    ';

                plugin.titleScroller(titles);

            } else if (options.effect == 'replace') {

                plugin.titleReplacer(titles);

            } else if (options.effect == 'blink') {

                plugin.titleBlinker(options.titles);

            }

        }

        plugin.init();
    }

}(jQuery));