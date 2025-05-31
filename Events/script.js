//?  Events are things that happen in the system you are programming, which the system tells you 
//?   about so that your code can react to them. 


/*

JavaScript can be executed when an event occurs, like when a user clicks HTML element.

Examples of HTML events:

1. When a user clicks the mouse
2. When a web page has loaded
3. When an image has been loaded
4. When the mouse moves over an element
5. When an input field is changed
6. When an HTML form is submitted
7. When a user strokes a key
8. When a user clicks HTML element

*/


//^ The addEventListener() method

// The addEventListener() method attaches an event handler to the specified element.
// The addEventListener() method attaches an event handler to an element
//  without overwriting existing event handlers.

// You can add many event handlers to one element.
// You can add many event handlers of the same type to one element, i.e two "click" events.

// You can add event listeners to any DOM object not only HTML elements. i.e the window object.
// The addEventListener() method makes it easier to control how the event reacts to bubbling.

// When using the addEventListener() method, the JavaScript is separated from the HTML markup,
//  for better readability and allows you to add event listeners even when you do not control the HTML markup.

// You can easily remove an event listener by using the removeEventListener() method.



//^ Syntax

// element.addEventListener(event, function, useCapture);
// The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)

// The second parameter is the function we want to call when the event occurs.

// The third parameter is a boolean value specifying whether to use event bubbling or event capturing. 
// This parameter is optional.



/*

Common Event Types

| Event Type  | Description                           |
| ----------- | ------------------------------------- |
| `click`     | When an element is clicked            |
| `mouseover` | When the mouse hovers over an element |
| `mouseout`  | When the mouse leaves an element      |
| `keydown`   | When a key is pressed down            |
| `keyup`     | When a key is released                |
| `submit`    | When a form is submitted              |
| `change`    | When an input value changes           |
| `load`      | When the page or image has loaded     |

*/


//* We can pass a parameter 'event' to the callback function in addEventListener, it has many properties -

//^  Event Object - When an event occurs, the browser creates an event object,
//^                     that contains information about the event.



// 1. event.type  ->  Returns the type of event (like 'click', 'keydown', etc.).


// 2. event.target ->  Refers to the actual element that triggered the event.


// 3. event.key ->  Returns the key that was pressed during a keydown or keyup event.


// 4. event.clientX and event.clientY
// Description:

// event.clientX: X-coordinate of the mouse relative to the browser window.
// event.clientY: Y-coordinate of the mouse relative to the browser window.


// 5. event.preventDefault() ->  Prevents the browser's default behavior (like stopping a link from opening).


// 7. event.button -> Indicates which mouse button was pressed (0: left, 1: middle, 2: right).






