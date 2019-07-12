(function(window, document, $, TweenMax) {
    $(function() {

        const speed = 0.5;

        function angleRate() {
            return $("#ang-rate").val();
        }

        $("#xang-plus").click(function() {
            TweenMax.to("#my-cube", speed, {
                rotationX: `+=${angleRate()}`,
            });
        });

        $("#xang-minus").click(function() {
            TweenMax.to("#my-cube", speed, {
                rotationX: `-=${angleRate()}`,
            });
        });

        $("#yang-plus").click(function() {
            TweenMax.to("#my-cube", speed, {
                rotationY: `+=${angleRate()}`,
            });
        });

        $("#yang-minus").click(function() {
            TweenMax.to("#my-cube", speed, {
                rotationY: `-=${angleRate()}`,
            });
        });

        $("#zang-plus").click(function() {
            TweenMax.to("#my-cube", speed, {
                rotationZ: `+=${angleRate()}`,
            });
        });

        $("#zang-minus").click(function() {
            TweenMax.to("#my-cube", speed, {
                rotationZ: `-=${angleRate()}`,
            });
        });

        $("#reset").click(function() {
            TweenMax.to("#my-cube", speed, {
                rotationX: 0,
                rotationY: 0,
                rotationZ: 0,
            });
        });

    });
})(window, document, $, TweenMax);
