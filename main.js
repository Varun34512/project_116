function preload() {
must= loadImage('https://i.postimg.cc/dVQQ9hPH/must.png') ;
    }

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded) ;
    poseNet.on('pose', gotPoses) ;
}

function takeSnapshot() {
    save('myFilter.png');
}

function modelLoaded() {
    console.log("Model PoseNet Is Loaded");
}

noseX = 0 ;
noseY = 0 ;

function gotPoses(results) {
    if (results.length>0) {
        console.log(results) ;
        console.log("x coordinate of nose =" + results[0].pose.nose.x) ;
        console.log("y coordinate of nose =" + results[0].pose.nose.y) ;
        noseX=results[0].pose.nose.x ;
        noseY=results[0].pose.nose.y ;
    }
}

function draw() {
    image(video, 0, 0, 300, 300) ;
    image(must, noseX-25 ,noseY+10 ,60,40) ;
}