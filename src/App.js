import React from "react";
import "./styles.css";
import Button from "./components/Button";

export default function App() {
  return (
    <div className="App">
      <Button
        onClick={() => {
          console.log("You Clicked on Me!");
        }}
        type="button"
        buttonStyle="btn--primary--outline"
        buttonSize="btn--large"
      >
        Buy now
      </Button>
    </div>
  );
}
