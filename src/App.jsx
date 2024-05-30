import React, { useState } from 'react';
import * as math from 'mathjs';
import './App.css';

function App() {
	const [output, setOutput] = useState('0');
	const [currentValue, setCurrentValue] = useState('');
	const [currentFormula, setCurrentFormula] = useState('');
	const [isEqualsClicked, setIsEqualsClicked] = useState(false);

	const clear = () => {
		setOutput('0');
		setCurrentValue('');
		setCurrentFormula('');
		setIsEqualsClicked(false);
	};

	const typeNumbers = (e) => {
		const value = e.target.value;
		if (currentValue === '0' && value === '0') return;

		if (isEqualsClicked) {
			setOutput(value);
			setCurrentValue(value);
			setCurrentFormula(value);
			setIsEqualsClicked(false);
		} else {
			const newValue =
				currentValue === '0' ? value : currentValue + value;
			setOutput(newValue);
			setCurrentValue(newValue);
			setCurrentFormula(currentFormula + value);
		}
	};

	const handleOperators = (e) => {
		const operator = e.target.value;
		const lastChar = currentFormula[currentFormula.length - 1];
		const operators = /[+\-*/]/;

		if (isEqualsClicked) {
			setCurrentFormula(output + operator);
			setCurrentValue('');
			setIsEqualsClicked(false);
		} else if (!operators.test(lastChar)) {
			setCurrentFormula(currentFormula + operator);
			setCurrentValue('');
		} else if (lastChar !== '-' && operator === '-') {
			setCurrentFormula(currentFormula + operator);
		} else if (operator !== '-' && lastChar === '-') {
			setCurrentFormula(currentFormula.slice(0, -2) + operator);
			setCurrentValue('');
		} else {
			setCurrentFormula(currentFormula.slice(0, -1) + operator);
		}
	};

	const addDecimal = () => {
		if (!currentValue.includes('.')) {
			const newValue = currentValue + '.';
			setOutput(newValue);
			setCurrentFormula(currentFormula + '.');
			setCurrentValue(newValue);
		}
	};

	const evaluate = () => {
		if (currentFormula !== '') {
			try {
				const result = math.evaluate(currentFormula);
				setOutput(result.toString());
				setCurrentFormula(currentFormula + '=' + result);
				setCurrentValue(result.toString());
				setIsEqualsClicked(true);
			} catch (error) {
				setOutput('Error');
				setCurrentFormula('');
				setCurrentValue('');
			}
		}
	};

	return (
		<div id='app'>
			<h1>React Calculator</h1>
			<div id='calculator'>
				<div id='display-div'>
					<div id='display-line'>{currentFormula}</div>
					<div id='display'>{output}</div>
				</div>
				<div id='buttons'>
					<button
						id='clear'
						value='AC'
						className='jumbo'
						onClick={clear}
					>
						AC
					</button>
					<button
						id='divide'
						value='/'
						className='operator'
						onClick={(e) => handleOperators(e)}
					>
						/
					</button>
					<button
						id='multiply'
						value='*'
						className='operator'
						onClick={(e) => handleOperators(e)}
					>
						X
					</button>
					<button
						id='seven'
						value='7'
						onClick={(e) => typeNumbers(e)}
					>
						7
					</button>
					<button
						id='eight'
						value='8'
						onClick={(e) => typeNumbers(e)}
					>
						8
					</button>
					<button
						id='nine'
						value='9'
						onClick={(e) => typeNumbers(e)}
					>
						9
					</button>
					<button
						id='subtract'
						value='-'
						className='operator'
						onClick={(e) => handleOperators(e)}
					>
						-
					</button>
					<button
						id='four'
						value='4'
						onClick={(e) => typeNumbers(e)}
					>
						4
					</button>
					<button
						id='five'
						value='5'
						onClick={(e) => typeNumbers(e)}
					>
						5
					</button>
					<button
						id='six'
						value='6'
						onClick={(e) => typeNumbers(e)}
					>
						6
					</button>
					<button
						id='add'
						value='+'
						className='operator'
						onClick={(e) => handleOperators(e)}
					>
						+
					</button>
					<button
						id='one'
						value='1'
						onClick={(e) => typeNumbers(e)}
					>
						1
					</button>
					<button
						id='two'
						value='2'
						onClick={(e) => typeNumbers(e)}
					>
						2
					</button>
					<button
						id='three'
						value='3'
						onClick={(e) => typeNumbers(e)}
					>
						3
					</button>
					<button
						id='zero'
						value='0'
						className='jumbo'
						onClick={(e) => typeNumbers(e)}
					>
						0
					</button>
					<button
						id='decimal'
						value='.'
						className='operator'
						onClick={addDecimal}
					>
						.
					</button>
					<button
						id='equals'
						value='='
						onClick={evaluate}
					>
						=
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
