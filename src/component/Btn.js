import React from 'react';
import styles from '../css/Btn.module.css';

function Btn({name,email,password,checkPassword,text}) {
	const disable = !(name&&email&&password&&checkPassword);
	return(
		<div className={disable?styles.disable:styles.able}>{text}</div>
	)
}
export default Btn;