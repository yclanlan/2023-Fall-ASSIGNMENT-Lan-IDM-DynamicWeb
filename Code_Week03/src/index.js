import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'



const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

  
)
document.body.addEventListener('scroll', function(e) {    
  if(e._isScroller) return;  e.preventDefault(); }, { passive: false }); 