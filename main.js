function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier('MobileNet',modelLoaded);
}
function modelLoaded(){
  console.log("model loaded");
}
function draw(){
  image(video,0,0,300,300);
  classifier.classify(video,gotResult);
}
function gotResult(error,results){
  if(error){
    console.erreo(error);
  }
  else{
    console.log(results);
    document.getElementById("object").innerHTML=results[0].label;
    document.getElementById("Accuracy").innerHTML=results[0].confidence.toFixed(2)*100;
  }
}



