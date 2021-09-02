leftwristscore = 0;
rightwristscore = 0;
leftwristx = 0;
rightwristx = 0;
leftwristy = 0;
rightwristy = 0;
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
    posenetinisialiser.on("pose", gotposes);

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
function gotposes(results){
    if(results.length > 0){
        console.log(results);
        leftwristscore = results[0].pose.keypoints[9].score;
            leftwristxaxis = results[0].pose.leftWrist.x;
            leftwristyaxis = results[0].pose.leftWrist.y;
            rightwristscore = results[0].pose.keypoints[10].score;
            rightwristxaxis = results[0].pose.rightWrist.x;
            rightwristyaxis = results[0].pose.rightWrist.y;
    }
}