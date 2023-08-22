import React from 'react';
import styles from './css/App.module.css';
import LogInForm from './component/LogInForm.js';
import CAHead from './component/CAHead.js';
import SignUp from './component/SignUp.js';

function App(){
	return(
			<LogInForm>
				<CAHead/>
				<SignUp/>
			</LogInForm>
	);
}

export default App;