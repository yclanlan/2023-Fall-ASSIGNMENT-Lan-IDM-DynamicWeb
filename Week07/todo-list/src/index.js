import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// import TodosContext from './context/todo'
import { Provider } from './context/todo'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
 
  <Provider>
  
  <App />
  </Provider >

    {/* <TodosContext.Provider value={5} >
    <App />
    </TodosContext.Provider> */}
 
  </React.StrictMode>
)
