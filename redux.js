/*
           Introduction to Redux

Imagine a calendar app. One part of the app lists all of the events. 
Another part of the app sets filters on which types of events are shown. 
A third part of the app sets the current time zone and a fourth part creates new events. 
Whew, that’s a lot to keep track of!

In React, each of these “parts” would be a component and data would need to be
shared and updated by these components. Developers call this shared data the state of the application.
Meanwhile, the process of sharing and updating this state is called state management.
Depending on the size and complexity of your state, state managem

That’s where Redux comes in. Redux is a state management library that follows 
a pattern known as the Flux architecture. In the Flux pattern, and in Redux, 
shared information is not stored in components but in a single object.
 Components are just given data to render and can request changes using events called actions.
  The state is available throughout the application and updates are made in a predictable manner:
   components are “notified” whenever a change is made to the state.

One-Way Data Flow
In most applications, there are three parts:

State – the current data used in the app
View – the user interface displayed to users
Actions – events that a user can take to change the state

The flow of information would go like this:

   The state holds the current data used by the app’s components.

   The view components display that state data.

   When a user interacts with the view, like clicking a button, the state will be updated in some way.

   The view is updated to display the new state.

With plain React, these three parts overlap quite a bit. Components not only render the user interface,
but they also may manage their own state. When actions that may change the state occur, components need
to directly communicate these changes to each other.

Redux helps separate the state, the view, and actions by requiring that the state be managed by a single source.
 Requests to change the state are sent to this single source by view components in the form of an action.
  Any components of the view that would be affected by these changes are informed by this single source.
   By imposing this structure, Redux makes our code more readable, reliable, and maintainable.


State is the current information behind a web application.


For a calendar application it includes the events (name, date, label, etc.),
 the current timezone, and the display filters. 
 For a todo app it includes the todo items (description, completed/not completed),
  the current order of the items, and display filters.
   For a word editor, it includes the contents of the document, 
   the print settings, and comments.

With Redux, state can be any JavaScript type, including: number, string, boolean, array, and object.

Here’s an example state for a todo app:
   */ 

const state = [ 'Print trail map', 'Pack snacks', 'Summit the mountain' ];

//              Actions

/*
Most well-designed applications will have separate components 
that need to communicate and share data with each other.

A todo list might have an input field where the user can type in a new todo item.
 The application might transfer this data from the input field, 
 add it to an array of all todos, and then render them as text on the screen. 
 This entire interaction can be defined as an action. In Redux, 
 actions are represented as plain JS objects.
*/

// Here’s what that action might look like:

action = {
    type: 'todos/addRodo',
    payload: 'Take selfies'
}

/*
Every action must have a type property with a string value. 
This describes the action.

Typically, an action has a payload property with an object value.
 This includes any information related to the action. In this case, the payload is the todo text.

When an action is generated and notifies other parts of the application, we say that the action is dispatched.
*/

/*
Here are two more example actions:

“Remove all todos”. This requires no payload because no additional information is needed:

const action = {
  type: 'todos/removeAll'
}

“Remove the ‘Pack snacks’ todo”:

const action = {
  type: 'todos/removeTodo',
  payload: 'Pack snacks'
}
*/

// Reducers
/*
So far, we’ve defined the state of our application and the actions representing 
requests to change that state, but we haven’t seen how these changes are carried out in JavaScript.
 The answer is a reducer.

*/

/*
A reducer, or reducer function, is a plain JavaScript function that defines 
how the current state and an action are used in combination to create the new state.
*/

// Here’s an example of a reducer function for a todo app:
// Define reducer here
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'songs/addSong': {
        return [...state, action.payload]
      }
      case 'songs/removeSong': {
        return state.filter(song => song !== action.payload);
      }
      default: {
        return state;
      }
    }
  }
  
  
  const initialState = [ 'Take Five', 'Claire de Lune', 'Respect' ];
  
  const addNewSong = {
    type: 'songs/addSong',
    payload: 'Halo'
  };
  
  const removeSong = {
    type: 'songs/removeSong',
    payload: 'Take Five'
  };
  
  const removeAll = {
    type: 'songs/removeAll'
  }

//  Rules of Reducers
/*
1 - They should only calculate the new state value based on the state and action arguments.
2  -They are not allowed to modify the existing state. Instead, they must copy the existing state and make changes to the copied values.
3  -They must not do any asynchronous logic or have other “side effects”.

*/
//                                 Store

