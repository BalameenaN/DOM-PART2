# DOM-PART2
**Part 1: Getting Started**
Take a few moments to explore your code and refamiliarize yourself with it. Now that you have a deeper understanding of DOM manipulation concepts, if there is anything you would like to fix or change, now is the time to do so.

**Part 2: Adding Additional HTML and CSS**
One of the most important features of an interactive user interface is feedback. The user needs to know that their actions are accomplishing something, even if it is something as simple as a button shifting color slightly or changing the cursor style when hovered, indicating that it is clickable.
In order to facilitate this, add the following additional "sub-menu" <nav> element to the index.html file within your <header> element, beneath the existing <nav> element, as follows:

**Part 3: Creating the Submenu**
A submenu serves as an additional menu for users to select from, and offers more specific context to the top-level menu's options. We will start by using some DOM manipulation techniques to format the submenu before adding interaction to each menu component.
All future steps should be completed within the index.js file.
Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
Set the height subMenuEl element to be "100%".
Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
Add the class of flex-around to the subMenuEl element.
Throughout this process, note that you are also becoming accustomed to another important skill: working with another developer's code. Many of these variables, elements, CSS classes, and other features have already been developed, and you are simply working with them for your own purposes.

**Part 4: Adding Menu Interaction**
Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
Attach a delegated 'click' event listener to topMenuEl.
The first line of code of the event listener function should call the event object's preventDefault() method.
The second line of code of the function should immediately return if the element clicked was not an <a> element.
Log the content of the <a> to verify the handler is working.

**Part 5: Adding Submenu Interaction**
Within the same event listener, we want to toggle the submenu between active and non-active states. First, we will set the submenu to show or hide itself depending on the menu state:
Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
Otherwise, set the CSS top property of subMenuEl to 0.
Hint: Caching the "link" object will come in handy for passing its subLinks array later.