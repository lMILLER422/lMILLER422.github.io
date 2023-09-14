$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

     for (let i = 100; i < canvas.width; i += 100) {
       createPlatform(i, canvas.height, -1, -canvas.height);
     }
    for (let i = 100; i < canvas.height; i += 100) {
       createPlatform(canvas.width, i, -canvas.width, -1);
     }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    // spawning platform
    createPlatform(0,625,200,20)
    createPlatform(0,625,20,200)
    createPlatform(0,425,20,200)
    //
    createPlatform(200,0,20,225)
    createPlatform(200,225,200,20)
    //1st jump
    createPlatform(400,450,200,20)
    createPlatform(400,574,200,20)
    createPlatform(600,450,20,300)
    createPlatform(400,340,200,20)
    createPlatform(600,340,20,144)
    createPlatform(675,275,.1,.1)
    createPlatform(900,250,200,20)
    createPlatform(900,250,20,400)
    createPlatform(900,50,20,200)
    createPlatform(900,125,200,20)
    //second platform
    createPlatform(1000,480,200,20)
    createPlatform(1000,604,200,20)
    createPlatform(1200,380,20,300)
    createPlatform(1000,360,200,20)
    createPlatform(1200,360,20,144)
  



    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("steve", 250, 150, 20, 0.5);
    createCollectable("grace", 100, 700);
    createCollectable("steve", 1000, 0, 20, 0.5);
    createCollectable("grace", 1275, 700);
    


    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("left", 600, 3000, );
    createCannon("top", 800, 1250, );
    createCannon("top", 1200, 3000, );
    createCannon("top", 1300, 3000, );
    createCannon("top", 1400, 4000, );



    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
