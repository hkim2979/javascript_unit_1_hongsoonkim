/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: 'The best way out is always through.',
    source: 'Robert Frost',
    tag: 'Life'
  },
  {
    quote: 'Turn your wounds into wisdom.',
    source: 'Oprah Winfrey',
    tag: 'Influencer'
  },
  {
    quote: 'For every minute you are angry, you lose sixty seconds of happiness.',
    source: 'Ralph Waldo Emerson',
    tag: 'Literature'
  },
  {
    quote: 'You never fail until you stop trying.',
    source: 'Albert Einstein',
    tag: 'Science'
  },
  {
    quote: 'All great achievements require time.',
    source: 'Maya Angelou',
    tag: 'Life'
  },
  {
    quote: 'May the Force be with you.',
    source: 'Han Solo',
    citation: 'Star Wars',
    year: '1977',
    tag: 'Movie'
  },
  {
    quote: 'Hasta la vista, baby.',
    source: 'The Terminator',
    citation: 'Terminator 2: Judgment Day',
    year: '1991',
    tag: 'Movie'
  },
  {
    quote: 'Bond. James Bond.',
    source: 'James Bond',
    year: '1962',
    tag: 'Movie'
  },
  {
    quote: 'Snap out of it!',
    source: 'Loretta Castorini',
    citation: 'Moonstruck',
    tag: 'Movie'
  }
];

/***
 * Random Colors
***/
function colorValNum() { //generate random numbers
  const val = Math.floor(Math.random() * 256);
  return val;
}
function randomColor() { //generate random rgb taking random number values from colorValNum()
  const color = `rgb(${colorValNum()}, ${colorValNum()}, ${colorValNum()})`;
  return color;
}
function changeBGColor() { //random color will store in a bgColor variable
  let bgColor = randomColor();
  document.querySelector('body').style.backgroundColor = bgColor; //select 'body' and change color values
}

/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr) { //take the array from 'quotes' and pick random object
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}
/***
 * `printQuote` function
***/
const printQuote = () => {

  changeBGColor(); //Background change call

  let quoteObj = getRandomQuote(quotes); // store random quote object in a variable
  let html = `
    <p class="quote">${quoteObj.quote}</p>
    <p class="source">${quoteObj.source}`; // span elements will live within <p> if true
  if(quoteObj.citation) {
    html += `<span class="citation">${quoteObj.citation}</span>`;
  }
  if(quoteObj.year) {
    html += `<span class="year">${quoteObj.year}</span>`;
  }
  if(quoteObj.tag) {
    html += `<span class="tag">${quoteObj.tag}</span>`;
  }
  html += `</p>`; //closing second <p>

  document.getElementById('quote-box').innerHTML = html; 
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

/***
 * Auto generate quote every 10s.
***/
function autoQuote() {
  setInterval(function() { //setInterval(function(), time duration)
    printQuote();
  }, 10000);
}
autoQuote();