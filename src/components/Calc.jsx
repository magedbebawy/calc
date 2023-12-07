import { useState } from 'react';
import './Calc.css';

function Calc() {
    const [ input, setInput ] = useState('');
    const [ result, setResult ] = useState(0);
    
    // A function to add input
    const addInput = (num) => {
        setInput(input + num);
    }

    // A function to clear input
    const clearInput = () => {
        setInput('');
        setResult('');
    }

    // A function to delete the last intered element
    const deleteNum = () => {
        console.log(input[input.length - 1]);
        const newInput = input.slice(0, input.length - 1);
        setInput(newInput);
    }

    // A function to calculate input
    const calc = (values) => {
        try{
            setResult(eval(values));
            setInput('');
        }catch (err) {
            console.log(err);
            setResult('Please enter a valid input');
        }
    }


    return (
        <div>
            <div className='col-container'>
                <input type="text" value={input}/>
                <input type="text" disabled="true" value={result}/>
            </div>
            <div className='container'>
                <button onClick={() => addInput(1)} className='button'>1
                </button>
                <button onClick={() => addInput(2)} className='button'>2</button>
                <button onClick={() => addInput(3)} className='button'>3</button>
                <button onClick={() => addInput(4)} className='button'>4</button>
            </div>
            <div className='container'>
                <button onClick={() => addInput(5)} className='button'>5</button>
                <button onClick={() => addInput(6)} className='button'>6</button>
                <button onClick={() => addInput(7)} className='button'>7</button>
                <button onClick={() => addInput(8)} className='button'>8</button>
            </div>
            <div className='container'>
                <button onClick={() => addInput(9)} className='button'>9</button>
                <button onClick={() => addInput(0)} className='button'>0</button>
                <button onClick={() => addInput('+')} className='button'>+</button>
                <button onClick={() => addInput('-')} className='button'>-</button>
            </div>
            <div className='container'>
                <button onClick={() => addInput('*')} className='button'>*</button>
                <button onClick={() => addInput('/')} className='button'>/</button>
                <button onClick={() => addInput('(')} className='button'>(</button>
                <button onClick={() => addInput(')')} className='button'>)</button>
            </div>
            <div className='container'>
                <button onClick={() => calc(input)}  className='equal-button'>=</button>
                <button onClick={() => clearInput()} className='button'>C</button>
                <button onClick={() => deleteNum()} className="button">Del</button>
            </div>
        </div>
    )
}

export default Calc;