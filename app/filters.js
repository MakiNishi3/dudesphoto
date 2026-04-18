import angular from "/filters/effects/angular.js"
import labadjust from "/filters/effects/labadjust.js"
import fisheye from "/filters/effects/fisheye.js"
import polarwarp from "/filters/effects/polarwarp.js"
import rotate from "/filters/effects/rotate.js"
import swirl from "/filters/effects/swirl.js"
import wave from "/filters/effects/wave.js"
import zigzag from "/filters/effects/zigzag.js"
import brightness from "/filters/fxslash/brigtness.js"
import contrast from "/filters/fxslash/contrast.js"
import curves from "/filters/fxslash/curves.js"
import saturation from "/filters/fxslash/saturation.js"
import grayscale from "/filters/fxslash/grayscale.js"
import hue from "/filters/fxslash/hue.js"
import invert from "/filters/fxslash/invert.js"

const registry = {
angular,
labadjust,
fisheye,
polarwarp,
rotate,
swirl,
wave,
zigzag,
brightness,
contrast,
curves,
saturation,
grayscale,
hue,
invert
}

const effects = registry

const optionValueEffects = Object.values(registry)
