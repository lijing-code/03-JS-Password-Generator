# 03-JS-Password-Generator

## Description

This project is about create an application that let people to generate random password through browser based on the criteria that the people have selected. The project using JavaScript updates HTML and CSS dynamically.

The password will be generated randomly that meets certain criteria. The user can choose a length of a password at least 8 characters and no more than 128 characters. If the length is out of range, the application will ask the user to enter a length again. The password criteria is presented by a series of window.prompt(). The four criteria are lowercase, uppercase, numeric, and/or special characters. When the user answers all the prompts, a password is generated that matches the selected criteria, and will be displayed to the page.

What I've learned:

* Use window.prompt(); window.confirm(); window.alert() through JavaScript to display a box on the page which asked the user, and output a message.
* Practice while-loop, for-loop, and if-else statement.
* Math.floor(Math.random()*) is a combination of Math.floor() function and Math.random() function. Math.random() returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1). Math.floor() returns the largest integer less than or equal to a given number. This function can randomly pick a index number in order to choose the characters from the criteria database for generating the password.
* array.push() is a function to add a new item in the end of array. "+=" called addition assignment operator adds the value of the right operand to a variable and assigns the result to the variable. 
* array.splice(k, 1) can pick an element from an array, and remove the element from the original array. I use this method to delete the character in an array to avoid reptation choices.

## Installation
* Log in GitHub Account
* This GitHub URL is : https://github.com/lijing-code/03-JS-Password-Generator
* The live URL is : https://lijing-code.github.io/03-JS-Password-Generator/

## Usage
<img width="1436" alt="截屏2021-09-15 上午12 39 26" src="https://user-images.githubusercontent.com/68092036/133372035-ccb86358-f1a8-4d3b-9180-6020eeb247a0.png">

* Open the live URL: https://lijing-code.github.io/03-JS-Password-Generator/
* Press the red button "Generate Password".
* Enter a number of the password length between 8~128.
* Choose the criteria (uppercase, lowercase, numeric, or special chars) to generate the password.
* The password result will show on the page place-holder.

## Credits
* MDN Web Docs - Window: https://developer.mozilla.org/en-US/docs/Web/API/Window
* MDN Web Docs - Expressions and Operators - Addition assignment: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment
* Sentinels in JavaScript: https://dreaminginjavascript.wordpress.com/2009/02/26/sentinels-in-javascript/
* MDN Web Docs - Array.prototype.splice(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#remove_1_element_at_index_3

## License
MIT License

Copyright (c) [2021] [Jing Li]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
