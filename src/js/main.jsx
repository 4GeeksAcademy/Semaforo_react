import React from 'react'
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/index.css'
import SignalLight from './components/SignalLight';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SignalLight/>
  </React.StrictMode>,
)
