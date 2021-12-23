import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
declare global {
  interface Window { WebFont: any, $: any; }
}
window.WebFont = window.WebFont || {}; window.$ = window.$ || {};
const WebFont = window.WebFont;
const $ = window.$;

$.ig.RevealSdkSettings.setBaseUrl("https://samples.revealbi.io/upmedia-backend/reveal-api/");

var revealTheme = new $.ig.RevealTheme();
revealTheme.dashboardBackgroundColor = "#cccccc"; //テーマの定義を変更

const webfontCallback = () => {
  $.ig.RevealView.updateRevealTheme(revealTheme);
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

WebFont.load({
  custom: {
      families: ['Roboto-Regular', 'Roboto-Bold', 'Roboto-Medium']
  },
  active: webfontCallback
});


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
