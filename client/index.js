import React from 'react'
import { render } from 'react-dom'
import { loadComponents } from 'loadable-components'
import Root from './hot'

//loadComponents().then(() => render(<Root />, document.getElementById('root')))
render(<Root />, document.getElementById('root'))