/*
Redux uses a special object called the store. The store acts as a container for state,
 it provides a way to dispatch actions, and it calls the reducer when actions are dispatched. 
 In nearly every Redux application, there will only be one store.
*/
/*
Review
Congratulations! In this lesson you’ve built a strong conceptual foundation 
of Redux and built a state object, some actions, and a reducer along the way.
 Here’s what else you learned:

Redux is a library for managing and updating application state based on the Flux architecture

Redux makes code more predictable, testable, and maintainable by consolidating state in a single object.
 Components are just given data to render and can request changes using events called actions.

In a Redux application, data flows in one direction: from state to view to action back to state and so on.

State is the current information behind a web application.

An action is an object describing an event in the application. It must have a type property
 and it typically has a payload property as well.

A reducer is a function that determines the application’s next state given a current state 
and a specific action. It returns a default initial state 
if none is provided and returns the current state if the action is not recognized
*/


/*
A reducer must make follow these three rules:

They should only calculate the new state value based on the existing state and action.

They are not allowed to modify the existing state. 
Instead, they must copy the existing state and make changes to the copied values.

They must not do any asynchronous logic or other “side effects”.
*/

/*
In other words, a reducer must be a pure function and it must update the state immutably.

The store is a container for state, it provides a way to dispatch actions, 
and it calls the reducer when actions are dispatched.
Typically there is only one store in a Redux application.

*/

/*
What is the Redux API?
In this lesson, you will learn how to apply the core concepts of Redux to a real Redux application.

Remember, Redux applications are built upon a one-way flow of data model and are managed by the store:

 - The state is the set of data values that describes the application. It is used to render the user interface (UI).
 -  Users interact with the UI which dispatch actions to the store. 
 - An action is an object that expresses a desired change to the state.
 - The store generates its next state using a reducer function which receives the most recent 
action and the current state as inputs.
 - Finally, the UI is re-rendered based on the new state of the store and the entire process can begin again.
 -Building an application that follows the core principles of Redux can be done without external libraries.
  However, the dedicated Redux library provides some very useful tools for handling 
  the most common aspects of building a Redux application and helps ensure that the 
  core Redux principles are enforced.
This lesson will focus on creating a basic Redux application with 
the createStore() method from the Redux API and the following related store methods:

*/

// INTRO TO THE CORE REDUX API
// install the redux library

/*
Install the Redux Library
The core concepts of Redux are closely tied to a framework known as Flux.
 Both share the same concept of a one-way flow of data and a centralized store to reduce 
 actions into the application’s next state. While Flux was designed as a general 
 pattern which one could follow to build applications, 
 Redux is a library that provides concrete methods to help implement the framework.

*/

// To make use of the Redux package, it can be installed using the Node Package Manager (npm).
//  Then, its methods can be imported.

// npm install redux


// Create a Redux Store
/*
As you know, every Redux application uses a reducer function that describes which actions
 can update the state and how those actions lead to the next state.
For example, suppose you wanted to build an application for a light switch. 
Its reducer might look like this:
*/


import { createStore } from 'redux';

const initialState = 0;
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state;
  }
}

    const store = createStore(countReducer);

    // Dispatch your actions here.
    store.dispatch({type:'increment'})
    console.log(store.getState())
    store.dispatch({type:'increment'})
    console.log(store.getState())
    // dispatch three action with type decrement
    store.dispatch({type:'decrement'}) 
    store.dispatch({type:'decrement'}) 
    store.dispatch({type:'decrement'}) 
    console.log(store.getState())


//                Action Creators



/*
 An action creator is simply a function that returns an action object with a type property.
  They are typically called and passed directly to the store.dispatch() method resulting 
  in fewer errors and an easier-to-read dispatch statement.
*/
// Create your action creators here.
// first action creator
    const increment = () => {
        return { type:"increment" }
    }
    // second action creator
    const decrement = () => {
        return { type:"decrement" }
    }

    // Modify the dispatches below.
    store.dispatch(increment());
    store.dispatch(increment());
    console.log(store.getState());

    store.dispatch(decrement());
    store.dispatch(decrement());
    store.dispatch(decrement());
    console.log(store.getState());

