(function () {
    "use strict";

    var stonesList = document.getElementsByClassName('stone');

    Array.forEach(stonesList, function (stoneElt) {
        var onStoneClick = function (e) {
            e.preventDefault();
            this.classList.toggle('selected');
        }
        stoneElt.addEventListener('click', onStoneClick);
        stoneElt.addEventListener('touchstart', onStoneClick);
    });

    var locked = false;

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
