$(function() {
    let animationRunning = false;
    const svg = document.querySelector("#sceneObject");

    function doAnimation(finishedCallback) {
        const svgDoc = svg.contentDocument;

        svgDoc.onload = function() {
            console.log("hilarious");
        }

        const rect = svgDoc.querySelector("rect");
        const circ1 = svgDoc.querySelector("#circle1");
        const circ2 = svgDoc.querySelector("#circle2");
        const circ3 = svgDoc.querySelector("#circle3");
        const circ4 = svgDoc.querySelector("#circle4");

        let finishedCircles = 0;

        const circles = [
            {x: "15%", y: "15%", circle: circ1},
            {x: "85%", y: "15%", circle: circ2},
            {x: "15%", y: "85%", circle: circ3},
            {x: "85%", y: "85%", circle: circ4},
        ];

        let rectTimeline = anime.timeline({
            targets: rect,
            easing: "linear",
        });

        rectTimeline.add({
            duration: 500,
            rx: "50%",
            fill: "rgb(0, 255, 0)"
        })
        .add({
            duration: 150,
            opacity: 0,
        })
        .finished.then(function() {
            let circAnimations = [];

            for (let circData of circles) {
                let circAnimation = anime({
                    targets: circData.circle,
                    cx: circData.x,
                    cy: circData.y,
                    r: "10%",

                    easing: "easeInSine",
                    duration: 250,
                });

                circAnimation.pause();
                circAnimations.push(circAnimation);
            };

            for (let circAnim of circAnimations) {
                circAnim.finished.then(function() {
                    finishedCircles += 1;

                    if (finishedCircles == circles.length) {
                        setTimeout(function() {
                            rectTimeline.seek(0);

                            for (let circAnim2 of circAnimations) {
                                circAnim2.seek(0);
                            }
                            finishedCallback();
                        }, 1000);
                    }
                });
                circAnim.play();
            }
        });
    }

    function activateButton() {
        let button = $("button.inactive");
        button.removeClass("inactive");

        button.click(function() {
            if (animationRunning)
                return;

            button.addClass("inactive");
            animationRunning = true;

            let animationPromise = doAnimation(function() {
                animationRunning = false;
                button.removeClass("inactive");
            });
        });
    }

    // must do this check because
    // the SVG might not be fully loaded
    if (svg.contentDocument.rootElement !== null){
        activateButton();
    } else {
        svg.onload = function() {
            activateButton();
        };
    }

});
