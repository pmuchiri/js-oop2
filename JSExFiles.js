// JSExFiles.js
window.onload = function() {
    init();
    alert("Hello!");
 }
  
 function init() {
    document.getElementById("magic").onmouseover = function() {
       this.className = "highlight";
    }
    document.getElementById("magic").onmouseout = function() {
       this.className = "";
    }
 }

//  How it Works?
Placing the scripting codes inside the HTML page is not a good software engineering practice. Instead, the now-preferred approach is to place the scripts, as well as CSS styles, in external files, which can then uniformly applied to all pages in your website.
Let's begin with the HTML file. Now, the HTML file keeps only the contents, no presentation style and nor programming logic.
<link rel="stylesheet" href="JSExFiles.css">
The CSS style sheet is kept in an external file, referenced via the above <link> tag.
Note: In HTML4/XHTML1.0 you need to include attribute type="text/css" in the <link> opening tag.
<script src="JSExFiles.js"></script>
Also, the JavaScript programming code is kept in an external file, referenced via the above <script> tag. Take note that the closing tag </script> is needed, although there is no content.
Note: In HTML4/XHTML1.0, you need to include attribute type="text/javascript" in the <script> opening tag.
<p id="magic">Point your mouse pointer here!!!</p>
We provide an unique id to this <p> tag. This id will be used in the JavaScript to select this tag.
The CSS file contains only one style definition:
.highlight { color:red; }
This define a CSS Class-Selector called highlight to display the element with class="highlight" in color red.
In the JavaScript:
window.onload = function() { ... }
We attach a so-called inline function as the onload event handler. This function will be invoked after the page is fully loaded.
document.getElementById("magic").onmouseover = function() { this.className = "highlight"; }
We use document.getElementById("magic") function to select the <p id="magic"> element. We then attach an inline function as the onmouseover event handler for this <p> element. When the user moves the mouse over this element, this function changes the class attribute to "highlight". In response, the CSS turns the <p> element to color red.
document.getElementById("magic").onmouseout = function() { this.className = ""; }
Similarly, when the user moves the mouse out of the <p id="magic"> element, the event handler changes the class attribute to "". In response, CSS changes the color to its default.
alert("Hello!")
{/* This puts up an alert dialog box. */}