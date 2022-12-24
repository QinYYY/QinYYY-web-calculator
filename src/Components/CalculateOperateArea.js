import React, { useState } from "react";
import NumberButton from "./NumberButton";
import './CalculateOperateArea.css'
export default function CalculateOperateArea(pros) {
  // const operationSymbols = ['+', '-', 'x', '÷']
  const numbers = ['+', '-', 'x', '7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.', 'C']
  // var model
  var firstNumber = pros.model.firstNumber
  var secondNumber = pros.model.secondNumber
  var operationSymbol = pros.model.operationSymbol
  var displayNumer = pros.model.displayNumer
  // var firstNumber = ''
  // var secondNumber = ''
  // var operationSymbol = ''
  // var displayNumer = ''
  console.log('fir ===' + firstNumber);
  function handleClick(event) {

    const tvalue = event.target.value;

    if (tvalue === '+') {
      showOperation(tvalue)
    } else if (tvalue === '-') {
      showOperation(tvalue)
    } else if (tvalue === 'x') {
      showOperation(tvalue)
    } else if (tvalue === '÷') {
      showOperation(tvalue)
    } else if (tvalue === '.') {

      if (operationSymbol === '') {
        firstNumber += tvalue
        displayNumer = firstNumber
      } else {
        secondNumber += tvalue
        displayNumer = secondNumber
      }
      console.log('222' + displayNumer);
      pros.onDisplayValueChange(firstNumber, operationSymbol, secondNumber, displayNumer)
    } else if (tvalue === 'C') {
      firstNumber = '0'
      secondNumber = '0'
      operationSymbol = ''
      displayNumer = '0'
      pros.onDisplayValueChange(firstNumber, operationSymbol, secondNumber, displayNumer)
    } else if (tvalue === '=') {
      calculator(firstNumber, operationSymbol, secondNumber)

    } else {

      if (operationSymbol == '') {
        if (firstNumber === '0') {
          firstNumber = tvalue
        } else {
          firstNumber += tvalue
        }
        displayNumer = firstNumber
        console.log('first -> ' + firstNumber);
        pros.onDisplayValueChange(firstNumber, operationSymbol, secondNumber, displayNumer)
      } else {
        if (secondNumber === '0') {
          secondNumber = tvalue
        } else {
          secondNumber += tvalue
        }
        console.log('second -> ' + secondNumber);
        displayNumer = secondNumber;
        pros.onDisplayValueChange(firstNumber, operationSymbol, secondNumber, displayNumer)
      }
    }
  }

  function showOperation(tvalue) {
    operationSymbol = tvalue
    firstNumber = displayNumer
    // displayNumer = tvalue

  }
  function calculator(n1, symbol, n2) {
    console.log(n1, symbol, n2);
    if (symbol === '+') {
      displayNumer = parseFloat(n1) + parseFloat(n2)
    } else if (symbol === '-') {
      displayNumer = parseFloat(n1) - parseFloat(n2)
    } else if (symbol === 'x') {
      displayNumer = parseFloat(n1) * parseFloat(n2)
    } else if (symbol === '÷') {
      displayNumer = parseFloat(n1) / parseFloat(n2)
    }

    firstNumber = '0'
    secondNumber = '0'
    operationSymbol = ''
    console.log('res = ' + displayNumer);
    pros.onDisplayValueChange(firstNumber, operationSymbol, secondNumber, displayNumer)
  }


  return <div>

    <div >
      <div className="numberDiv">
        {numbers.map(num => {
          return <button onClick={handleClick} value={num} className='num'>{num}</button>
        })}
      </div>
      <div className="rightDiv">
        <button value='÷' className="divisionButton rightbtn" onClick={handleClick}>÷</button>
        <button value='=' className="rightbtn equalBtn" onClick={handleClick}>=</button>
      </div>
    </div>
  </div>
}