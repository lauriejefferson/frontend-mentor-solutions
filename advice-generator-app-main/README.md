# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![Screenshot](./screenshot.png)
### Links

- [Solution URL](https://github.com/lauriejefferson/frontend-mentor-solutions/tree/main/advice-generator-app-main)
- [Live Site URL](https://lauriejefferson.github.io/frontend-mentor-solutions/advice-generator-app-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned
For this project, I used CSS Flexbox to center the advice container at the media queries.  I added the advice text to the HTML tag blockquote to display the text with actual quotes.  I wrapped the dice icon in an absolute positioned container and set the parent container to a relative position.  I then used inset attributes of top, left, bottom and right to center the dice icon.  I also used the JavaScript Fetch API to request the Advice text and set the innerHTML of the advice tags to the response. 

### Continued development
I will continue to use CSS Flexbox in my projects since it is the standard for aligning containers on a website.   I will also use JavaScript Fetch API for API requests and responses.

### Useful resources

- [MDN Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) - This reference gave me a refresher on the Fetch API.

## Author

- Website - [Laurie Jefferson](https://github.com/lauriejefferson)
- Frontend Mentor - [@lauriejefferson](https://www.frontendmentor.io/profile/lauriejefferson)
