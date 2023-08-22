import React from 'react';
import styles from '../css/CAHead.module.css';
import GoBack from './GoBack.js'
function CAHead(){
	return(
		<div className = {styles.CAH}>
			<GoBack/>
		</div>
		
	)
}

export default CAHead;