// make React available
import React from 'react';

// make the ReactDOM available, necessary for rendering the component
import ReactDOM from 'react-dom';

// make the App component available
import App from './App';

// make the STORE component available
import STORE from './store';

// this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<App lists={STORE.lists} allCards={STORE.allCards}/>, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});