nosex=0;
nosey=0;
function preload() {
lipstick=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
}
function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet =ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotposes);
}
function draw() {
    image(video,0,0,300,300);
    image(lipstick, nosex, nosey, 30, 30);
}
function take_snapshot() {
    save("me_with_lipstick.png");
}
function modelLoaded() {
    console.log("posenet is initialized");
}
function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        nosex=results[0].pose.nose.x-15;
        nosey=results[0].pose.nose.y+20;
        console.log("Nose x="+nosex);
        console.log("Nose y="+nosey);
    }
}