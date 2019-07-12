(function(window, document, $, TweenMax) {
    $(function() {

        // simple prop manipulation
        let obj = {some: 10};
        TweenMax.to(obj, 1, {
            some: 200,
            onUpdate: function() {
                // console.log(obj.some);
            }
        });

        // node manipulation
        const myDiv = $("#my-div");
        TweenMax.to(myDiv, 1, {
            x: 500
        });

    });
})(window, document, $, TweenMax);
