/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/
 // Carla H Project 1 Assignment 

  var quotes = [                  // Create variable name 'quotes' in the quote array
  {
  quote: "To Be or Not To Be.", 
  source:"William Shakespeare"    // add string 'source' inside quote array
  },                        
  {
  quote: "I Have a Dream.", 
  source:"Dr. Martin Luther King",
  citation:"Lincoln Memorial, Washington, D. C.",   // add string 'citation' inside quote array 
  year:"28 Aug. 1963."                              // add string 'year' inside quote array
  },
  {
  quote: "Stay Hungry. Stay Foolish.", 
  source:"Pablo Picasso"
  },
  {
  quote: "Be yourself; everyone else is already taken.", 
  source:"Oscar Wilde"
  },
  {
  quote: "Believe you can and your halfway there.", 
  source:"Theodore Roosevelt",
  reminder:"You can do it" 
  }
  ];
 

  function random_bg_color() {                // quote array changed to random colors (bonus)
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
   
    document.body.style.background = bgColor;
  }
    
  function getRandomQuote () {               // Create getRandomQuote function
  var randomNumber = Math.floor(Math.random() * quotes.length);  // Create RandomNumber between 0-4
  return quotes[randomNumber];               // return RandomQuote Number
  } 
  function printQuote ()     {               // Create `printQuote` function
  random_bg_color(); 
   
 var message = "";   
 var result = getRandomQuote();             // variable will hold random quote object from quotes array
   message += "<p class='quote'>" + result.quote + "</p>";
   message += "<p class='source'>" + result.source;

      if (result.citation)   {
        message += "<span class='citation'>" + result.citation + "</span>";
      }
      if (result.year)       {
        message += "<span class='year'>" + result.year + "</span>"
      }
        message += "</p>";                  // close GetRandom Quote String
        document.getElementById('quote-box').innerHTML = message;       
      }
        
    printQuote();
    setInterval(function(){printQuote(); }, 24000);   // quote array change between 20 to 30  seconds bonus
        
        
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);


  


 

