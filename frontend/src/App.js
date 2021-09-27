import React, { useState } from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home';
import Tour from './components/Pages/Tour';
import About from './components/Pages/About';
import Services from './components/Pages/Services';
import Products from './components/Pages/Products';
import Contact from './components/Pages/Contact';
import Sitemap from './components/Pages/Sitemap';
import Terms from './components/Pages/Terms';
import Privacy from './components/Pages/Privacy';
import styled, { ThemeProvider } from 'styled-components';
import { LightTheme, DarkTheme, GlobalStyles } from './themes.js';
import CookieConsent from 'react-cookie-consent';


const StyledApp = styled.div``;

function App() {
  const [theme, setTheme] = useState("light");
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };
  return (
    <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
      <GlobalStyles />
      <StyledApp>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/tour' component={Tour}/>
          <Route path='/about' component={About}/>
          <Route path='/services' component={Services}/>
          <Route path='/products' component={Products}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/sitemap' component={Sitemap}/>
          <Route path='/terms' component={Terms}/>
          <Route path='/privacy' component={Privacy}/>
        </Switch>
      </Router>
        <CookieConsent
          cookieName="thriving-source_consent"
          style={{
            backgroundColor: "#3f3485",
            textAlign: "center"
          }}
          buttonStyle={{
            color: "#fff",
            backgroundColor: "#e5447a",
            fontSize: "20px",
            borderRadius: "20px",
            padding: "10px"
          }}
          expires={365}
        >
          <span style={{fontSize: "20px"}}>
          This site uses cookies to give you better experience.<br />
          Please see our <br /><a href="/privacy" style={{color: "#e5447a"}}>Privacy Policy</a><br/> and <br /><a href="/terms" style={{color: "#e5447a"}}>Term of Service</a>
          <br />for more information.
          </span>
        </CookieConsent>
      </StyledApp>

    </ ThemeProvider>
  );
}

export default App;
