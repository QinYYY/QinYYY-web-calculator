import React, { useState } from "react";
import './NumberButton.css'

export default function NumberButton(pros) {

  function clickNumber(event) {

    // pros.onClick()

    const number = event.target.value

  }
  return <div className='NumberButtonDiv'>
    <button
      onClick={clickNumber}
      value={pros.name}
      className='NumberButton'>{pros.name}</button>
  </div>

}