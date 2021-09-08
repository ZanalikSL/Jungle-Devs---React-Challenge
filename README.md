# Jungle-Devs---React-Challenge

This project is part of the React developer selection process in the Boost program of the Jungle Devs Team. 

I implmented a simplified version of Hapu’s ‘Become a Nanny Share Host’ view of this desing [FIGMA](https://www.figma.com/file/iBxoiuoSXy3SiOAnwXo2Np/Frontend-%E2%80%93-Challenge-1) 

## Languages & tools

- Javascript
- React
- Axios
- Styled-components 
- Lib (for the A/B test) - @marvelapp/react-ab-test [Link](https://www.npmjs.com/package/@marvelapp/react-ab-test)

## Live Version

To deploy a live version i used surge.

Surge [Link](https://lively-brush.surge.sh/)

## Installation and Setup Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

Installation:

```bash
$ git clone https://github.com/ZanalikSL/Jungle-Devs---React-Challenge.git
$ cd Jungle-Devs---React-Challenge
```

## Use

```bash
# Install dependencies
$ npm i

# Start the project
$ npm start
```

## Create production builds

```bash
$ cd Jungle-Devs---React-Challenge
$ npm run build
```

## CSS Media Queries

To see the mobile and the desktop version, use the width of 1440p (Desktop) 
![image](https://user-images.githubusercontent.com/71197933/132429409-77884215-5279-4e2f-ac4c-93c49bf67c5a.png)


and 375p (Mobile) 


![image](https://user-images.githubusercontent.com/71197933/132429524-cb354e2c-77fe-4552-93ba-a820243036fb.png)


## A/B test

I implemented a A/B test persistent for the user, that display the design version or a second version. 

To switch between versions, just access Local Storage in yout broswer and modify the value between the values: "A" or "B".

## License

[MIT](https://choosealicense.com/licenses/mit/)
