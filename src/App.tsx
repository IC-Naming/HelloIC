import React from 'react';
import logo from './assets/images/logoic6.png';
function App() {
	return (
		<div id='App'>
			<div className='imgs'>
				<img src={logo} alt="logo" style={{width:318}} />
			</div>
			<h2>Hello ICNaming!</h2>
		</div>
	);
}
export default App;