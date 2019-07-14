$(function() {
    const svg = document.querySelector("#myScene");

    svg.onload = function() {
        const svgDoc = svg.contentDocument;
        const rect = svgDoc.querySelector("rect");
        const circ = svgDoc.querySelector("circle");

        anime({
            targets: rect,
            x: "+=200",

            duration: 500,
            loop: true,
            direction: "alternate",
            easing: "linear"
        });

        anime({
            targets: circ,
            cx: "+=200",

            duration: 1000,
            loop: true,
            direction: "alternate",
            easing: "linear"
        });
    };
});
