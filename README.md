# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: **Lucas Ribeiro Vidal**

Time spent: **3.5** hours spent in total

Link to project: https://glitch.com/edit/#!/melodic-quickest-petalite?path=script.js%3A104%3A19
https://melodic-quickest-petalite.glitch.me

## Required Functionality

The following **required** functionality is complete:

* [X] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [X] "Start" button toggles between "Start" and "Stop" when clicked. 
* [X] Game buttons each light up and play a sound when clicked. 
* [X] Computer plays back sequence of clues including sound and visual cue for each button
* [X] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [X] User wins the game after guessing a complete pattern
* [X] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [X] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [X] Buttons use a pitch (frequency) other than the ones in the tutorial
* [X] More than 4 functional game buttons
* [X] Playback speeds up on each turn
* [X] Computer picks a different pattern each time the game is played
* [X] Player only loses after 3 mistakes (instead of on the first mistake)
* [X] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [X] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:
![ezgif com-gif-maker](https://user-images.githubusercontent.com/69401137/163475463-3381ea1e-ab33-44cd-9453-d413622bc0d0.gif)
![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/69401137/163476697-5bfc933e-9593-411f-aa12-c1878389c515.gif)
![ezgif com-gif-maker (2)](https://user-images.githubusercontent.com/69401137/163477350-06717af1-d6f1-4049-bb47-6aeb4e4119d2.gif)


## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.<br>
I used the following websites:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
https://www.w3schools.com/jsref/met_win_setinterval.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) <br>
Initially, I thought that the languages used (HTML, CSS, and JavaScript) would cause me the most trouble, however, since I was guided through the assignment by the instructions that ended up not being as much of a challenge as I previously thought.<br>
I had 2 critical issues while completing this assignment: the timer and the images on the buttons. 
For the images, though I managed to add them just fine, I had an issue where when clicked, the buttons would move to account for the size of the image, something that caused displacement in all my buttons, which made the website look worse. After checking the JavaScript and HTML I managed to narrow it down to some issues in my CSS file, but since I had very little experience with CSS I struggled to find exactly where the issue was. After a lot of troubleshooting and small-scale changes to try to narrow down the issue, I tracked it down to the way that the <img> tags were styled in CSS, since their maximum size was variable, which meant that when they appeared, the whole button was resized to fit the image. I just had to change that to a fixed size of 250 pixels to fix that issue.<br>
My issue with the timer was that I could not get it to wait for the pattern to stop displaying *before* I started the timer, which meant that users would have less time than intended to solve the puzzle. The way I went about solving it was by adding a negative offset to my timer (which would be hidden from the user) equal to the time it takes to display the pattern, so if it would take 3 seconds to display the pattern, my timer would start at -3, so when it is time for the user to add input, the timer is back at 0.


3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) <br>
One of the things I realized is that the website and interactions I make don’t quite work on mobile, the images don’t display and the style looks off, the buttons are too big, meaning that you would have to scroll down to be able to see them, which would make the game nearly unplayable. My main question is on how to make websites that work well on a computer but that can remain usable and keep the same style and aesthetic when using a mobile device.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)<br>
Beyond some code cleanup and refactoring, I noticed a bug that happens when you click, hold, and then drag your cursor away from one of the buttons without letting go. When these conditions are met, the button remains locked in the “active” state, as if it was never “unpressed” even if the user has stopped clicking, which stops the game from working properly until the user re-clicks the bugged button. Since this game requires users to move their cursor around quickly to click all buttons before the timer ends, I found myself a victim of this bug on multiple occasions, which is something that given more time I would have liked to solve. Also, when misclicks occur, the timer does not wait for the user to dismiss the alert box before continuing, so the time lost by moving the cursor up and clicking the “ok” box on the alert was also counted towards the 10 seconds to input the correct sequence, which is not ideal in my opinion.

## Interview Recording URL Link

[My 5-minute Interview Recording] https://www.loom.com/share/a50c79ca316e47008bbb3d8dbd23d840


## License

    Copyright Lucas Ribeiro Vidal

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
