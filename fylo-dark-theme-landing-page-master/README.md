# Frontend Mentor - Fylo dark theme landing page solution

This is a solution to the [Fylo dark theme landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Screenshot](./screenshot.png)

### Links

- [Solution URL](<https://github.com/lauriejefferson/frontend-mentor-solutions/tree/main/fylo-dark-theme-landing-page-master>)
- [Live Site URL](https://lauriejefferson.github.io/frontend-mentor-solutions/fylo-dark-theme-landing-page-master/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

#### Sematic HTML5
I learned how to improve the semantic markup with this challenge.  I originally had a ```main``` container with each section inside it, but I removed it since the design didn't seem to require it. I used [Olokodana AbdulKabir's solution](https://github.com/Olokoburnfire/fylo-dark-theme-landing-page) as a guide to improve the structure of the landing page.  

I originally used ```ul``` tags for each section of the footer, except the social media links.  I realized after reviewing Olokodana's solution that the About and Contact Us columns only required ```ul``` tags.  The first two columns were regular ```div``` containers.  

#### CSS Flexbox
I used Flexbox to style the navigation menu and the columns in the footer.  The Flexbox ```justify-content: space-between``` property easily creates space between elements in the navigation menu.  To create the column alignment in the footer, I used the ```flex-direction: column``` property that easily switches the container from a row to column layout.  

#### CSS Grid  
In order to switch between a single-column layout on mobile screens to a four-column layout on desktop screens in the features section, I used CSS Grid's ```grid-template-columns``` property.  It made it easy to setup any number of columns, and change the number column needed.  The ```repeat()``` specifies the number of columns to repeat, along with the size of each column. I also used ```grid-template-columns``` in the footer with the help of Olokodana's solution.  It was easy to setup columns for the footer using this property.

```css
.footer__container {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5em;
  }
```

#### Svgs
I used Font Awesome svgs for the social media icons and added the CSS fill style to them on the hover state. 

#### JavaScript
In order to check the email address in the early access form, I used the CSS visibility: hidden property and the email validation property on the form.  

```js
btn.addEventListener('click', (event) => {
  event.preventDefault();
  if (input.value && input.validity.patternMismatch === true) {
    errorMessage.style.visibility = 'visible';
  }
});
```

### Continued development

I would like to learn more about form validation using CSS only and not relying so much on JavaScript.  CSS Grid makes layout easy, so I will continue to use it for the main layout of projects (hero, sections, articles) and only use CSS Flexbox for menus and navigation.

### Useful resources

- [CSS Flexbox and Grid](https://webdesign.tutsplus.com/2-ways-to-build-a-sticky-footer-flexbox-and-css-grid--cms-107493t) - This helped with creating mobile and desktop navigation menus and layouts.

## Author

- Website - [Laurie Jefferson](https://github.com/lauriejeffersno)
- Frontend Mentor - [@lauriejefferson](https://www.frontendmentor.io/profile/lauriejefferson)

