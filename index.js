const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  const tutorialsTitleCase = tutorials.map((item) => {
    
    const [0, ...rest] = item.split(" "); 
    // return subItem.charAt(0).toUpperCase() + subItem.slice(1)
    return subItem.substring[0,1].toUpperCase() + subItem.slice(1)
  });
  return tutorialsTitleCase

}
console.log(titleCased())
// console.log(typeof(tutorialsTitleCase),tutorialsTitleCase) 
