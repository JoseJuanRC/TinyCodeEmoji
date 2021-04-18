function setup(){
  d=400,size=30;
  t=0;
  gen=0;
  clear=true;
  createCanvas(d,d);
}

function draw(){
  timer();
  for (i=0;i<d;i++) {
    switch(gen) {
      case 0:
        x=random(d),y=random(d);
        break;
        case 1:
          if(i==0) x=random(d);
          y=i;
          break;
        case 2:
          if(i==0) y=random(d);
          x=i;
    }
    if(clear) {
      fill(99);
      noStroke();
      circle(x,y,gen==0? 4:10);
    }else if(inside(x-d/2,y-d/2)) {
      stroke(255,checkRed(x,y) ?0:255,0);
      point(x,y);
    }  
  }
}

function timer(){
  if (t++>200) {
    if (clear) {
      gen=(gen+1)%3;
      background(99);
    }
    clear=!clear;
    t=0;
  }   
}

function inside(x,y){return sqrt(x*x+y*y)<150;}

function checkRed(x,y){return heartPos(x-50,y+50,2.7) ?true:heartPos(x+50,y+50,3.5);}

function heartPos(x,y,a){
  X=x-d/2;
  Y=y-d/2;
  tX=X*cos(a)-Y*sin(a);
  Y=X*sin(a)+Y*cos(a);
  X=tX;
  
  X/=size;
  Y/=size;
  return(X*X+Y*Y-1)**3<X*X*Y**3;
}