import React, { useState } from "react";
import "./ResultArea.css"

export default function ResultArea(pros) {
  console.log('resar ---' + pros.displayValue);
  return <div className="ResultAreaDiv">
    <label>{pros.displayValue}</label>
  </div>

}