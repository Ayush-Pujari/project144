 
nose_x=0;
nose_y=0;

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,model_Loded);
    poseNet.on('pose',gotposes);
}
function takeSnapshot(){
    save('img.png');
    
}
function draw(){
    image(video,0,0,300,300);
    image(nose,nose_x,nose_y,30,30);
}
function model_Loded(){
    console.log("poseNet is intiallise");

}
function gotposes(results){
    if(results.length>0){
         console.log(results);
         console.log("nose x = "+results[0].pose.nose.x);
         nose_x=results[0].pose.nose.x-10;
         console.log("nose x = "+results[0].pose.nose.y);
         nose_y=results[0].pose.nose.y-10;
    }
}
function preload(){
    nose=loadImage('https://i.postimg.cc/wT7d0S82/p1.png');
}

