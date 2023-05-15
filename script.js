var colors=["blue","green","red","yellow"];
var gameseq=[];
var btnclicked=[];
var ready=false;
var level=1;
var i=0
var lv;
$(document).keydown(function (){
if(!ready){
    // $("h1").text("level "+level);
    // level++;
    seq();
}
});
$(".btn").on("click",function(){
    var btnid=$(this).attr("id");
    btnclicked.push(btnid);
    console.log(btnclicked);
    lv=btnclicked.length-1;
    $("#"+btnid).addClass("pressed")
        setTimeout(function(){
            $("#"+btnid).removeClass("pressed");
        },100);
    sound(btnid);
    do{
    setTimeout(check(),1500);
    }while(btnclicked.length<lv+1);
    
});

function check(){
    if(gameseq[lv] === btnclicked[lv]){
        if (gameseq.length === btnclicked.length){
            setTimeout(seq,1000);
        }
    }
    else{
        sound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {

        $("body").removeClass("game-over")
         gameseq=[];
     btnclicked=[];
     ready=false;
     level=1;
     i=0;
      }, 200);
    //   start();
    }
}
function seq(){
    btnclicked=[];
    $("h1").text("level "+level);
    level++;
    var random=Math.floor(Math.random()*4);
    var col=colors[random];
    gameseq.push(col);
    console.log(gameseq);
    console.log(level);
    $("#"+gameseq[i]).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
   sound(gameseq[i]);
   i++;

}
function sound(name){
    var audio1=new Audio("./sounds/"+name+".mp3");
    audio1.play();
}
// function start(){
//     var gameseq=[];
//     var btnclicked=[];
//     var ready=false;
//     var level=1;
// }