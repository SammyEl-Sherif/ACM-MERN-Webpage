# This is the MASTER Branch which we will treat as our DEV aka Development Branch.

Features will be built branching off of this branch, then they will be merged into QA and tested, then they will be merged into PROD into our production enviorment (school server) </br>

# Great Tutorials That Will Help Us Build This

https://www.youtube.com/watch?v=Nl54MJDR2p8&ab_channel=BrianDesign : I followed this directly to get this to this working version</br>
GIT GRAPH - WATCH 6:08 -> 8:00 and 8:46 -> END (Note, for now just clone with HTTPS)https://www.youtube.com/watch?v=foXiEpYA08A&feature=youtu.be&ab_channel=D-I-Ry</br>

# Technolgies Used

Styling: https://styled-components.com/docs </br>
Mockup Design: https://www.figma.com/file/nt0UO7TBQ7NSDeVXubjnQD/ACM-Webpage?node-id=0%3A1562 </br>

- Get a Figma Education Acount! https://www.figma.com/education/ </br>

# Helpful Resources

- Typeface: https://www.ucdenver.edu/offices/ucomm/brand-old/visual-identity/typeface
- Brand Colors: https://www.ucdenver.edu/offices/ucomm/brand-old/visual-identity/color
- Color Matchable SVG's: https://undraw.co/illustrations

# Visual Studio Code Extensions

- Git Graph
- vscode-styled-components: https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components

---

# File Stucture

If you are ever confused about this repository and what a specific file is doing, reference this file structure description first to see if it clears up any confusion. Otherwise, reach out to the WebDev discord channel!<br />
NOTE: Ideally, if you have a confusion resolved, please submit a pull request to add or edit this documnet.

# src

The src(source) folder will containe all of our components, content, and pages that will be used to create our webpage.
What is a component?

- A React Component is a

What do you mean by content?

- All of the images and videos (.svg, .png, .mp4, etc.) will be refered to as "content" and they will be stored in their respecitve folders.

What is considered a page?

- One key thing to understand is that we are creating a Single Page React App, therefore, a lot of the contents we are initally creating will be within one page that consists of many components. But, a seperate page would be somthig like a Sign Up form, where you are redirected to a completely separate page.

## components

There is a folder per component within the components folder. As of now, we will just be starting with the basic components to get us started which are:

- Navbar: A navigation bar that will have the heading to our InfoSection "sections" that a user can click on and be directed to.
- Sidebar: a media query enabled navigation menu that is accessible only when the pixel width of a screen is narrow enough (mobile)
- HeroSection: What you first see when you visit our webpage
- InfoSection: Where our "sections" of our main page will be defined.
- SignUp: a form for users to be able to enter a cu-denver email address which will then enter their details into our database and auto-reply to that email with a TL;DR to get started.
- Footer: Links to relavent things about acm.
- ButtonElements.js: Global button styling so that we can have a reusable button component throughout all of the buttons that we create.
- ScrollToTop.js: A simple utility class that makes sure that when you open a page, it starts you from the top (0,0) "origin" location.

NOTE: In each component folder there is a Index.js and a ComponentNameElements.js. Almost always the ComponentElements.js is were you write your css and the Index.js is the use of those styled-components.

## pages

- Where the JS files for our SEPERATE pages are stored. Note, we are creating a single page smooth scroll main page with different sections within it, but these are seperate components NOT pages.

### images

- Where we will store all svg's, png's, and any other format of image to be displayed on the webpage.

### videos

- where we will store any of the videos to be displayed on the webpage.

---

### App.css

- Where global styling properties are defined. To keep this basic to start, I have defined 3 custom css properties named:
  - --clr-accent = #CFB87C "CU Gold"
  - --clr-dark = #595955 "Black + 1"
  - --clr-light = #9EA1A2 "Black +3"
  - --clr-white = #FFFFFF "White"
  - Note: These will be based on CU Denver's Brand colors. -> https://www.ucdenver.edu/offices/ucomm/brand-old/visual-identity/color

### App.js

Where we will configure the routing of our paths using react-router-dom.

### index.js

## The funciton that calls our react app lives within this root index.js file.

# public

The most important thing to note about the public folder is that the index.html lives in here. This is where we are able to change our font and customize the head of the page.

---

# package.json

The package.json file is something very useful to understand. In here we can define and see our scripts and dependencies.
Some noteable scripts pertaining to this project are: - "react-dom": "^17.0.2", - "react-icons": "^4.3.1", - "react-router-dom": "^6.2.2", - "react-scroll": "^1.8.6", - "save-dev": "^0.0.1-security", - "styled-components": "^5.3.3",

I'm guessing most of you have typed "npm run SCRIPT_NAME" into your terminal. Using npm can feel like guess work if you do not know that the SCRIPT_NAME is located in your package.json file under scripts. For example, this specifc project has the on line 23 "start": "react-scripts start", by typing "npm run start" into your terminal you can serve this project on your local hosting network.
