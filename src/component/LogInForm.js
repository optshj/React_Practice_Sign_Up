import React from 'react';
import styles from '../css/LogInForm.module.css';

function LogInForm({children}){
	return <div className={styles.Form}>{children}</div>;
}
export default LogInForm;