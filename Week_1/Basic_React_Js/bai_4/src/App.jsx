import { useState } from "react";
import LoginFrom from "./LoginFrom.jsx";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fullscreen">
      <div className="app">
        <button className="open-btn" onClick={() => setOpen(true)}>
          Open Login
        </button>
      </div>

      <LoginFrom open={open} onClose={() => setOpen(false)} />
    </div>
  );
}

