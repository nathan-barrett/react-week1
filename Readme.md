# React Marketplace
February 9, 2018 by Nathan Barrett.

:email: demeules.barrett@gmail.com

## Description:
A recreation of an earlier project in Angular where Lew Davidson and myself made a marketplace for farm goods, and allowed Patrons to purchase a certain amount from the store.
## Application Objectives
_Patron_
* Display a menu of all available products.
* For each menu item display: Name, price, farm it was from and energy gain.
* Prices are color coded based on Prices.
* Energy level is color coded as well.

_Employee_
* Form for adding a new product to the menu.
* Option to edit the products properties
* Option to sell a product that will adjust the total quantity.
* Products with less than 10 left will be highlighted.

## React Objectives
* Before coding the project, spend some  time planning and drawing out the component architecture.
* Don't worry about any dynamic data, Just add hard-coded data directly into the project.
* Work on the project for a full eight hours.

## Install Instructions

Clone my project from Github:
```
$ git clone https://github.com/nathan-barrett/react-week1.github
```
Install NPM packages and dependencies:
```
$ npm i
```
Run web-pack based sever:
```
$ npm run start
```
Open the local server host in your desired browser (I recommend Google Chrome)

## Notes:

I didn't have a ton of problems setting up the build environment, but I did have some confusion about setting up web-pack, and not knowing exactly what everything was doing, I know that things work in this specific environment but I don't think I would know how to set things up if things were any different. Not sure though!

Also, I found that the Angular component set up was a little more black and white than the component structure in React. It seemed a little confusing to me to as to when to separate components and when not to. I tried to separate the different buttons into different components, but with the structure the way it was, i needed to pass the buttons as props.
