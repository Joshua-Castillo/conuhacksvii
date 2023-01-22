import React, { useState } from "react";
// import reactLogo from "./assets/react.svg";
import "./App.css";
// import { PowerBIEmbed } from "powerbi-client-react";
// import { models } from "powerbi-client";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello Tony Stark</h1>
      {/* <PowerBIEmbed
        embedConfig={{
          type: "report", // Supported types: report, dashboard, tile, visual and qna
          id: "<Report Id>",
          embedUrl: "<Embed Url>",
          accessToken: "<Access Token>",
          tokenType: models.TokenType.Embed,
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false,
              },
            },
            background: models.BackgroundType.Transparent,
          },
        }}
        eventHandlers={
          new Map([
            [
              "loaded",
              function () {
                console.log("Report loaded");
              },
            ],
            [
              "rendered",
              function () {
                console.log("Report rendered");
              },
            ],
            [
              "error",
              function (event) {
                console.log(event.detail);
              },
            ],
          ])
        }
        cssClassName={"report-style-class"}
        getEmbeddedComponent={(embeddedReport) => {
          this.report = embeddedReport as Report;
        }} 
      />*/}
    </div>
  );
}

export default App;
