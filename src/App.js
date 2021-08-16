import React from "react";
import { Switch } from "./Switch/index";
import { Toggle } from "@fluentui/react";
import "./styles.css";

export default function App() {
  const SwitchRef = React.useRef(null);

  // SwitchRef.current.focus();
  return (
    <div className="App">
      <form action="https://jkorpela.fi/cgi-bin/echo.cgi">
        <Switch
          id={"1"}
          name="Comments"
          input={{ name: "Comments" }}
          style={{
            width: "300px",
            height: "50px",
            "--slider-thumb-size": "30px"
          }}
        />
        <input type="checkbox" name="Comments" />
        Test
        <Switch defaultChecked={true} />
        <Switch checked={false} disabled />
        <Switch checked={true} disabled />
        asdasd
        <Toggle />
        <Toggle checked={false} disabled />
        <Toggle checked={true} disabled />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
