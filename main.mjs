// import { } from '/game/utils';
// import { } from '/game/prototypes';
// import { } from '/game/constants';
// import { } from '/arena';

import { getObjectsByPrototype } from '/game/utils';
import { Creep } from '/game/prototypes';
import { Flag } from '/arena';

export function loop() {
    // Your code goes here
    const creeps = getObjectsByPrototype(Creep);
    const flags = getObjectsByPrototype(Flag);

    flags.forEach(function(myflag) {
        console.log("Found flag: x="+ myflag.x + "y=" + myflag.y);
    });

    const flag = flags[0];

    creeps.forEach(function(myCreep) {
        runCreep(myCreep, flag);
    });
}

function runCreep(creep, flag) {
    creep.moveTo(flag);
}