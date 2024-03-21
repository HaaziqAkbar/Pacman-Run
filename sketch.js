var bg;
var mainScreen;

let gameState = "wait";

var playButton;
var wall1;

var mainScreenSound,clickSound; 






function preload(){
    mainScreen = loadImage("Assets/pacman run.gif");

    mainScreenSound = loadSound("Assets/pacman_beginning.wav");
    clickSound = loadSound("Assets/clickingSound.mp3");
}


function setup(){
createCanvas(900,800);

    playButton = createImg("Assets/button.png");
    playButton.position(250,400);
    playButton.size(width / 2,width / 2);
    playButton.hide();

    Bwall1 = createSprite(40,10,1800,20);
    Bwall1.shapeColor = "blue";

    Bwall2 = createSprite(80,790,1800,20);
    Bwall2.shapeColor = "blue";

    Bwall3 = createSprite(50,310,100,20);
    Bwall3.shapeColor = "blue";

    Bwall4 = createSprite(10,170,20,300);
    Bwall4.shapeColor = "blue";

    Bwall5 = createSprite(90,345,20,50);
    Bwall5.shapeColor = "blue";

    Bwall6 = createSprite(70,370,60,20);
    Bwall6.shapeColor = "blue";

    Bwall7 = createSprite(70,510,60,20);
    Bwall7.shapeColor = "blue";

    Bwall8 = createSprite(90,540,20,50);
    Bwall8.shapeColor = "blue";

    Bwall9 = createSprite(50,570,100,20);
    Bwall9.shapeColor = "blue";

    Bwall10 = createSprite(10,675,20,210);
    Bwall10.shapeColor = "blue";

    Bwall11 = createSprite(50,440,20,119);
    Bwall11.shapeColor = "blue";

    Bwall12 = createSprite(870,310,100,20);
    Bwall12.shapeColor = "blue";

    Bwall13 = createSprite(890,160,20,280);
    Bwall13.shapeColor = "blue";

    Bwall14 = createSprite(830,350,20,60);
    Bwall14.shapeColor = "blue";

    Bwall15 = createSprite(870,370,60,20);
    Bwall15.shapeColor = "blue";

    Bwall16 = createSprite(860,510,80,20);
    Bwall16.shapeColor = "blue";

    Bwall17 = createSprite(830,540,20,50);
    Bwall17.shapeColor = "blue";

    Bwall18 = createSprite(860,570,80,20);
    Bwall18.shapeColor = "blue";

    Bwall19 = createSprite(890,680,20,200);
    Bwall19.shapeColor = "blue";

    Bwall20 = createSprite(890,440,20,119);
    Bwall20.shapeColor = "blue";

    Mwall1 = createSprite(120,100,100,20);
    Mwall1.shapeColor = "blue";

    Mwall2 = createSprite(300,100,120,20);
    Mwall2.shapeColor = "blue";

    Mwall3 = createSprite(580,100,120,20);
    Mwall3.shapeColor = "blue";

    Mwall4 = createSprite(760,100,100,20);
    Mwall4.shapeColor = "blue";

    Mwall5 = createSprite(120,210,100,20);
    Mwall5.shapeColor = "blue";

    Mwall6 = createSprite(760,210,100,20);
    Mwall6.shapeColor = "blue";

    Mwall7 = createSprite(310,280,100,20);
    Mwall7.shapeColor = "blue";

    Mwall8 = createSprite(570,280,100,20);
    Mwall8.shapeColor = "blue";

    Mwall9 = createSprite(440,200,150,20);
    Mwall9.shapeColor = "blue";
    


    Mwallv1= createSprite(440, 60, 20, 80);
    Mwallv1.shapeColor = "blue";

    Mwallv2= createSprite(270,280,20,180);
    Mwallv2.shapeColor = "blue";

    Mwallv3= createSprite(615,280,20,180);
    Mwallv3.shapeColor = "blue";

    Mwallv4= createSprite(440,250,20,120);
    Mwallv4.shapeColor = "blue";



}



function draw(){
    if(gameState == "wait"){
    background(mainScreen);
    //mainScreenSound.setVolume(0.1);
    //mainScreenSound.play();
    
    playButton.show();

    }
        playButton.mousePressed(()=>{
                clickSound.play();
                playButton.hide();
                gameState = "Play";
        })

    if(gameState == "Play"){
        background("black");
        mainScreenSound.stop();
    }    



    drawSprites();

    
}
