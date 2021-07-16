var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
var gameState = "start";
var Lives = 3;
var end = createSprite(375,190,52,140);
end.shapeColor = "lightyellow";
var start = createSprite(25,190,52,140);  
  start.shapeColor = "lightblue";
  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
 
//add the velocity to make the car move.
car1.setVelocity(0,10);
car2.setVelocity(0,10);
car3.setVelocity(0,10);
car4.setVelocity(0,10);



function draw() {
   
   sam.velocityX=0;
   sam.velocityY=0;
  
   background("white");
  text("Lives: " + Lives,200,100);
  strokeWeight(0);
  
  

// create bounceoff function to make the car bounceoff the boundaries

car1.bounceOff(boundary1) || car1.bounceOff(boundary2);
car2.bounceOff(boundary1) || car2.bounceOff(boundary2);
car3.bounceOff(boundary1) || car3.bounceOff(boundary2);
car4.bounceOff(boundary1) || car4.bounceOff(boundary2);
sam.collide(boundary1) || sam.collide(boundary2);


 if(sam.isTouching(end))
  {
boundary1.visible = false;
boundary2.visible = false;
sam.visible = false;
car1.visible = false;
car2.visible = false;
car3.visible = false;
car4.visible = false;
end.visible = false;
start.visible = false;
fill("red");
 textSize(30);
text("you won!", 0, 0, 400, 400);
}
//Add the condition to make the sam move left and right
//Add the condition to reduce the life of sam if it touches the car.
 if(sam.isTouching(car1))
  {
    Lives=Lives-1;
    sam.x = 20;
     sam.y = 190;

  }
 
 if(sam.isTouching(car2))
  {
    Lives=Lives-1;
    sam.x = 20;
     sam.y = 190;
  }
 
 if(sam.isTouching(car3))
  {
    Lives=Lives-1;
    sam.x = 20;
     sam.y = 190;
  }
 
 if(sam.isTouching(car4))
  {
    Lives=Lives-1;
    sam.x = 20;
     sam.y = 190;
  }
 
 if (Lives === 0) {
 sam.setVelocity(0,0);
 fill("red");
 textSize(30);
 text("game over!", 0, 0, 400, 400);
 boundary1.visible = false;
boundary2.visible = false;
sam.visible = false;
car1.visible = false;
car2.visible = false;
car3.visible = false;
car4.visible = false;
end.visible = false;
   start.visible = false;
 }
  if (keyIsDown(LEFT_ARROW)) {
  
   sam.velocityX=-2;
   sam.velocityY=0
 }
 
 if (keyIsDown(RIGHT_ARROW)) {
  
   sam.velocityX=2;
   sam.velocityY=0
 }
 
 if (keyIsDown(DOWN_ARROW)) {
  
   sam.velocityX=0;
   sam.velocityY=2
 }
 if (keyIsDown(UP_ARROW)) {
  
   sam.velocityX=0;
   sam.velocityY=-2
 }
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
