# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Intro Section with Dropdown Navigation](./screenshot.png)

### Links

- Solution URL: [Solution](https://github.com/lauriejefferson/frontend-mentor-solutions/tree/main/intro-section-with-dropdown-navigation-main)
- Live Site URL: [Add live site URL here](https://lauriejefferson.github.io/frontend-mentor-solutions/intro-section-with-dropdown-navigation-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned
For this project, I used CSS Flexbox, CSS Grid, media queries and JavaScript animation.  In the dropdown navigation menus, I used CSS Flexbox with the column flex direction and the CSS height property to achieve a full length navigation menu for mobile screens.  For the hero section, I used CSS Grid to change the layout when switching from mobile to desktop screens. Finally, I used Javascript animation and the CSS rotate property to rotate the dropdown arrows when clicking on the navigation menu items to open and close the dropdown menus.  Some CSS class properites that were useful are:

```css
 .nav {
    visibility: visible;
    display: flex;
    justify-content: space-between;
    position: relative;
    height: auto;
    background-color: var(--clr-primary-100);
  }
```
```css
 .hero-grid {
    display: grid;
    grid-template-areas:
      "cta image";
    gap: 2em;
    margin-top: 1em;
    padding: 2em 5em;
  }
```
```js
navToggle.addEventListener('click', () => {
  nav.classList.toggle('nav--visible');
});
```
### Continued development

I will continue to learn  more about layouts for mobile navigation menus and how to use JavaScript to animate them.

### Useful resources

- [CodingNepalWeb](https://www.codingnepalweb.com/category/sidebar-menu/) - This helped me with the full length mobile navigation menu.

## Author

- Website - [Laurie Jefferson](https://github.com/lauriejefferson/frontend-mentor-solutions)
- Frontend Mentor - [@lauriejefferson](https://www.frontendmentor.io/profile/lauriejefferson)

