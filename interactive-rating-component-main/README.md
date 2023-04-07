# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![Interative-Rating-Component](./screenshot.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
### What I learned

This challenge taught me how to build interactive components with CSS and JavaScript.  I used the CSS :hover pseudo-class for the score hover state and the CSS :focus pseudo-class for the score selection state. I created an array of addEventListeners for each score button to get the score when the user clicks one of the score buttons.  I then created a hidden class that displays the Thank You component when the user clicks the Submit button and hides the Rating component. The code snippet below shows how to add and remove classes:  

```js
 rating.classList.add('hidden');
 thankyou.classList.remove('hidden');
```

### Continued development

I found css pseudo-classes helpful for hidding and displaying components.  I will continue learning about pseudo-classes and CSS animations that can be used to transition between components. I will also continue learning about JavaScript event listeners and DOM manipulation.

### Useful resources

- [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover) - MDN Web Docs helped me use the :hover and :focus pseudo-classes on the score buttons.

## Author

- Website - [Laurie Jefferson](https://github.com/lauriejefferson)
- Frontend Mentor - [@lauriejefferson](https://www.frontendmentor.io/profile/lauriejefferson)


## Acknowledgments

Thanks to chaw-bot for her [design](https://github.com/chaw-bot/interactive-rating-component)

