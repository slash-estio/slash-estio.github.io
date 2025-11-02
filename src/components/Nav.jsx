import { useEffect, useState } from "react";
import { range } from "../utils/arrays";

const nav_elements = [
  {
    grid_area: "close",
    content: (
      <>
        <i class="bi bi-arrow-up-left base-content" />
        <p className="hover-content">ayaya</p>
      </>
    ),
  },
  {
    grid_area: "home",
  },
];

export default function Nav() {
  var row = 1;
  var count = 0;
  return (
    <div className="window-header">
      <div className="window-header-title">
        <p>/estio</p>
      </div>
      <div className="window-header-buttons">
        <button></button>
        <button></button>
        <button></button>
      </div>
    </div>
  );
}
