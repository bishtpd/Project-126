music = "";
function preload(){
    music = loadSound("music.mp3");
}
function setup(){
    canvas = createCanvas(650, 500);
    canvas.position(600, 250);
    myvideo = createCapture(VIDEO);
    myvideo.hide();
    posenetinisialiser = ml5.poseNet(myvideo, poseNetloaded);

}
function poseNetloaded(){
    console.log("PoseNet has been loaded.")
}
function draw(){
    image(myvideo, 0, 0, 600, 500);
}
function playmusic(){
    music.play();
    music.setVolume(0.5);
    music.rate(1);
}