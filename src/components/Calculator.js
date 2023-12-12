import CalculatorInputResult from "./CalculatorInputResult";
import CalculatorButton from "./CalculatorButton";
const Calculator = ()=>{
    return (
        <div className="calculator">
            <div className="calculator-top-dash" />
            <CalculatorInputResult />
            <div className="calculator-button-container">
                <CalculatorButton digitOrSymbol='AC'/>
                <CalculatorButton digitOrSymbol='C'/>
                <CalculatorButton digitOrSymbol='%'/>
                <CalculatorButton digitOrSymbol='/'/>
                <CalculatorButton digitOrSymbol='7'/>
                <CalculatorButton digitOrSymbol='8'/>
                <CalculatorButton digitOrSymbol='9'/>
                <CalculatorButton digitOrSymbol='*'/>
                <CalculatorButton digitOrSymbol='4'/>
                <CalculatorButton digitOrSymbol='5'/>
                <CalculatorButton digitOrSymbol='6'/>
                <CalculatorButton digitOrSymbol='-'/>
                <CalculatorButton digitOrSymbol='1'/>
                <CalculatorButton digitOrSymbol='2'/>
                <CalculatorButton digitOrSymbol='3'/>
                <CalculatorButton digitOrSymbol='+'/>
                <CalculatorButton digitOrSymbol='0'/>
                <CalculatorButton digitOrSymbol='00'/>
                <CalculatorButton digitOrSymbol='.'/>
                <CalculatorButton digitOrSymbol='='/>
                
            </div>
        
        </div>
    );
}

export default Calculator;