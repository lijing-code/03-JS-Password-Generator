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
    
## Credits
* MDN Web Docs - Window: https://developer.mozilla.org/en-US/docs/Web/API/Window
* MDN Web Docs - Expressions and Operators - Addition assignment: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment
* Sentinels in JavaScript: https://dreaminginjavascript.wordpress.com/2009/02/26/sentinels-in-javascript/
* MDN Web Docs - Array.prototype.splice(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice#remove_1_element_at_index_3


## License
The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
---
🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
## Badges
![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath)
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
## Features
If your project has a lot of features, list them here.
## How to Contribute
If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
## Tests