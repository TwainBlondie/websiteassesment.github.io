// Array of alien facts
var alienFacts = [
  "Aliens are often depicted as having green skin.",
  "Some people believe that aliens have visited Earth for thousands of years.",
  "The term 'UFO' stands for 'Unidentified Flying Object'.",
  "The first recorded UFO sighting was in 1440 BC by an Egyptian scribe.",
  "The famous 'Roswell Incident' occurred in 1947 in New Mexico, USA.",
  "The Fermi Paradox questions why, if extraterrestrial life exists, we haven't found any evidence of it yet.",
  "The SETI Institute searches for signs of extraterrestrial life using radio telescopes.",
  "The Drake Equation estimates the number of civilizations in the Milky Way galaxy that might be capable of communicating with us.",
  "The Kepler Space Telescope has discovered thousands of exoplanets, some of which could potentially harbor life.",
  "The Wow! Signal was a strong narrowband radio signal received in 1977 that some believe was of extraterrestrial origin."
];

// Generate a random index for the alien fact
var randomIndex = Math.floor(Math.random() * alienFacts.length);

// Display the random alien fact on the webpage
var factElement = document.getElementById('fact');
factElement.textContent = alienFacts[randomIndex];

// Add padding to the top of the body to prevent the topnav from covering the banner
document.body.style.paddingTop = '100px';

// Add margin to the top of the fact element to create some space between the topnav and the fact
document.getElementById('fact').style.marginTop = '100px';

// Add a background color to the header
document.getElementsByClassName('header')[0].style.backgroundColor = '#333';

// Add a background color to the topnav
document.getElementsByClassName('topnav')[0].style.backgroundColor = '#555';

// Add a color to the text in the header
document.getElementsByClassName('header')[0].style.color = 'white';

// Add a color to the text in the topnav
document.getElementsByClassName('topnav')[0].style.color = 'white';