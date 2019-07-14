$(function() {
    const svg = document.querySelector("#myScene");

    function handle() {
        const svgDoc = svg.contentDocument;

        svgDoc.onload = function() {
            console.log("hilarious");
        }

        const circ = svgDoc.querySelector("circle");

        const tl = anime.timeline({
            easing: "linear",
            targets: circ,
            duration: 500,
            loop: true
        });

        tl.add({
            cx: "+=200",
        });

        tl.add({
            easing: "easeOutElastic(0, .5)",
            cy: "+=200",
        });

        tl.add({
            cx: "+=200",
            duration: 1000
        });

        tl.add({
            cy: "-=200",
        });

        tl.add({
            cx: "-=400",
        });
    };

    // must do this check because
    // the SVG might not be fully loaded
    if (svg.contentDocument.rootElement !== null){
        console.log("ALREADYLOADED");
        handle();
    } else {
        svg.onload = function() {
            console.log("ONLOAD");
            handle();
        };
    }

});
