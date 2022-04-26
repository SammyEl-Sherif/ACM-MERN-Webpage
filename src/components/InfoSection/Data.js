export const homeObjTemplate = {
  id: "page1",
  /* Main Color Choices */
  lightBg: false,
  lightText: true,
  lightTextDesc: true,

  /* Text */
  topLine: "Sub-heading",
  headLine: "About Us",
  description:
    "A short descriptive statement to lead someone to clicking on Learn More.",

  /* Image Styling */
  imgStart: false /* alter this property to flip the positioning of the svg and text + button from left to right */,
  img: require("../../images/team-work.svg")
    .default /* Check out link at top of readme in repo for more images like this */,
  alt: "Car",

  /* Button Styling */
  buttonLabel: "Learn More",
  dark: false,
  primary: true,
  darkText: false,
};

/* NOTE: You can duplicate the above block of code to create another data section below it!
   - Make sure you import this into src/pages/index.js at the top, along with add it into that files fragment
   - A fragment is like a div class but simply wrapped by <> Components in here </> 
   - The true or false values correlate to the InfoElements.js line that are if else statements, for example:
   background: ${({lightBg}) => (lightBg ? 'var(--clr-light)' : 'var(--clr-dark)')}; -> is saying that the section
   will have a white background if true and a dark background if false. Below will be an example of the opposite values.
*/

export const homeObjTwo = {
  id: "page2",
  /* Main Color Choices */
  lightBg: true,
  lightText: false,
  lightTextDesc: false,

  /* Text */
  topLine: "Meet the wonderful people who make it happen!",
  headLine: "Our Community",
  description:
    "Our local ACM chapter is made up of lovely people who are dedicated to things! 'What things?' you ask? Idk, click the button to figure it out.",

  /* Image Styling */
  imgStart: true /* alter this property to flip the positioning of the svg and text + button from left to right */,
  img: require("../../images/team-work.svg")
    .default /* Check out link at top of readme in repo for more images like this */,
  alt: "Car",

  /* Button Styling */
  buttonLabel: "Meet Our Members",
  dark: true,
  primary: true,
  darkText: true,
};
