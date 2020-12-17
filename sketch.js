const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingshot;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    ground1 =new Ground(600,300,300,10)
    ground2=new Ground(1000,200,300,10)

    box1 = new Box(540,275,30,40);
    box2 = new Box(570,275,30,40);
    

    box3 = new Box(600,275,30,40);
    box4 = new Box(630,275,30,40);
    
    box5 = new Box(660,275,30,40);
    box6 = new Box(510,275,30,40);
    box7 = new Box(690,275,30,40);
    box8 = new Box(600,235,30,40);
    

    box9 = new Box(630,235,30,40);
    box10 = new Box(660,235,30,40);
    
    box11 = new Box(570,235,30,40);
    box12 = new Box(540,235,30,40);
    box13 = new Box(600,195,30,40);
    
    box14 = new Box(630,195,30,40);
    box15 = new Box(570,195,30,40);
    box16 = new Box(600,155,30,40);

    boxA = new Box(1000,175,30,40);
    boxB= new Box(1030,175,30,40);
    

    boxC = new Box(1060,175,30,40);
    boxD = new Box(970,175,30,40);
    
    boxE = new Box(940,175,30,40);
    boxF= new Box(1000,135,30,40);
    boxG = new Box(1030,135,30,40);
    boxH= new Box(970,135,30,40);
    

    boxI = new Box(1000,95,30,40);
    boxJ = new Box(1030,95,30,40);
    
    boxK = new Box(970,95,30,40);
    boxL = new Box(1000,55,30,40)
    boxM= new Box(910,175,30,40);
    

    boxN = new Box(1090,175,30,40);
    boxO = new Box(1060,135,30,40);
    
    boxP = new Box(930,135,30,40);
    
    

    
    
    
    



    
    


    ball = new Ball(50,200,60);
    

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(ball.body,{x:100, y:200});
}

function draw(){
    background("lightgreen");
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    

    box3.display();
    box4.display();
    ground1.display();
    ground2.display();
    

    box5.display();
    ball.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();

    

    boxA.display();
    boxB.display();
    
    

    boxC.display();
    boxD.display();
    
    

    boxE.display();
    boxF.display();
    boxG.display();
    boxH.display();
    boxI.display();
    boxJ.display();
    boxK.display();
    boxL.display();
    boxM.display();
    boxN.display();
    boxO.display();
    boxP.display();
    
    
    
    
    

    

  
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
