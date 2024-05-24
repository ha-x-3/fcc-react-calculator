import './App.css'

function App() {

  return (
		<div id='app'>
			<h1>React Calculator</h1>
			<div id='calculator'>
				<div id='display'>
          <div id='display-line'></div>
          <div id='input-line'></div>
        </div>
				<div id='buttons'>
					<button
						id='clear'
						value='AC'
						className='jumbo'
					>
						AC
					</button>
					<button
						id='divide'
						value='/'
						className='operator'
					>
						/
					</button>
					<button
						id='multiply'
						value='x'
						className='operator'
					>
						X
					</button>
					<button
						id='seven'
						value='7'
					>
						7
					</button>
					<button
						id='eight'
						value='8'
					>
						8
					</button>
					<button
						id='nine'
						value='9'
					>
						9
					</button>
					<button
						id='subtract'
						value='-'
						className='operator'
					>
						-
					</button>
					<button
						id='four'
						value='4'
					>
						4
					</button>
					<button
						id='five'
						value='5'
					>
						5
					</button>
					<button
						id='six'
						value='6'
					>
						6
					</button>
					<button
						id='add'
						value='+'
						className='operator'
					>
						+
					</button>
					<button
						id='one'
						value='1'
					>
						1
					</button>
					<button
						id='two'
						value='2'
					>
						2
					</button>
					<button
						id='three'
						value='3'
					>
						3
					</button>
					<button
						id='zero'
						value='0'
						className='jumbo'
					>
						0
					</button>
					<button
						id='decimal'
						value='.'
						className='operator'
					>
						.
					</button>
					<button
						id='equals'
						value='='
					>
						=
					</button>
				</div>
			</div>
		</div>
  );
}

export default App
