(function () {
    "use strict";

    var stonesList = document.getElementsByClassName('stone');
    var locked = false;

    Array.forEach(stonesList, function (stoneElt) {
        var onStoneClick = function (e) {
            e.preventDefault();
            if (!locked) {
              this.classList.toggle('selected');
            }
        }
        stoneElt.addEventListener('click', onStoneClick);
        stoneElt.addEventListener('touchstart', onStoneClick);
    });

    function handleOrientationEvent(ev) {
        if (!locked && isFaceDown(ev.beta)) {
            locked = true;
        }
        if (locked && !isFaceDown(ev.beta)) {
            locked = false;
        }
    }

    function isFaceDown(beta) {
        return Math.abs(beta) > 170;
    }

    window.addEventListener("deviceorientation", handleOrientationEvent, true);

})();
