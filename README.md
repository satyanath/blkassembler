# blkassembler
A tool to arrange different blocks into different target elements

# The problem
CSS grid brings capability of assembling and arranging different blocks in a page in the grid. The **grid-template-areas** and **grid-areas** CSS attributes help define a good arrangement. The spec is very readable and clear. Moreover combined with media queries this arrangement can be changed based on different screen sizes of the devices. However there is still one problem which the CSS grid does not solve. It does not allow us to place different content into different areas which may not follow the grid structure. For example I want to do a layout where the desktop version has a grid layout but the mobile version has tabs. As I am doing a progressive web I do not want to duplicate the code. 

# The solution
The solution is simple, one function in javascript allows us to place the content in different divs (all content need not be children of one element as required by CSS grid).

# Usage
The routine uses a script tag with the type "text/assembler". The contents of this would be directions on how to arrange. The format is a JSON string representing an array of objects where the key is the selector of the content element to be moved and the value is the selector of the target element in which the content element must be moved to. 

# _Note_
_This utility does not provide facilities for arranging the layout. It is assumed that one would use CSS grid / flexboxes / bootstrap or any such means for setting the layout._
