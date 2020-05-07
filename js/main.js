alert("Catch the virus")

var count=0, virus, x_position, y_position;
  virus = document.querySelector("#virus");

  virus.onmouseover =   function Escape(){
      count ++;
      x_position=parseInt(Math.random()*1000);
      y_position=parseInt(Math.random()*1000);
      virus.style.left=x_position+"px";
      virus.style.top=y_position+"px";
      virus.style.width=this.clientWidth+5+"px";
      virus.style.height=this.clientHeight+5+"px";
    }

    virus.onclick=function FinishGame(){
      alert(count+" people infected :(");
      virus.style.width="85px";
      virus.style.height="85px";
      count=0;
    }
