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
		if (currentValue[0] === '0' && e.target.value === '0') {
			setCurrentValue(currentValue);
		} else {
			if (isEqualsClicked && typeof currentFormula === 'number') {
				setOutput(e.target.value);
				setCurrentValue(e.target.value);
				setCurrentFormula(e.target.value);
				setIsEqualsClicked(false);
			} else if (isEqualsClicked && typeof currentFormula === 'string') {
				setOutput(e.target.value);
				setCurrentValue(e.target.value);
				setCurrentFormula(`${currentFormula}${e.target.value}`);
				setIsEqualsClicked(false);
			} else {
				setOutput(`${currentValue}${e.target.value}`);
				setCurrentValue(`${currentValue}${e.target.value}`);
				setCurrentFormula(`${currentFormula}${e.target.value}`);
				setIsEqualsClicked(false);
			}
		}
	};

	const handleOperators = (e) => {
		let lastChar = currentFormula[currentFormula.length - 1];
		let myRegex = /[+\-*\/]/;

		if (!myRegex.test(lastChar)) {
			setCurrentFormula(`${currentFormula}${e.target.value}`);
			setCurrentValue('');
		} else {
			if (lastChar !== '-' && e.target.value === '-') {
				setCurrentFormula(`${currentFormula}${e.target.value}`);
			} else if (e.target.value !== '-' && lastChar === '-') {
				setCurrentFormula(currentFormula.slice(0, -2) + e.target.value);
				setCurrentValue('');
			} else {
				setCurrentFormula(currentFormula.slice(0, -1) + e.target.value);
			}
		}
	};

	const addDecimal = (e) => {
		let lastChar = currentFormula[currentFormula.length - 1];
		let myRegex = /[+\-*\/]/;

		if (
			!currentValue.includes('.') &&
			!isEqualsClicked &&
			!myRegex.test(lastChar)
		) {
			setOutput(output + '.');
			setCurrentFormula(currentFormula + '.');
			setCurrentValue(currentValue + '.');
		}
	};

	const evaluate = (e) => {
		if (currentFormula !== '') {
			let result = math.evaluate(currentFormula);
			setOutput(result);
			setCurrentFormula(result);
			setIsEqualsClicked(true);
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
