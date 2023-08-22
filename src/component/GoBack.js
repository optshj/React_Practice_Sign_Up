import React from 'react';
import styles from '../css/GoBack.module.css';
import { AiOutlineLeft } from "react-icons/ai";

function GoBack(){
	return (
		<div className={styles.Back}><AiOutlineLeft/></div>
	)
}
export default GoBack;