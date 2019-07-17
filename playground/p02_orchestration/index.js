'use strict';


$(function() {
    let animationRunning = false;
    const svg = document.querySelector("#sceneObject");
    let o1 = Animatic.orchestra();

    function prepAnimation(finishedCallback) {
        const svgDoc = svg.contentDocument;

        const rect = svgDoc.querySelector("rect");
        const circ1 = svgDoc.querySelector("#circle1");
        const circ2 = svgDoc.querySelector("#circle2");
        const circ3 = svgDoc.querySelector("#circle3");
        const circ4 = svgDoc.querySelector("#circle4");

        let rectAlteration = o1.add(Animatic.node({
            handler: function(done) {
                anime({
                    targets: rect,
                    easing: "linear",
                    duration: 500,
                    complete: done,

                    rx: "10%",
                });
            },

            backward: function(done) {
                anime({
                    targets: rect,
                    easing: "linear",
                    duration: 500,
                    complete: done,

                    rx: "0%",
                });
            },
        })).to(Animatic.node({
            handler: function(done) {
                anime({
                    targets: rect,
                    easing: "linear",
                    duration: 500,
                    complete: done,

                    opacity: 0
                });
            },

            backward: function(done) {
                anime({
                    targets: rect,
                    easing: "linear",
                    duration: 500,
                    complete: done,

                    opacity: 1
                });
            },
        }));

        const circles = [
            {x: "15%", y: "15%", circle: circ1},
            {x: "85%", y: "15%", circle: circ2},
            {x: "15%", y: "85%", circle: circ3},
            {x: "85%", y: "85%", circle: circ4},
        ];

        for (const circData of circles) {
            rectAlteration.to(Animatic.animeNode({
                targets: circData.circle,
                cx: circData.x,
                cy: circData.y,
                r: "10%",

                easing: "easeInSine",
                // duration: 250,
                duration: parseInt(250 + Math.random() * 500),
            }));
        }
        o1.onComplete(finishedCallback);
    }

    let button = $("button.inactive");

    let forward = true;

    function activateButton() {
        button.removeClass("inactive");

        button.click(function() {
            if ([
                Animatic.AnimationStatus.RUNNING,
            ].includes(o1.status)) {
                return;
            }

            button.addClass("inactive");

            if (forward) {
                o1.play();
            } else {
                o1.reverse();
            }

            forward = !forward;
        });
    }

    function doneCallback() {
        button.removeClass("inactive");
    }

    // must do this check because
    // the SVG might not be fully loaded
    if (svg.contentDocument.rootElement !== null){
        prepAnimation(doneCallback);
        activateButton();
    } else {
        svg.onload = function() {
            prepAnimation(doneCallback);
            activateButton();
        };
    }
});
