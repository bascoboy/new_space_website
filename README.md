# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

I used Vanilla JavaScript to change the content of the pages by fetching the data from json local file.

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot

![Screenshot](./Screenshot1.png)

### Links

- Solution URL: [Github](https://github.com/dabinderudhan/space-tourism-website)
- Live Site URL: [Live site url](https://dabinderudhan.github.io/space-tourism-website/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Vanilla JavaScript

### What I learned

With this challenge I was able to understand better the CSS new properties and async/await json fetch in JavaScript

```css
.example {
  margin-block: 1rem;
  aspect-ratio: 1 / 1;
  padding-inline: clamp(1.5rem, 5vw, 3.5rem);
}
```

```js
async function loadData() {
  const response = await fetch("./data.json");
  const data = await response.json();
  console.log(data);
}
```

### Useful resources

- [Srimba course](https://scrimba.com/learn/spacetravel) - This helped me to learn more about Frontend Web development.

## Author

- Website - [Dabinder Udhan](https://github.com/dabinderudhan)
- Frontend Mentor - [@dabinderudhan](https://www.frontendmentor.io/home)
- Twitter - [@dabinderudhan](https://twitter.com/dabinderudhan)
