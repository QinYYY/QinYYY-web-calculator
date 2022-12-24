
import React, { useState } from 'react';
import './App.css';
import NumberButton from './Components/NumberButton';
import ResultArea from './Components/ResultArea';
import CalculateOperateArea from './Components/CalculateOperateArea';

function App() {

  const [displayValue, setdisplayValue] = useState('12')

  const [operationModel, setoperationModel] = useState
    //   < {
    //   firstNumber: String,
    //   secondNumber: String,
    //   operationSymbol: String,
    //   displayNumer: '0'
    // } >
    ({
      firstNumber: '',
      secondNumber: '',
      operationSymbol: '',
      displayNumer: '0'
    })
  function handleValueChange(n1, symbol, n2, displayNumer) {
    console.log('passvalye->' + displayNumer);
    // setdisplayValue(passValue)
    setoperationModel((preValue) => {
      return {
        firstNumber: n1,
        secondNumber: n2,
        operationSymbol: symbol,
        displayNumer: displayNumer
      }
    })
  }
  return (
    <div className="App">
      <div className='container'>
        <ResultArea displayValue={operationModel.displayNumer}></ResultArea>
        <CalculateOperateArea onDisplayValueChange={handleValueChange} model={operationModel}></CalculateOperateArea>
      </div>
    </div>
  );
}

export default App;
