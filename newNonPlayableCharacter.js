function newNonPlayableCharacter(x, y) {
    let element = newImage('assets/red-character/static.gif')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)
    // const myPromise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("foo");
    //     }, 300);
    //   });

    function walkEast(time) {
        const myPromise = new Promise((resolve)=> {
            direction = 'east'
            element.src = `./assets/red-character/east.gif`
            setTimeout(() => {
                stop()
                resolve('promise resolved');
            }, time);
        });

        myPromise.then((val) => {
            console.log(val);
        });
  
    }

    function walkNorth(time) {
        const myPromise = new Promise((resolve)=> {
            direction = 'north'
            element.src = `./assets/red-character/north.gif`
            setTimeout(() => {
                stop()
                resolve('promise resolved');
            }, time)

            myPromise.then((val) => {
                console.log(val);
            });

        });

    }

    function walkWest(time) {
        const myPromise = new Promise((resolve)=> {
            direction = 'west'
            element.src = `./assets/red-character/west.gif`
            setTimeout(() => {
                stop()
                resolve('promise resolved');
            }, time)

            myPromise.then((val) => {
                console.log(val);
            });

    });
}

    function walkSouth(time) {
        const myPromise = new Promise((resolve)=> {
            direction = 'south'
            element.src = `./assets/red-character/south.gif`
            setTimeout(() => {
                stop()
                resolve('promise resolved');
            }, time)

            myPromise.then((val) => {
                console.log(val);
            });

    });
}
    function stop() {
        direction = null
        element.src = `./assets/red-character/static.gif`
    }

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }
}