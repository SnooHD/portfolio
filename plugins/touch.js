window.onload = function() {
    (function(document) {
        const createEvent = function(e, name) {
            let customEvent = document.createEvent("CustomEvent");
            customEvent.initCustomEvent(name, true, true, e.target);
            e.target.dispatchEvent(customEvent);
            customEvent = null;
            return false
        }
        let noMove = true;
        let startPoints = {
            x: 0,
            y: 0
        };
        let endPoints = {
            x: 0,
            y: 0
        }
        
        const touch = {
                touchstart: function(e) {
                    startPoints = {
                        x: e.touches[0].pageX,
                        y: e.touches[0].pageY
                    }
                },
                touchmove: function(e) {
                    noMove = false;
                    endPoints = {
                        x: e.touches[0].pageX,
                        y: e.touches[0].pageY
                    }
                },
                touchend: function(e) {
                    if (noMove) {
                        createEvent(e, 'tab')
                    } else {
                        const moveX = endPoints.x - startPoints.x;
                        const absX = Math.abs(moveX);
                        const moveY = endPoints.y - startPoints.y;
                        const absY = Math.abs(moveY);
                        
                        if (Math.max(absX, absY) > 100) {
                            createEvent(e, (absX > absY ? (moveX < 0 ? 'swipeLeft' : 'swipeRight') : (moveY < 0 ? 'swipeUp' : 'swipeDown')));
                        }else if (Math.max(absX, absY) < 10) {
                            createEvent(e, 'tab');
                        }
                    }
                    noMove = true
                },
                touchcancel: function(e) {
                    noMove = false
                }
            };
        for (let event in touch) {
            document.addEventListener(event, touch[event], false);
        }
    })(document);
}