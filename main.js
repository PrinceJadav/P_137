status = "";
input_text = "";
results = [];

function setup(){
    canvas = createCanvas(300, 290);
    canvas.position(480, 250);
    video = createCapture(VIDEO);
    video.size(300,290);
    video.hide();
}
function start(){
  object_dectector = ml5.object_dectector("cocossd",modelLoaded);
  document.getElementById("status").innerHTML ="STATUS : DECTETING OBJECTS";
  input_text = document.getElementById("input_id").value
}
function modelLoaded(){
    console.log("model_loaded");
    status = true;
}

function draw(){
    Image(video,0,300,290);
    if(status !="")
    {
        object_dectector.detect(gotresult);

        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "STATUS : OBJECT DETECTED";
            document.getElementById("number_of_objects").innerHTML = "NUMBER OF OBJECTS DETECTED ARE : ";
            
            fill("#ff0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", object[i].x + 15, objects[i].y + 15);
            nofill();
            stroke("ff0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].hieght);
    }
    document.getElementById("object_status").innerHTML = object_name + "Found";
}
}
function gotresult(){
    
    console.log(results);
}