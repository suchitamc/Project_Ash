class Game{
    constructor(){

    }

    getState(){
        console.log("game.getState");
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
        gameState = data.val();
        console.log(data.val());
        })
        
      }

      update(state){
        database.ref('/').update({
          gameState: state
        });
      }

        async start(){
            console.log("inside start" + gameState);
            if(gameState === 0){
            console.log("I am in game.start");
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
            }
            form = new Form();
            form.display();
            
          }
            disk1 = createSprite(365,displayHeight - 80, 20,20);
            disk1.shapeColor = "red";

            disk2 = createSprite(365,displayHeight - 100, 20,20);
            disk2.shapeColor = "green";
            disks= [disk1,disk2];
            dice = createSprite(displayWidth-200,displayHeight/2,40,40);
            dice.addImage(dice6Img);
            

        }

      play(){

        form.hide();

        background(boardImg);

        Player.getPlayerInfo();
               
        if(allPlayers ==! undefined){
            
          image(boardImg,20,20,displayWidth-40,displayHeight-40);

           
            

         if(mousePressedOver(dice)){
           
            rand = Math.round(random(1,6));
            console.log(Math.round(random(1,6)));
            switch(rand){
              case 1: dice.addImage(dice1Img);
              break;
              case 2: dice.addImage(dice2Img);
              break;
              case 3: dice.addImage(dice3Img);
              break;
              case 4: dice.addImage(dice4Img);
              break;
              case 5: dice.addImage(dice5Img);
              break;
              case 6: dice.addImage(dice6Img);
              break;
              default: dice.addImage(dice4Img);
              break;
            }
 
              for(var plr in allPlayers){
                if(plr === "players"+ player.index){
                  disks[index-1].x = disks[index-1].x+ rand*60;
                }
              }
          }
       }

        drawSprites();
     }
      
}
    