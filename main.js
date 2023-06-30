Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
  });
  
  var camera=document.getElementById("img");
  Webcam.attach("#img");
  
  function Tirar_Foto(){
    Webcam.snap(
      function(dataURI){
        document.getElementById("result").innerHTML='<img id="foto" src="'+dataURI+'">';
      }
    );
  }
  console.log("versão ml5:", ml5.version);
  
  var classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/vD3USY8oG/model.json",modelLoaded);
  function modelLoaded(){
    console.log("Modelo carregado!");
  }
  
  function Checar(){
    var img= document.getElementById("foto");
    classifier.classify(img, Pegar_resultado);
  }
  
  function Pegar_resultado(error, results){
    if(error){
      console.error(error);
    }
    else{
      console.log(results);
      document.getElementById("resultObjectName").innerHTML=results[0].label;
      document.getElementById("resultObjectAccuracy").innerHTML=(results[0].confidence.toFixed(3))*100+"%";
    }
  }