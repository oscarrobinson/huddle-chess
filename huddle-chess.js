if (Meteor.isClient) {
    canvas = HuddleCanvas.create("huddle-orbiter.proxemicinteractions.org", 60422, "HuddleDocumentation", {
        panningEnabled: true,
        rotationEnabled: false,
        scalingEnabled: true,
        layers: ["huddle-layer", "svg-layer"],
        onLoadCallback: loadRaph

    });

    function addPiece(name, color, x, y) {
        $("#huddle-layer").append("<div id='piece-" + x + y + "'></div>");
        $("#piece-" + x + y).css({
            "top": y + "px",
            "left": x + "px",
        });
        $("#piece-" + x + y).addClass("huddle-object can-drag " + name + "-" + color);

    }

    function loadRaph() {
        var width = canvas.getFeedSize()[0];
        var height = canvas.getFeedSize()[1];
        cellWidth = 300;
        paper = Raphael("svg-layer", width, height);
        for (var y = 0; y < 8; y++) {
            for (var x = 0; x < 8; x++) {
                rect = paper.rect(x * cellWidth, y * cellWidth, cellWidth, cellWidth);
                if (y % 2 == 0) {
                    if (x % 2 == 0) {
                        rect.attr("fill", "gray");
                    } else {
                        rect.attr("fill", "white");
                    }
                } else {
                    if (x % 2 != 0) {
                        rect.attr("fill", "gray");
                    } else {
                        rect.attr("fill", "white");
                    }
                }

                if (y == 1) {
                    addPiece("pawn", "white", x * cellWidth, y * cellWidth)
                }
                if (y == 6) {
                    addPiece("pawn", "black", x * cellWidth, y * cellWidth)
                }
                if (y == 0 && ((x == 0) || x == 7)) {
                    addPiece("castle", "white", x * cellWidth, y * cellWidth)
                }
                if (y == 7 && ((x == 0) || x == 7)) {
                    addPiece("castle", "black", x * cellWidth, y * cellWidth)
                }

                if (y == 0 && ((x == 1) || x == 6)) {
                    addPiece("knight", "white", x * cellWidth, y * cellWidth)
                }
                if (y == 7 && ((x == 1) || x == 6)) {
                    addPiece("knight", "black", x * cellWidth, y * cellWidth)
                }

                if (y == 0 && ((x == 2) || x == 5)) {
                    addPiece("bishop", "white", x * cellWidth, y * cellWidth)
                }
                if (y == 7 && ((x == 2) || x == 5)) {
                    addPiece("bishop", "black", x * cellWidth, y * cellWidth)
                }
                if (y == 0 && x == 3) {
                    addPiece("king", "white", x * cellWidth, y * cellWidth)
                }
                if (y == 7 && x == 3) {
                    addPiece("king", "black", x * cellWidth, y * cellWidth)
                }
                if (y == 0 && x == 4) {
                    addPiece("queen", "white", x * cellWidth, y * cellWidth)
                }
                if (y == 7 && x == 4) {
                    addPiece("queen", "black", x * cellWidth, y * cellWidth)
                }

            }
        }

        HuddleObject.initObjects();


    }


}

if (Meteor.isServer) {
    Meteor.startup(function() {
        // code to run on server at startup
    });
}