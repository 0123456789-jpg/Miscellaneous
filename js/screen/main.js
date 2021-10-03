//Author: C191239
//E-mail: zsz_david_zsz@hotmail.com
//Create on 2021-10-01
var x='3';
var y='3';
function out(){
    document.getElementById(x+"-"+y).setAttribute("style", "color: #0000FF");
}
function reset(){
    document.getElementById(x+"-"+y).setAttribute("style", "color: #000000");
}
function init(){
    reset();
    x=3;
    y=3;
    out();
    return 0;
}
function up(){
    if(x>=2){
        reset();
        x=x-1;
        out();
        return 0;
    }else{
        return 1;
    }
}
function down(){
    if(x<5){
        reset();
        x=x+1;
        out();
        return 0;
    }else{
        return 1;
    }
}
function left(){
    if(y>=2){
        reset();
        y=y-1;
        out();
        return 0;
    }else{
        return 1;
    }
}
function right(){
    if(y<5){
        reset();
        y=y+1;
        out();
        return 0;
    }else{
        return 1;
    }
}
