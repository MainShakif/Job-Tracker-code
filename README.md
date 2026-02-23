QUS: 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ANS: 
    1. getElementById
          Syntax: document.getElementById("my-id");
          Returns A single element (or null if not found).
    2. getElementsByClassName
          Syntax: document.getElementsByClassName("my-class");
          Returns An HTMLCollection.
    3.querySelector 
          syntax: document.querySelector("css-selector/element-selector");
          Returns the first element that matches the criteria.
    4. querySelectorAll 
          syntax: document.querySelectorAll("css-selector/element-selector");
          Returns a NodeList of all matches.


QUS: 2. How do you create and insert a new element into the DOM? 

ANS: 
    Step-1:  Create an Element : const newDiv = document.createElement('div');
    Step-2:  Customize the Element 
              Adding Text: Use .textContent.
              Adding Classes: Use .classList.add().
              Setting Attributes: Use .setAttribute() or direct property access.
    Step-3:  Insert into the DOM by several ways like 
              appendChild()	
              prepend()
              before()	
              after()


  QUS: 3. What is Event Bubbling? And how does it work?
  
  ANS: 
      In the world of web development, Event Bubbling is a type of event propagation
      where an event starts from the deepest possible element and then "bubbles" up 
      through its ancestors in the DOM tree until it reaches the root. That mechanism 
      is known for event bubbling.

  The Mechanism of Event Bubbling:
      When you click a button that is nested inside several other tags (like a <div> and a <body>), 
      The browser doesn't just trigger the button click. It follows a specific sequence:
       Target Phase: The event is triggered on the specific element you clicked.
       Bubbling Phase: The event then propagates to the element's parent, then to the grandparent, and so on.


  QUS-4: What is Event Delegation in JavaScript? Why is it useful?

  ANS: Event Delegation is a technique where you attach a single event listener to
        a parent element to manage events for all of its current (and future) child elements.
 Event Delegation is useful because 
     1. It enhances memory Efficiency
     2. Handling dynamic content
     3. It help me to write much cleaner code.
    

   QUS-5:
   
   ANS:
   1. event.stopPropagation()
        The Shield: Stops the event from traveling.
      In the DOM, events "bubble" up. If you click a button inside a DIV element,
      the click event first hits the button, then moves to the DIV element, then to the BODY element, and so on.
      Calling stopPropagation() prevents the event from "climbing" any higher.

      Use case: You have a "Delete" button inside a clickable card. You want the
      button to delete the item, but you don't want the card's "Open Details" function to trigger at the same time.

      Result: The event is handled by the specific element you clicked, and its parents never find out it happened.

  2. event.preventDefault()
        The Brakes: Stops the browser's default reaction.
         Many HTML elements have built-in behaviors when you interact with them.
     For example:
         Clicking a link navigates to a URL.
         Clicking a submit button refreshes the page to send a form.
         Right-clicking opens a context menu.


     Calling preventDefault() tells the browser, "Don't do your usual thing; I'll handle this with JavaScript instead."
     Use case:
        You want to validate a form before it's sent. If the data is wrong, you call preventDefault() to keep the page from refreshing.
    Result:
        The event still bubbles up the DOM tree, but the "native" action (like navigation) never occurs.














  






      
      

      
      
    
              




      
