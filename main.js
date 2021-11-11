function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/qrnVvFKnX/.json",modelready);
}
 function modelready(){
     classifier.classify(gotresults);
     var dog = 0;
     var cat = 0;
     var lion =0;
     var horse =0;
 }   
 function gotresults(error,results){
     if(error){
         console.log(error)
     }
     else{
         console.log(results)
         random_number_r = Math.floor(Math.random() * 255) + 1;
         random_number_g = Math.floor(Math.random() * 255) + 1;
         random_number_b = Math.floor(Math.random() * 255) + 1;
         
    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ ' Detected Cat - '+cat; 'Detected Lion - '+lion+ ' Detected Horse - '+horse;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

    img = document.getElementById('animal_image');

     }
     if (results[0].label == "Barking") {
        img.src = 'DOG.jpg';
        DOG = DOG+1;
        if (results[0].label == "Neighing") {
            img.src = 'Horse.jpg';
            Horse = Horse+1;
            if (results[0].label == "Roaring") {
                img.src = 'Lion.jpg';
                Lion = Lion+1;
      } else if (results[0].label == "Meowing") {
        img.src = 'cat.jpg';
        cat = cat + 1;
      } else{
        img.src = 'EAR.png';
      };