import "./Calculator.css";
import React, { useContext } from 'react';
import { CalculatorContext } from '../../utils/CalculatorContext';

const Calculator = () => {
    // Utilizar el contexto de la calculadora
    const { state, dispatch } = useContext(CalculatorContext);

    // Controlar el cambio en el input
    const handleInputChange = (e) => {
        dispatch({ type: 'SET_INPUT', payload: e.target.value });
    };

    // Controlar la selección de la operación
    const handleOperationClick = (operator) => {
        dispatch({ type: 'SET_OPERATOR', payload: operator });
        dispatch({ type: 'CLEAR_INPUT' });
    };

    // Constrolar el cálculo del resultado
    const handleEqualClick = () => {
        dispatch({ type: 'SET_SECOND_NUMBER' });
        dispatch({ type: 'CALCULATE_RESULT' });
    };

    return (
        <div className='calculator-container'>
            <h2>Calculadora</h2>
            <input 
                type="text" 
                value={state.input} 
                onChange={handleInputChange} 
                placeholder="Introduce un número" 
            />
            <div className="buttons-container">
                <button onClick={() => handleOperationClick('+')}>+</button>
                <button onClick={() => handleOperationClick('-')}>-</button>
                <button onClick={() => handleOperationClick('*')}>*</button>
                <button onClick={() => handleOperationClick('/')}>/</button>
                <button onClick={() => handleOperationClick('%')}>%</button>
                <button onClick={handleEqualClick}>=</button>
            </div>
            <div>
                <h2>Último Resultado: {state.result}</h2>
                <h3>Historial:</h3>
                <ul>
                    {state.history.map((result, index) => (
                        <li key={index}>{result}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Calculator;
