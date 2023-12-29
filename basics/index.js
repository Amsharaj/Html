function add(){
    a=document.getElementById("ainput").value;
    b=document.getElementById("binput").value;
    c=parseInt(a)+parseInt(b);
    document.getElementById("answer").innerHTML=c;
}
function sub(){
    a=document.getElementById("ainput").value;
    b=document.getElementById("binput").value;
    c=parseInt(a)-parseInt(b);
    document.getElementById("answer").innerHTML=c;
}
function mul(){
    a=document.getElementById("ainput").value;
    b=document.getElementById("binput").value;
    c=parseInt(a)*parseInt(b);
    document.getElementById("answer").innerHTML=c;
}
function div(){
    a=document.getElementById("ainput").value;
    b=document.getElementById("binput").value;
    c=parseInt(a)/parseInt(b);
    document.getElementById("answer").innerHTML=c;
}