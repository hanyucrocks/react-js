import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App run horaa!</h1>
    </div>
  )
}

const reactelement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click me to visit googal'
)
createRoot(document.getElementById('root')).render(
 reactelement
)
