# Frontend Mentor - Intro component with sign up form solution

### Screenshot

![intro-component-with-siginup-form-master](./screenshot.png)

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

I used the mobile-first design approach, where I added the styling starting at small screen sizes and larger.  I then added a media query that switched to a grid layout at larger screen sizes.  I added column layout using flexbox for the form fields.  

For the form submission, I added styling for both error and success states.  I used the patternmismatch property of the ValidityState interface to check if the user entered a valid email address.  Finally, I added accessibility features to the form with the aria properties.

### Continued development
I will continue to learn more about the ValidityState interface of the HTML DOM API, and other event targets that can efficiently check the form for valid entries.  


### Useful resources

- [ValidityState](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState) - This article helped me with checking whether or not a form input value was valid.

- [Client-side Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation) - This article was a refresher on form submission.

- [Accessibility](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics) -  This article helped me add accessibility to the form.

- [Regex-Generator](https://regex-generator.olafneumann.org/?sampleText=name%40host.tld&flags=i&selection=0%7CRFC2822%20e-mail) - This website helped with generating a regular expression to check the email field.

## Author

- Website - [Laurie Jefferson](https://www.github.com/lauriejefferson)
- Frontend Mentor - [@lauriejefferson](https://www.frontendmentor.io/profile/lauriejefferson)

## Acknowledgments

Thanks to Taranties, Elaine Leung and Florin Pop for their GitHub repos of their solutions.  Also, thanks to Kevin Powell for the CSS Flexbox and Grid tutorials.