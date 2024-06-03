var images;
images=document.getElementById("Image");
function change(images){
    let img1='Project/img1.webp';
    let img2='Project/img2.png';
    let img3='Project/img3.webp';
    if(images.src==img1){images.src=img2;}
    else if(images.src==img2){images.src=img3;}
    else if(images.src==img3){images.src=img1;}
 
}
