// alert("Welcome MJ");
function update(element){
    document.getElementById("discription").innerHTML = element.alt;
    element.width = "400";
    element.style.zIndex  = "1";
}

function undo(element){
    document.getElementById("discription").innerHTML = "Hower Over the Image to get Image Details";
    element.width = "300"
}

function show(){
    var para=document.getElementById("para");
    para.style.display = "block";
}
function hide(){
    var para=document.getElementById("para");
    para.style.display = "none";
}