import React from "react";
import ReactDOM from "react-dom/client";
import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { TwistyPuzzle } from "../../src";
import "./style.css";

const App = () => (
  <>
    <Canvas flat>
      <Environment preset="city" />
      <OrbitControls />
      <TwistyPuzzle alg="R U R' U'" />
    </Canvas>
    <div id="controls">Hi</div>
  </>
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
