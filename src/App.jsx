import './App.css'
import useCurrentTime from './customHooks/useCurrentTime'
import Timer from './components/Timer/Timer'
import { CalculatorProvider } from './utils/CalculatorContext';
import Calculator from './components/Calculator/Calculator';

function App() {
  // Llamar al custom hook para obtener la hora actual
  const currentTime = useCurrentTime();

  return (
    <div className="main-content">
      <Timer time={currentTime} />
      <CalculatorProvider>
        <Calculator />
      </CalculatorProvider>
    </div>    
  );
}

export default App
