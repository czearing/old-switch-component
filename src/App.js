import React from "react";
import { Switch } from "./Switch/index";
import { Toggle } from "@fluentui/react";
import "./styles.css";

export default function App() {
  const [myValue, setMyValue] = React.useState(false);
  const SwitchRef = React.useRef(null);

  const onChange = (ev) => {
    setMyValue(ev.target.checked);
  };

  // SwitchRef.current.focus();
  return (
    <div className="App">
      <form action="https://jkorpela.fi/cgi-bin/echo.cgi">
        <Switch
          id={"1"}
          name="Comments"
          input={{ name: "Comments" }}
          // style={{
          //   width: "100px",
          //   height: "50px",
          //   "--slider-thumb-size": "20px"
          // }}
        />
        <input type="checkbox" name="Comments" defaultChecked={true} />
        Test
        <Switch checked={myValue} onChange={onChange} />
        <Switch defaultChecked={false} disabled />
        <Switch defaultChecked={true} disabled />
        asdasd
        <Toggle />
        <Toggle defaultChecked={false} disabled />
        <Toggle defaultChecked={true} disabled />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}
