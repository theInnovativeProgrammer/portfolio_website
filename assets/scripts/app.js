const Portfolio = function() {
    function makeWords() {
        var words = [{
            text: "Python",
            weight: 6
        }, {
            text: "css3",
            weight: 8
        }, {
            text: "javascript",
            weight: 8
        }, {
            text: "HTML",
            weight: 3
        }, {
            text: "programming",
            weight: 8
        }, {
            text: "Hackerrank",
            weight: 3
        }, {
            text: "java",
            weight: 4
        }, {
            text: "StackOverflow",
            weight: 9
        }, {
            text: "coding",
            weight: 4
        }];
        return words;
    }

    function makeWordCloud(words) {
        $('.teaching-domains').jQCloud(words, { delay: 120 });
    }

    function displayWordCloud() {
        var count = 1;
        $(window).on('scroll', function() {
            var y_scroll_pos = window.pageYOffset;
            var scroll_pos_test = 2700; // set to whatever you want it to be
            var words = makeWords();
            if (y_scroll_pos > scroll_pos_test && count <= 1) {
                makeWordCloud(words);
                count++;
            }
        });
    }

    function designForm() {
        $("#my-modal form").addClass("my-form");
    }

    function typeAnimation() {
        Typed.new("#writing-text", {
            strings: [
                "am a Full-Stack Web Developer.", "Machine Learning Enthusiast.", "also help people in programming.", "solve problems."
            ],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 1,
            contentType: 'text',
            callback: function() {
                $("#writing-text").css({ "color": "#fff", "background-color": "#C8412B" });
            },
            preStringTyped: function() {},
            onStringTyped: function() {}
        });
    }

    return {
        displayWordCloud: displayWordCloud,
        typeAnimation: typeAnimation
    }

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();