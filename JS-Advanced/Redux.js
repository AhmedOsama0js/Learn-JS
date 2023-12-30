/*
specific order must be followed between `store`, `reducer`, `dispatch`, and `subscribe` in  code:

Here is the correct order for the key elements in Redux:

1. **Create the Store (`createStore`)**:
   - The store is created using `createStore` from Redux, passing the reducer to it.
   - The store is responsible for storing the current state of the entire application.

2. **Define the Reducer (`reducer`)**:
   - The reducer is a function that takes the current state (`state`) and an action (`action`) and returns the new state based on the action.
   - It is the only place where the state can be modified.

3. **Dispatch Actions (`dispatch`)**:
   - Actions are sent from application components to request a change in the state.
   - Actions are sent using the `dispatch` function provided by the store.

4. **Subscribe to Changes (`subscribe`)**:
   - Components can subscribe to the store to receive notifications when changes occur in the state.
   - Subscription is done using the `subscribe` function provided by the store.

**In the provided code, this order is correctly followed:**

1. **Create the Store (`store = createStore(controlRedux)`)**:
   - The store is created using the `controlRedux` reducer.
2. **Define the Reducer (`controlRedux`)**:
   - The reducer defines how to update the state based on "ADD" and "SUB" actions.
3. **Subscribe to Changes (`store.subscribe(addCount)`)**:
   - Subscription is done to the store to run the `addCount` function when changes occur in the state.
4. **Dispatch Actions (`store.dispatch` in event handlers)**:
   - "ADD" and "SUB" actions are dispatched when buttons are clicked, leading to state updates.
5. **Update the Interface (`addCount`)**:
   - The `addCount` function updates the `counter` interface element with the current state value.

**This order ensures proper data flow in a Redux application:**

1. An action is dispatched from a component.
2. The store passes the action to the reducer.
3. The reducer updates the state and returns it to the store.
4. The store notifies all subscribed components of the change.
5. Subscribed components update the interface based on the new state.

*/
const add = document.getElementById("Add");
const sub = document.getElementById("sub");
const counter = document.getElementById("counter");

import * as Redux from "https://cdn.jsdelivr.net/npm/redux@5.0.1/dist/redux.legacy-esm.min.js";

const { createStore } = Redux;

const iniState = { num: 0 };

const controlRedux = (state = iniState, action) => {
  if (action.type === "ADD") {
    return { num: state.num < 10 ? state.num + action.pay : state.num };
  }

  if (action.type === "SUB") {
    return { num: state.num > 0 ? state.num - action.pay : state.num };
  }

  return state;
};

const store = createStore(controlRedux);

const addCount = () => {
  counter.innerText = store.getState().num;
};

addCount();

store.subscribe(addCount);

add.addEventListener("click", () => {
  store.dispatch({ type: "ADD", pay: 1 });
});

sub.addEventListener("click", () => {
  store.dispatch({ type: "SUB", pay: 1 });
});
