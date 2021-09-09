music = "";
music2 = "";
leftwristscore = 0;
rightwristscore = 0;
leftwristxaxis = 0;
rightwristxaxis = 0;
leftwristyaxis = 0;
rightwristyaxis = 0;
function preload(){
    music = loadSound("music.mp3");
    music2 = loadsound("music2.mp3")
}
function setup(){
    canva = createCanvas(600, 500);
    canva.position(650, 300);
    myvideo = createCapture(VIDEO);
    myvideo.hide();
    posenetinisialiser = ml5.poseNet(myvideo, poseNetloaded);
    posenetinisialiser.on("pose", gotposes);

}
function poseNetloaded(){
    console.log("PoseNet loaded")
}
function draw(){
    function draw(){
        image(myvideo, 0, 0, 600, 500);
        //console.log("left score is" + leftwristscore);
        if(leftwristscore > 0.002){
            circle(leftwristxaxis, leftwristyaxis, 20);
            console.log("leftwristcircle");
                
        }

    }
    
}
function playmusic(){
    music.play();
    music.setVolume(0.5);
    music.rate(1);
}
function playemusic(){
    music2.play();
    music2.setVolume(0.5);
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
