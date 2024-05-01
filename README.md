# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Interactive card details form solution](#frontend-mentor---interactive-card-details-form-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Acknowledgments](#acknowledgments)



## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./screenshot.jpg)

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

This challenge provides the opportunity to practice implementing different states in a web application.

````javascript
document.querySelector("form).addEventListner("submit", function(event{
  ...
}))

````
I used the `addEventListener` function in javascript to manipulate the form's behaviour including the type error messages to throw if the inputed data type is incorrect or empty. The benefit of using semnatic form tag is that it has built in functions that are advantegeous and efficient. I nested a button element with a type="submit".  the  linked to the  `button`  with a `type="submit"` nested in the `form` element that handles the card details. Through the addEventListener function, I toggled the display of the different states based on the state of the form data

I access the DOM elements using the `querySelector()` method. When accessing the DOM it is important to keep in mind the type of web application you are building as there are different methods to access the DOM which could either fetch a live or static node.

A static node list is best for one-time query operations like adding event listeners or applying styles. Live nodes which are fetched through the `getelementsbyId` method (for example) are more demanding on resources. In this case, we don't need live nodes for the application logic to function. The queries work well with static nodes.

I learned to use the `reset.form` method in Javascript to clean the state.  

I used the following Javascript code to reset the form and revert it to its initial state.
````javascript

  resetButton.addEventListener('click', function(){
    form.reset()

    form.style.display = 'flex';
    completedState.style.display = 'none';


})
````

The `form.reset()` method is nested in an addEventlisenter function annexed to the reset button. This coveniently clears the data in the form. It is useful when a user has completed filling the form and the data has been submitted to the server. It additonally gives the user a functionality of resting values in situations of error.

The code above also returns the inital form appearance state through manipulating the `style.display` property of the form element. 



### Continued development

Javascript provides powerful methods and functions to manipulate the DOM elements. I will like to experiment more with the DOm elements and get the best practice for either using static node or a live node. 



### Useful resources

- [EventTarget: addEventListener() method](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) - This article provides clarity on how ad when to use  the addEventListener. It goes into the foundation and is a good resource.
  


## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

Thank you to the frontEndMentor team for setting up this challenege.

