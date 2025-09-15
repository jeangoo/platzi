import React from "react";
import { createRoot } from "react-dom/client";
import App from './components/App.js';

const container = document.getElementById('app')!;
const root = createRoot(container);

root.render(<App greet="Hello EsBuild!" />)