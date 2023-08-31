import React,{ useState } from 'react';
import styles from '../css/SignUp.module.css';
import Btn from './Btn.js';

function SignUp(){
	
	const [name,setName] = useState('');
	const [email,setEmail] = useState('');
	const [password,setPassword] = useState('');
	const [checkPassword,setCheckPassword] = useState('');
	
	const [nameWarn,setNameWarn] = useState('');
	const [emailWarn,setEmailWarn] = useState('');
	const [passwrodWarn,setPasswordWarn] = useState('');
	const [checkPasswordWarn,setCheckpasswordWarn] = useState('');
	
	const [isName,setIsName] = useState(false);
	const [isEmail,setIsEmail] = useState(false);
	const [isPassword,setIsPassword] = useState(false);
	const [isCheckPassword,setIsCheckPassword] = useState(false);
	
	function nameChange(e) {
		setName(e.target.value);
		if (e.target.value.length<2||e.target.value.length>5){
			setNameWarn("2글자 이상 5글자 이하로 해주세요.");
			setIsName(false);
		}
		else{
			setNameWarn("멋진이름이네요.")
			setIsName(true);
		}
	}
	function emailChange(e){
		setEmail(e.target.value);
		const emailRegExp = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
		if (!emailRegExp.test(e.target.value)){
			setEmailWarn("이메일 형식이 올바르지 않아요.");
			setIsEmail(false);
		}
		else {
			setEmailWarn("올바른 이메일이에요.");
			setIsEmail(true);
			
		}
	}
	function passwordChange(e){
		setPassword(e.target.value);
		const passwordRegExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
		if (!passwordRegExp.test(e.target.value)){
			setPasswordWarn("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.");
			setIsPassword(false);
		}
		else{
			setPasswordWarn("안전한 비밀번호에요.")
			setIsPassword(true);
		}
	}
	function checkPasswordChange(e){
		setCheckPassword(e.target.value);
		if (password===e.target.value){
			setCheckpasswordWarn("비밀번호가 같아요.");
			setIsCheckPassword(true);
		}
		else{
			setCheckpasswordWarn("비밀번호가 달라요.");
			setIsCheckPassword(false);
		}
	}
	return(
		<div className={styles.Form}>
			<div className={styles.Sign}>회원가입</div>
			<div className={styles.Box}>
				<div className={styles.Name}>이름</div>
				<input className={styles.Input} placeholder="이름" value={name} onChange={nameChange}/>
				<div className={isName ? styles.Sucess:styles.Fail}>{nameWarn}</div>
			</div>
			<div className={styles.Box}>
				<div className={styles.Name}>이메일</div>
				<input className={styles.Input} placeholder="이메일" value={email} onChange={emailChange}/>
				<div className={isEmail ? styles.Sucess:styles.Fail}>{emailWarn}</div>
			</div>
			<div className={styles.Box}>
				<div className={styles.Name}>비밀번호</div>
				<input className={styles.Input} placeholder="비밀번호" value={password} onChange={passwordChange} type='password'/>
				<div className={isPassword ? styles.Sucess:styles.Fail}>{passwrodWarn}</div>
			</div>
			<div className={styles.Box}>
				<div className={styles.Name}>비밀번호 확인</div>
				<input className={styles.Input} placeholder="비밀번호 확인" value={checkPassword} onChange={checkPasswordChange} type='password'/>
				<div className={isCheckPassword ? styles.Sucess:styles.Fail}>{checkPasswordWarn}</div>
			</div>
			<Btn name={isName} email={isEmail} password={isPassword} checkPassword={isCheckPassword} text='다음'/>
			
		</div>
		
	)
}
export default SignUp;