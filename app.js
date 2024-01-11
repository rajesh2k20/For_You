var a= document.getElementById("no");
var b= document.getElementById("yes");
console.log(a, b);
a.addEventListener("mouseover", function (){
    a.innerHTML="YES I Go..";
    b.innerHTML="No..";
})

a.addEventListener("mouseleave",function (){
    a.innerHTML="NO..";
    b.innerHTML="Yes I Go..";
});
audioElement.play();