// Respond to State Changes
/*
In a typical web application, user interactions that trigger DOM events ("click", "keydown", etc…)
 can be listened for and responded to using an event listener.

Similarly, in Redux, actions dispatched to the store can be listened 
for and responded to using the store.subscribe() method. 
This method accepts one argument: a function, often called a listener,
 that is executed in response to changes to the store‘s state.
*/

// Define your change listener function here.
const printCountStatus = () =>{
  console.log(`The count is ${store.getState()}`)
}
//  listen to the store and each time an action is dispatched to the store, 
// and a change to the state occurs, the subscribed listener, the printCountStatus() function will be executed.
const unsubscribe = store.subscribe(printCountStatus);
store.dispatch(decrement()); // store.getState() === -1
store.dispatch(increment()); // store.getState() === 0
store.dispatch(increment()); // store.getState() === 1
// here we unsubscribed the  printCountStatus() function
unsubscribe()
// =============================================================================================================
// Connect the Redux Store to a UI

          /*
          Connecting a Redux store with any UI requires a few consistent steps, regardless of how the UI is implemented:

         . Create a Redux store    const store = createStore(countReducer);  

         . Render the initial state of the application. const render = () => { counterElement.innerHTML = store.getState();}

         . Subscribe to updates. Inside the subscription callback: store.subscribe(render);

         . Get the current store state

         . Select the data needed by this piece of UI

         . Update the UI with the data

         . Respond to UI events by dispatching Redux actions
          */
// store.js

         import React from 'react';
         import ReactDOM from 'react-dom';
         import { createStore } from 'redux';
         
         // REDUX CODE
         ///////////////////////////////////
         
         const toggle = () => {
           return {type: 'toggle'} 
         }
         
         const initialState = 'off';
         const lightSwitchReducer = (state = initialState, action) => {
           switch (action.type) {
             case 'toggle':
               return state === 'on' ? 'off' : 'on';
             default:
               return state; 
           }
         } 
          
         const store = createStore(lightSwitchReducer);
         
         // REACT CODE
         ///////////////////////////////////
          
         // Pass the store's current state as a prop to the LightSwitch component.
         const render = () => {
           ReactDOM.render(
             <LightSwitch 
               state={store.getState()}
             />,
             document.getElementById('root')
           )
         }
          
         render(); // Execute once to render with the initial state.
         store.subscribe(render); // Re-render in response to state changes.
         
         // Receive the store's state as a prop.
         function LightSwitch(props) {
           const state = props.state; 
         
           // Adjust the UI based on the store's current state.
           const bgColor = state === 'on' ? 'white' : 'black';
           const textColor = state === 'on' ? 'black' : 'white';  
          
           // The click handler dispatches an action to the store.
           const handleLightSwitchClick = () => {
             store.dispatch(toggle());
           }
          
           return (  
             <div style={{background : bgColor, color: textColor}}>
               <button onClick={handleLightSwitchClick}>
                 {state}
               </button>
             </div>
           )
         }
          
         

// index.html
 /*     <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="./index.css">
        <title>Learn ReactJS</title>
      </head>

      <body>
        <div id="root">
        </div>
      </body>
      <!-- Do Not Remove -->
      <script src="https://content.codecademy.com/courses/React/react-16-redux-4-bundle.min.js"></script>
      <script src="./store.compiled.js"></script>
      </html>*/

