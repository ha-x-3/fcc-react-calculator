import React, { useState } from 'react';
import * as math from 'mathjs';
import './App.css';

function App() {
	const [formula, setFormula] = useState('');
	const [input, setInput] = useState('0');
	const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    switch (value) {
      case 'AC':
        setFormula('');
        setInput('0');
        setResult('');
        break;
      case '=':
        try {
          const evaluatedResult = math.evaluate(formula + input);
          setResult(evaluatedResult.toString());
          setFormula((prev) => prev + input + '=');
          setInput('');
        } catch (error) {
          setResult('Error');
          setFormula('');
          setInput('');
        }
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        if (input === '' && formula === '') return; // Do nothing if both input and formula are empty
        if (input === '') {
          // Replace the last operator if input is empty
          setFormula((prev) => prev.slice(0, -1) + value);
        } else {
          setFormula((prev) => prev + input + value);
          setInput('');
        }
        break;
      case '.':
        if (!input.includes('.')) {
          setInput((prev) => prev + value);
        }
        break;
      default:
        // Handle numbers
        if (value === '0' && input === '0') {
          break;
        }
        setInput((prev) => (prev === '0' ? value : prev + value));
        if (formula.includes('=') || result) {
          setFormula('');
          setResult('');
        }
        break;
    }
  };

	return (
		<div id='app'>
			<h1>React Calculator</h1>
			<div id='calculator'>
				<div id='display-div'>
					<div id='display-line'>{formula}</div>
					<div id='display'>{input || result}</div>
				</div>
				<div id='buttons'>
					<button
						id='clear'
						value='AC'
						className='jumbo'
						onClick={() => handleButtonClick('AC')}
					>
						AC
					</button>
					<button
						id='divide'
						value='/'
						className='operator'
						onClick={() => handleButtonClick('/')}
					>
						/
					</button>
					<button
						id='multiply'
						value='*'
						className='operator'
						onClick={() => handleButtonClick('*')}
					>
						X
					</button>
					<button
						id='seven'
						value='7'
						onClick={() => handleButtonClick('7')}
					>
						7
					</button>
					<button
						id='eight'
						value='8'
						onClick={() => handleButtonClick('8')}
					>
						8
					</button>
					<button
						id='nine'
						value='9'
						onClick={() => handleButtonClick('9')}
					>
						9
					</button>
					<button
						id='subtract'
						value='-'
						className='operator'
						onClick={() => handleButtonClick('-')}
					>
						-
					</button>
					<button
						id='four'
						value='4'
						onClick={() => handleButtonClick('4')}
					>
						4
					</button>
					<button
						id='five'
						value='5'
						onClick={() => handleButtonClick('5')}
					>
						5
					</button>
					<button
						id='six'
						value='6'
						onClick={() => handleButtonClick('6')}
					>
						6
					</button>
					<button
						id='add'
						value='+'
						className='operator'
						onClick={() => handleButtonClick('+')}
					>
						+
					</button>
					<button
						id='one'
						value='1'
						onClick={() => handleButtonClick('1')}
					>
						1
					</button>
					<button
						id='two'
						value='2'
						onClick={() => handleButtonClick('2')}
					>
						2
					</button>
					<button
						id='three'
						value='3'
						onClick={() => handleButtonClick('3')}
					>
						3
					</button>
					<button
						id='zero'
						value='0'
						className='jumbo'
						onClick={() => handleButtonClick('0')}
					>
						0
					</button>
					<button
						id='decimal'
						value='.'
						className='operator'
						onClick={() => handleButtonClick('.')}
					>
						.
					</button>
					<button
						id='equals'
						value='='
						onClick={() => handleButtonClick('=')}
					>
						=
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
