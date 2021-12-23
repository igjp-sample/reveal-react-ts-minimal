import React, { useEffect } from 'react';
import './App.css';
declare global {
  interface Window { $: any; }
}
window.$ = window.$ || {};
const $ = window.$;

function App() {

  $.ig.RevealSdkSettings.setBaseUrl("https://samples.revealbi.io/upmedia-backend/reveal-api/");

  useEffect(() => {
    const dashboardId = "Marketing";
    $.ig.RevealUtility.loadDashboard(
      dashboardId,
      (dashboard: any) => {
        var view = new $.ig.RevealView("#marketing");
        view.dashboard = dashboard;
      },
      (error: any) => console.log(error)
    );

  }, []);

  return (
    <div className="App">
      <div id="marketing" />
    </div>
  );
}

export default App;