/*
Review
              Congratulations! You were able to apply the core concepts of the Redux framework 
              by implementing an application using the Redux library.

              By completing this lesson, you are now able to:

              Install the redux library into your project using npm install redux.

              Import the createStore() helper function from the 'redux' library.

              Create a store object that holds the entire state of your Redux application using createStore().

              Get the current state of the store using store.getState().

              Dispatch actions to the store using store.dispatch(action).

              Create action creators to reduce the repetitive creation of action objects.

              Register a change listener function to respond to changes to the store using store.subscribe(listener).

              Recognize the pattern for connecting Redux to any user interface.

              Implement a Redux application using either the HTML DOM API or React.

              Throughout this lesson, you may have thought to yourself that Redux adds a lot of unnecessary complexity to these simple applications. We implemented Redux in a very basic way, which is useful for learning but not how it’s done in the real world.

              Redux shines when it is used in applications with many features and a lot of data where having a centralized store to keep it all organized is advantageous. In the next lesson, you will learn how to build and organize Redux applications with complex state.


*/

                const { createStore } = require('redux');

                // Action Creators
                function increment() { 
                  return {type: 'increment'}
                }

                function decrement() { 
                  return {type: 'decrement'}
                }

                // Reducer / Store
                const initialState = 0;
                const countReducer = (state = initialState, action) => {
                  switch (action.type) {
                    case 'increment':
                      return state + 1; 
                    case 'decrement':
                      return state - 1; 
                    default:
                      return state;
                  }
                };  
                const store = createStore(countReducer);

                // HTML Elements
                const counterElement = document.getElementById('counter');
                const incrementer = document.getElementById('incrementer');
                const decrementer = document.getElementById('decrementer');

                // Store State Change Listener
                const render = () => {
                  counterElement.innerHTML = store.getState();
                }
                //  initialisation of  the ui state
                render() 
                // listener to the store to render the new value
                store.subscribe(render);

                // DOM Event Handlers
                const incrementerClicked = () => {
                store.dispatch(increment())
                }
                incrementer.addEventListener('click', incrementerClicked);
                
                const decrementerClicked = () => {
                    store.dispatch(decrement())
                }
                decrementer.addEventListener('click', decrementerClicked);

//  slice is the name of the property in state


      /*
      here how to change the slice in the state for reducer function 
          
      {
        ...state,
        slice: [...state.slice, action.payload]
      }
      */

// STRATEGIES FOR COMPLEX STATE
/*
In the last exercise, you saw how a single reducer was able to handle the logic 
for updating every slice of the store‘s state. Though this approach does work 
for these relatively small examples, as the application state becomes increasingly more
 complex, managing it all with a single reducer will become impractical.

*/

/*
        The solution is to follow a pattern called reducer composition. 
        In this pattern, individual slice reducers are responsible 
        for updating only one slice of the application’s state, 
        and their results are recombined by a rootReducer to form 
        a single state object.

*/
// In the reducer composition pattern, when an action is dispatched to the store:

/*
The rootReducer calls each slice reducer, regardless of the action.
type, with the incoming action and the appropriate slice of the state as arguments.
*/

/*
The slice reducers each determine if they need to update their slice of state,
 or simply return their slice of state unchanged.

*/

/*
The rootReducer reassembles the updated slice values in a new state object.
*/

// combineReducers

/*
In the reducer composition pattern, the same steps are taken by the rootReducer for each slice reducer:

      . call the slice reducer with its slice of the state and the action as arguments
      . store the returned slice of state in a new object that is ultimately returned by the rootReducer().

*/
      import { createStore } from 'redux';
      
      // todosReducer and filterReducer omitted
      
      const rootReducer = (state = {}, action) => {
        const nextState = {
          todos: todosReducer(state.todos, action),
          filter: filterReducer(state.filter, action)
        };
        return nextState;
      };
      
      const store = createStore(rootReducer);
// -----------------------------------------------------------
      import { createStore, combineReducers } from 'redux'
 
// todosReducer and filterReducer omitted.
      
      const reducers = {
          todos: todosReducer,
          filter: filterReducer
      };
      const rootReducer = combineReducers(reducers);
      const store = createStore(rootReducer);

/*
Let’s break this code down:

      The reducers object contains the slice reducers for the application. 
      The keys of the object correspond to the name of the slice being
       managed by the reducer value.

       The combineReducers() function accepts this reducers object and returns a rootReducer function.
      
       The returned rootReducer is passed to createStore() to create a store object.
*/

//  the syntaxe like below

const store = createStore(combineReducers({
  nameOfSlice: nameOfReducer,

}))

// ==============================================================================

// 1 - Installing Redux Toolkit

// #npm install @reduxjs/toolkit

//  "Slices" of State import the createSlice function 

import { createSlice } from '@reduxjs/toolkit';


/*
createSlice() has one parameter, options which is an object with the following properties 

name: a string that is used as the prefix for generated action types
initialState: the initial state value for the reducer
reducers: an object of methods, where the keys determine the action type strings that can update the state,
 and whose methods are reducers that will be executed when that action type is dispatched. 
 These are sometimes referred to as “case reducers”, because they’re similar to a case in a switch statement.
*/
const options = {
  name: 'favoriteRecipes',
  initialState: [],
  reducers: {
    // case addRecipe
    addRecipe: (state, action) =>{
      return [...state, action.payload];
    },
    // second case of reducers
    removeRecipe: (state, action) => {
     return  state.filter(recipe => recipe.id !== action.payload.id)
    }
  }
}


