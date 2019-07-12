(function(window, document, $, TweenMax) {
    $(function() {

        TweenMax.to("#my-div", 1, {
            x: 400,
            y: 400,
            rotationX: 30,
            rotationY: 30,
            rotationZ: 30,
        });

    });
})(window, document, $, TweenMax);
