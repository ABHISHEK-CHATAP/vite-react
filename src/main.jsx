import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AppProvider } from './Components/Context.jsx'
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById('root')).render(

  <Auth0Provider
  domain="dev-goehz6pc228k76ol.us.auth0.com"
  clientId="FvSshJHfejBq1cWOXRnuSb93EFO9g9wy"
  authorizationParams={{
    redirect_uri: window.location.origin
  }}
>
  
<AppProvider>
 
    <App />

  </AppProvider>

  </Auth0Provider>
  ,
)
