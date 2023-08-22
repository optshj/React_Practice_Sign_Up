import React,{useState} from 'react';
import styles from '../css/SignUp.module.css';

function SignUp(){
	const [name,setName] = useState('');
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	const [checkPassword,setCheckPassword] = useState('');
	
	
	return(
		<div className={styles.Form}>
			<div className={styles.Sign}>회원가입</div>
			<div className={styles.Box}>
				<div className={styles.Name}>이름</div>
				<input className={styles.Input} placeholder="이름"/>
			</div>
			<div className={styles.Box}>
				<div className={styles.Name}>이메일</div>
				<input className={styles.Input} placeholder="이메일"/>
			</div>
			<div className={styles.Box}>
				<div className={styles.Name}>비밀번호</div>
				<input className={styles.Input} placeholder="비밀번호"/>
			</div>
			<div className={styles.Box}>
				<div className={styles.Name}>비밀번호 확인</div>
				<input className={styles.Input} placeholder="비밀번호 확인"/>
			</div>
			
			
		</div>
	)
}
export default SignUp;