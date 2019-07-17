(function() {
    class AnimeAdapterNode extends Animatic.AbstractAnimaticAdapterNode {
        contructor(opts) {
            opts.autoplay = false;
            this._animationInstance = anime(opts);
        }

        // properties
        get adaptee() {
            return this._animationInstance;
        }

        // control
        forward() {
            this._animationInstance.play();
        }

        pause() {
            this._animationInstance.pause();
        }

        backward() {
            this._animationInstance.reverse();
        }
    };

    // class AnimeTimelineAdapterNode extends Animatic.AnimaticAdapterNode {
    //     contructor(opts) {
    //
    //     }
    //
    //     play() {
    //         throw Error("Not implemented!");
    //     }
    //
    //     pause() {
    //         throw Error("Not implemented!");
    //     }

    Animatic.AnimeAdapterNode = AnimeAdapterNode;
    // Animatic.AnimeTimelineAdapterNode = AnimeTimelineAdapterNode;

    Animatic.animeNode = function(opts) {
        return Animatic.node({handler: new AnimeAdapterNode(opts)});
    };

    // Animatic.animeTimelineNode = function(opts) {
    //     return Animatic.node({handler: new AnimeTimelineAdapterNode(opts)});
    // };
})();
