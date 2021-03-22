import React from "react";
import ReactDOM from "react-dom";
import { Heart, ThumbsUp } from "react-feather";
import { useMachine } from "@xstate/react";
import btnMachine, { BTN_EVENTS, BTN_STATES } from "./machine";
import "./styles.css";

function App() {
  const [state, send] = useMachine(btnMachine);
  console.log(state);
  return (
    <div className="app">
      <div className="button-wrap">
        <div className="menu">
          {state.matches(BTN_STATES.HEART) && (
            <Heart color="#FF0202" fill="#FF0202" />
          )}
          {state.matches(BTN_STATES.THUMB) && (
            <ThumbsUp color="#4267B2" fill="#4267B2" />
          )}
        </div>
        <button
          className="button"
          onClick={() => {
            send(BTN_EVENTS.CLICK);
          }}
        >
          Click
        </button>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
