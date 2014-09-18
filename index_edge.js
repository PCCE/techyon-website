/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "width",
    centerStage: "both",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Techyon-Poster-Final12',
                type: 'image',
                rect: ['0px', '0px','1920px','1080px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Techyon-Poster-Final12.jpg",'0px','0px']
            },
            {
                id: 'Right',
                type: 'image',
                rect: ['959px', '0px','960px','1080px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Right.jpg",'0px','0px']
            },
            {
                id: 'Left',
                type: 'image',
                rect: ['-965px', '0px','960px','1080px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"Left.jpg",'0px','0px']
            },
            {
                id: 'T',
                type: 'image',
                rect: ['312', '1044','3000px','3000px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"T.png",'0px','0px']
            },
            {
                id: 'gearspinhalf',
                display: 'none',
                type: 'image',
                rect: ['961px', '-10px','350px','700px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gearspinhalf.png",'0px','0px']
            },
            {
                id: 'gearspinhalf2',
                display: 'none',
                type: 'image',
                rect: ['auto', '-10px','350px','700px','1865px', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gearspinhalf2.png",'0px','0px']
            },
            {
                id: 'gearspin',
                display: 'block',
                type: 'image',
                rect: ['312', '1044','3000px','3000px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"gearspin.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Techyon-Poster-Final12}": [
                ["style", "top", '0px'],
                ["style", "opacity", '1'],
                ["style", "left", '0px']
            ],
            "${_Left}": [
                ["style", "height", '1081px'],
                ["style", "top", '0px'],
                ["style", "left", '0px'],
                ["style", "width", '961px']
            ],
            "${_gearspinhalf}": [
                ["style", "top", '-10px'],
                ["style", "display", 'none'],
                ["style", "height", '1100px'],
                ["style", "left", '961px'],
                ["style", "width", '550px']
            ],
            "${_T}": [
                ["style", "top", '-10px'],
                ["style", "height", '1100px'],
                ["style", "opacity", '1'],
                ["style", "left", '410px'],
                ["style", "width", '1100px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1.00)'],
                ["style", "width", '1920px'],
                ["style", "height", '1080px'],
                ["style", "overflow", 'hidden']
            ],
            "${_Right}": [
                ["style", "height", '1081px'],
                ["style", "top", '0px'],
                ["style", "left", '959px'],
                ["style", "width", '961px']
            ],
            "${_gearspin}": [
                ["style", "top", '-10px'],
                ["transform", "rotateZ", '0deg'],
                ["style", "height", '1100px'],
                ["style", "display", 'block'],
                ["style", "left", '410px'],
                ["style", "width", '1100px']
            ],
            "${_gearspinhalf2}": [
                ["style", "top", '-10px'],
                ["style", "display", 'none'],
                ["style", "height", '1100px'],
                ["style", "right", '960px'],
                ["style", "left", 'auto'],
                ["style", "width", '550px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 15000,
            autoPlay: true,
            labels: {
                "Label 1": 10000
            },
            timeline: [
                { id: "eid135", tween: [ "style", "${_T}", "opacity", '0.15384615384615', { fromValue: '1'}], position: 7000, duration: 5000, easing: "easeInQuart" },
                { id: "eid133", tween: [ "style", "${_Techyon-Poster-Final12}", "opacity", '1', { fromValue: '1'}], position: 12000, duration: 0, easing: "easeInQuart" },
                { id: "eid141", tween: [ "style", "${_Techyon-Poster-Final12}", "opacity", '0', { fromValue: '1'}], position: 13000, duration: 2000, easing: "easeInQuart" },
                { id: "eid120", tween: [ "style", "${_gearspinhalf}", "left", '1920px', { fromValue: '961px'}], position: 7000, duration: 3000, easing: "easeInQuart" },
                { id: "eid122", tween: [ "style", "${_Left}", "left", '-961px', { fromValue: '0px'}], position: 7000, duration: 3000, easing: "easeInQuart" },
                { id: "eid93", tween: [ "style", "${_gearspinhalf}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid96", tween: [ "style", "${_gearspinhalf}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 },
                { id: "eid127", tween: [ "style", "${_gearspinhalf2}", "right", '1920px', { fromValue: '960px'}], position: 7000, duration: 3000, easing: "easeInQuart" },
                { id: "eid121", tween: [ "style", "${_Right}", "left", '1920px', { fromValue: '959px'}], position: 7000, duration: 3000, easing: "easeInQuart" },
                { id: "eid94", tween: [ "style", "${_gearspin}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
                { id: "eid95", tween: [ "style", "${_gearspin}", "display", 'none', { fromValue: 'block'}], position: 7000, duration: 0 },
                { id: "eid45", tween: [ "transform", "${_gearspin}", "rotateZ", '450deg', { fromValue: '0deg'}], position: 0, duration: 7000, easing: "easeOutQuart" },
                { id: "eid92", tween: [ "style", "${_gearspinhalf2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
                { id: "eid97", tween: [ "style", "${_gearspinhalf2}", "display", 'block', { fromValue: 'none'}], position: 7000, duration: 0 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-707239309");
