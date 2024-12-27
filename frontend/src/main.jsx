import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom'
import StoreContextProvider from './context/storecontext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <StoreContextProvider>
   <App/>
   </StoreContextProvider>
   </BrowserRouter>
   

)
