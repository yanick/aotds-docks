import { readable } from "svelte/store";
import { compose, applyMiddleware } from "redux";

import { calc_ship_req } from "../dux/utils";

const composeEnhancers =
  (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

import shipDux from "../dux";

export default () => {
   let saved = window && window.localStorage.getItem('aotds-shipyard');
    if( saved ) {
        saved = JSON.parse(saved);
    }
    else {
        saved = undefined;
    }
    console.log(saved);


  const duxStore = shipDux.createStore(saved, (mw) =>
    composeEnhancers(applyMiddleware(mw))
  );

  duxStore.dispatch(
    duxStore.actions.set_ship_reqs(calc_ship_req(duxStore.getState()))
  );

  Object.entries(duxStore.actions).forEach( ([type,action]) => {
      duxStore.dispatch[ type ] = payload => duxStore.dispatch( action(payload) )
  });

  let previous = undefined;
  duxStore.subscribe( () => {
    let current = duxStore.getState();
      if ( previous === current ) return;
      previous = current;
      console.log(current);

      window && window.localStorage.setItem(
          'aotds-shipyard', JSON.stringify(current)
      );
  });

  const state = readable(duxStore.getState(), (set) =>
    duxStore.subscribe(() => {
      set(duxStore.getState());
    })
  );

  return {
    subscribe: state.subscribe,
    dispatch: duxStore.dispatch,
    actions: duxStore.actions,
    selectors: duxStore.selectors,
  };
};
