import "./Modal.css";

import React from "react";
import ReactDOM from "react-dom";

function Modal({ children }: { children: React.ReactNode }) {
  return ReactDOM.createPortal(
    <div className="modal-background">{children}</div>,
    document.getElementById("modal-root")!
  );
}

export { Modal };
