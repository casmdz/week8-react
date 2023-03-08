import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import AppFunction from './AppFunction';
// import { Nav } from './Components/Nav'
// import reportWebVitals from './reportWebVitals';
import './Fonts/Tilt_Neon/TiltNeon-Regular.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <AppFunction />
        {/* <App /> */}
    </React.StrictMode>
);