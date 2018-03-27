import React from 'react';
import { render } from 'react-dom';

import App from '../app'

// Take a component and render it on the root element
const renderReact = (Root) => {
  render(<Root/>, document.getElementById('root'))
}

// On client.js load, render App
renderReact(App)

if(module.hot){
  console.log(module)
  // On update from '../app' rerender App
  module.hot.accept('../app', () => {
    const updatedApp = require('../app').default
    renderReact(updatedApp)
  })
}