'use strict';

let o1 = Animatic.orchestra();
let n1 = Animatic.node({
    handler: function(done){console.log("--- N1F"); done();},
    backward: function(done){console.log("--- N1B"); done();}
});
let n2 = Animatic.node({
    handler: function(done){console.log("--- N2F"); done();},
    backward: function(done){console.log("--- N2B"); done();}
});
let n3 = Animatic.node({
    handler: function(done){console.log("--- N3F"); done();},
    backward: function(done){console.log("--- N3B"); done();}
});

o1.add(n1);
n1.to(n2).to(n3);
console.log("ORIGG");
o1.play();

console.log("\nREVV");
o1.reverse();


$(function() {
    let animationRunning = false;
    const svg = document.querySelector("#sceneObject");

    function doAnimation(finishedCallback) {
        // const svgDoc = svg.contentDocument;
        //
        // svgDoc.onload = function() {
        //     console.log("hilarious");
        // }
        //
        // const rect = svgDoc.querySelector("rect");
        // const circ1 = svgDoc.querySelector("#circle1");
        // const circ2 = svgDoc.querySelector("#circle2");
        // const circ3 = svgDoc.querySelector("#circle3");
        // const circ4 = svgDoc.querySelector("#circle4");
        //
        // let main = Animatic.branch();
        //
        // // sequential animation
        // let branchSplit = mainBranch.add({}).add({}).split(2);
        //
        // // animation parallelization
        // let branch1 = branchSplit.branch(0);
        // let branch2 = branchSplit.branch(1);
        //
        // // animation parallel branches reunite

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
