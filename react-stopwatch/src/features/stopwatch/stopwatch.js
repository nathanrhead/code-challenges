import React from 'react';
import './App.css';

const initialState = {
    running: false,
    time: 0
}

const view = model => {
  const minutes = Math.floor(model.time / 60);
  const seconds = model.time - (minutes * 60);
  const secondsFormatted = `${seconds < 10 ? '0' : ''}${seconds}`;
  const handler = event => {
    container.dispatch(model.running ? 'Stop' : 'Start');
  };

  return <div>
    <p> {minutes}:{secondsFormatted} </p>
    <button onClick={handler}>{model.running ? 'Stop' : 'Start'}</button>
  </div>;
};

const update = (model, intent) => {
  const updates = {
    'Tick': model => Object.assign(model, {time: model.time + (model.running ? 1 : 0)}),
    'Start': model => Object.assign(model, {running: true}),
    'Stop': model => Object.assign(model, {running: false}),
  };

    return (updates[intent] || (() => model)) (model);
};

// Custom state container
const createStore = reducer => {
  let internalState;
  const handlers = [];
  return {
    dispatch: intent => {
      internalState = reducer(internalState, intent);
      handlers.forEach(h => h());
    },
    subscribe: handler => {
      handlers.push(handler);
    },
    getState: () => internalState,
  }
}

const container = createStore(update);

function App() {
  return (
    <main>
      (view(container.getState())
    </main>
  );
}

setInterval(() => {
  container.dispatch('Tick');
}, 1000)

export default App;
