import React from 'react'
import ReactDOM from 'react-dom'
import Starter from './components/Starter'

const rootEl = document.getElementById('start')

function render() {
  ReactDOM.render(<Starter />,rootEl)
  
}
render()
