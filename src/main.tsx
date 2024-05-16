import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { chatStore } from './chatStore/Chatstore.ts'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
 
    <Provider store={chatStore}><App /></Provider>
    

)
