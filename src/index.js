import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// Function to dynamically load the Google Analytics script in the <head>
const loadGoogleAnalytics = () => {
    // Create the script tag for gtag.js
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-6K2QPW4CDD';
    script.async = true;

    // Insert the script as the first script in the head
    const head = document.head;
    if (head.firstChild) {
        head.insertBefore(script, head.firstChild);
    } else {
        head.appendChild(script);
    }

    // Initialize the Google Analytics window object
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-6K2QPW4CDD');
};

// Load Google Analytics script
loadGoogleAnalytics();

ReactDOM.render(<App />, document.getElementById('root'));

// Register the service worker
serviceWorker.register();
