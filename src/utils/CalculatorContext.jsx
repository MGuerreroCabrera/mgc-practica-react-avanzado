import React, { createContext, useReducer } from 'react';

// Crear el contexto de la calculadora
const CalculatorContext = createContext();

// Definir las acciones del reducer
const initialState = {
    input: '',
    operator: null,
    firstNumber: null,
    secondNumber: null,
    result: null,
    history: []
};

// Lógica del reducer
const calculatorReducer = (state, action) => {
    switch (action.type) {
        case 'SET_INPUT':
            return { ...state, input: action.payload };
        case 'SET_OPERATOR':
            return { ...state, operator: action.payload, firstNumber: parseFloat(state.input), input: '' };
        case 'SET_SECOND_NUMBER':
            return { ...state, secondNumber: parseFloat(state.input) };
        case 'CALCULATE_RESULT':
            const { firstNumber, secondNumber, operator } = state;
            let result;
            switch (operator) {
                case '+':
                    result = firstNumber + secondNumber;
                    break;
                case '-':
                    result = firstNumber - secondNumber;
                    break;
                case '*':
                    result = firstNumber * secondNumber;
                    break;
                case '/':
                    result = firstNumber / secondNumber;
                    break;
                case '%':
                    result = firstNumber % secondNumber;
                    break;
                default:
                    result = 0;
            }
            const history = [...state.history, result].sort((a, b) => a - b);
            return { ...initialState, result, history };
        case 'CLEAR_INPUT':
            return { ...state, input: '' };
        default:
            return state;
    }
};

// Crear el proveedor del contexto
const CalculatorProvider = ({ children }) => {
    const [state, dispatch] = useReducer(calculatorReducer, initialState);
    return (
        <CalculatorContext.Provider value={{ state, dispatch }}>
            {children}
        </CalculatorContext.Provider>
    );
};

export { CalculatorContext, CalculatorProvider };