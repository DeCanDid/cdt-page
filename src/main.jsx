import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import Header from './navs/Header.jsx';
import Footer from './navs/Footer.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header/>
      <App />
      <Footer/>

    </BrowserRouter>
  </StrictMode>,
)
