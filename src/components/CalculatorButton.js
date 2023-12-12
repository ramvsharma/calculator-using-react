const CalculatorButton = (props) =>{
    return (
        <div className="calculator-button">
            <button >{props.digitOrSymbol}</button>
        </div>
        
    );
}

export default CalculatorButton;