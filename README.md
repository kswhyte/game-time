# Papaya Whipper!!!

Turing School 1608 Front End Program - Module 1 Final Project (Game Time) - Created by Kinan Whyte and Nick Chambers

Play Papaya Whipper here - [Live Game](https://kswhyte.github.io/game-time/)

##Intro
Papaya Whipper is a new take on the classic Breakout arcade game. Its name carries on the legacy of building games as tributes to the finest Hex code colors, which began with Casey Metz and Jeff Duke's timeless classic, "Blanched Almonoid". To pay back our debt to these visionaries, there are hints of Blanched Almond throughout the games' styling.

Papaya Whipper is built entirely with Javascript and HTML5 Canvas, was tested using Chai, and is our humble tribute to one of the most powerful colors humankind has ever created - Papaya Whip.

##How To Play
To begin whipping, the user presses the spacebar and is provided with a paddle and four papayas to break the above blocks. If the user fails to hit the papaya before it falls below the bottom of the game screen, the user loses a papaya (or a "life"). To regenerate a new papaya and paddle, the user must press spacebar.

If the user succeeds in breaking all of the blocks, a new level is generated with a faster papaya speed and an extra row of blocks. There are three(?) levels of difficulty, and if the user succeeds in playing through all the available levels, they are gifted a splendid papaya recipe.


##How Its Built
Much of the logic for the game required us to recall our seventh grade math lessons and utilize simple algebra and geometry. The crux of the game development was writing out collision detection for each of our Javascript game objects and engineering the behavior to appear as fun and realistic as possible.

Most of the collision detection for our game resides in the "Jungle" object, with some communication for collisions coming from our "Papaya". The game's bricks are created from an array of brick objects, which are altered to "false" upon papaya collision.
##Summary
We had a splendid time figuring out how to build this game and working through the many puzzles it presented us. We hope future modules will continue on with paying tributes to the great CSS colors of the web.

Happy whipping -

Nick and Kinan
