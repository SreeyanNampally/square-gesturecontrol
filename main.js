nosex = 0;
nosey = 0;
leftwristx = 0;
rightwristx = 0;

function setup(){
    canvas = createCanvas(500,500)
    canvas.center()
    video = createCapture(VIDEO);
    posenet = ml5.poseNet(video, modelloaded)
    posenet.on("pose", gotposes)
}

function draw(){
    background("grey");
    difference = rightwristx - leftwristx
    fill("blue");
    rect(nosex,nosey,difference, difference); 
}

function modelloaded(){
    console.log("posenet is initialized")
}

function gotposes(results){
    if(results.length>0){
        console.log(results)
        nosex = results[0].pose.nose.x 
        nosey = results[0].pose.nose.y
        leftwristx = results[0].pose.leftWrist.x
        rightwristx = results[0].pose.rightWrist.x
        document.getElementById("size").innerHTML = (leftwristx - rightwristx).toFixed(2);
    }
}


