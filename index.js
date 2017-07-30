/**
 * Imports
 */

const Hue = require('philips-hue');

/**
 * Variables
 */
const hue = new Hue();
let bridge = null;

function findBridges() {
    hue.getBridges().then(function(bridges) {
        if (bridges.length === 0) {
            return console.error("Unable to find any bridges.");
        }
        bridge = bridges[0];
        console.log("Using bridge \"" + bridge + "\"");
    }).catch(function(err){
        console.error(err.stack || err);
    });
}
 
findBridges();