export const favoriteRecipesSlice = createSlice(options);


// Writing "Mutable" Code with Immer
/*
Because Redux reducers must never mutate state, we often write immutable updates 
by using JavaScript’s array and object spread operators and other functions that return
 copies of the original values. However, accidentally mutating state in reducers
  is the single most common mistake Redux users make!

While you still have the option of writing immutable updates the old fashioned way,
 Redux Toolkit’s createSlice() function uses a library called Immer inside 
 of it which helps avoid this mistake.

Immer uses a special JS object called a Proxy to wrap the data you provide 
and lets you write code that “mutates” that wrapped data.
 Immer does this by tracking all the changes you’ve made 
 and then uses that list of changes to return an immutably updated
  value as if you’d written all the immutable update logic by hand.

*/

// So, instead of respect the reducer rule that we have to not make change of the state this library immer can let you 
// avoid this mistale 
// you can write code without respect rule of reducer function by  using createSlice 

const options = {
  name: "favoriteRecipes",
  initialState: [],
  reducers: {
    addRecipe: (state, action) => {
      return  state.push(action.payload)
    },
    removeRecipe: (state, action) => {
      return state.filter(recipe => recipe.id !== action.payload.id)
    },
  },
}

// =====================================================================
// Return Object - Actions by creatSlice function

/* Object returned by todosSlice */
/*
          {
            name: 'todos',
            reducer: (state, action) => newState,
            actions: {
              addTodo: (payload) => ({type: 'todos/addTodo', payload}),
              toggleTodo: (payload) => ({type: 'todos/toggleTodo', payload})
            },
            // case reducers field omitted
          }
*/

//  const todosSlice = createSlice()
console.log(favoriteRecipesSlice.actions.addRecipe('recipe'))

// {type: 'favoriteRecipes/addRecipe', payload: 'recipe'}

//  here we have to export the to action creator from favoriteRecipesSlice.actions
// we will use to dispatch an action with useDispatch

export const { addRecipe, removeRecipe } = favoriteRecipesSlice.actions;

// =================================================================================
// Return Object - Reducers
// Let’s now take a closer look at reducer in the return object of createSlice().

// export the reducer as the default export.

export default favoriteRecipesSlice.reducer;
// =======================================================================
// Converting the Store to Use `configureStore()`


/*
configureStore() accepts a single configuration object parameter.
 The input object should have a reducer property that defines either
  a function to be used as the root reducer, or an object of slice reducers
   which will be combined to create a root reducer.

*/

//Note all the work that this one call to configureStore() does for us:


// . It combines todosReducer and filtersReducer into the root reducer function,
//  which will handle a root state that looks like {todos, filters}, 
//  removing the need to call combineReducers()

// . It creates a Redux store using that root reducer,
//   removing the need to call createStore()

// . It automatically adds the thunk middleware (which you 
//   will learn about in the next lesson!)

// . It automatically adds more middleware to check 
//  for common mistakes like accidentally mutating the state

// . It automatically sets up the Redux DevTools Extension connection

// Because of how much boilerplate code we’re able to bypass with 
//  configureStore(), we can just import the individual slice reducers
//   straight into this file instead of creating a separate file for 
//  the root reducer and having to export/import it.



import { configureStore } from '@reduxjs/toolkit'


// ===================================================================================================

/* 1 -  

Before you can use the <Provider> component you must import it.

In the index.js file, create an import statement that retrieves the Provider component from react-redux.

*/


/* 2 -

The next step is to insert the <Provider> component into the recipe application.

Inside ReactDOM.render(), wrap the top level component, <App> with the <Provider> component.

*/

/* 3 -

With the <App> component now nested inside the <Provider> component, pass the imported Redux store through the <Provider> component store prop.

This begins the process of accessing data throughout the application components but you must do a couple more things to see any progress.

*/

//               The useSelector() Hook

/*
To access Redux store data with useSelector(), you first need to import it from react-redux.

In AllRecipes.js import useSelector from react-redux.


*/








































