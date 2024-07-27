import React, {useState, useRef, useEffect } from 'react';
import '../styles/L_S_Styles.css';

 const Login_page = () => {
    const [isLogin, setIsLogin] = useState(true);
    const loginFormRef = useRef(null);
    const loginTextRef = useRef(null);
    const signupBtnRef = useRef(null);

    useEffect(() => {
        const loginText = loginTextRef.current;
        const loginForm = loginFormRef.current;
        const signupBtn = signupBtnRef.current;

        const handleSignupClick = () => {
            loginForm.style.marginLeft = "-50%";
            loginText.style.marginLeft = "-50%";
        };

        const handleLoginClick = () => {
            loginForm.style.marginLeft = "0%";
            loginText.style.marginLeft = "0%";
        };

        const signupLink = document.querySelector("form .signup-link a");
        signupBtn.addEventListener('click', handleSignupClick);
        document.querySelector("label.login").addEventListener('click', handleLoginClick);
        signupLink.addEventListener('click', (event) => {
            event.preventDefault();
            signupBtn.click();
        });

    }, []);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [c_password,setCpassword]=useState('')
    const [email,setEmail]=useState('')

    const handleLoginSubmit=async(e)=>{
        e.preventDefault()
        // console.log(username,password)
        // if(username==='user' && password==='1234'){
        //     window.location.href = '/';
        // }

        try {
            // const response = await fetch('http://localhost/Burgerexpress/Login.php'
            const response = await fetch('http://nishant.infinityfreeapp.com/Burgerexpress/Login.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
        
            const data = await response.json();
            // console.log(data);
            if(data.status==='success'){
                window.location.href = '/';
            }
            
        } 
        catch (error) {
            alert(error.message)
        }

    }

    const handleSignupSubmit=async(e)=>{
        e.preventDefault()
        // console.log(username,email,password,c_password)

        if(password!==c_password){
            alert("Password do not match")
        }
        else{
            try {
                // const response = await fetch('http://localhost/Burgerexpress/Signup.php'
                const response = await fetch('http://nishant.infinityfreeapp.com/Burgerexpress/Signup.php', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ username, email, password })
                });
                const data = await response.json();
                // console.log(data);
                if(data.status==='success'){
                    window.location.href = '/';
                }
            } catch (error) {
                alert(error.message)
            }
        }
    }

    return (
        <div className="login-container">
            <div className="wrapper">
                <div className="title-text">
                    <div className="title login" ref={loginTextRef}>Login Form</div>
                    <div className="title signup">Signup Form</div>
                </div>
                <div className="form-container">
                    <div className="slide-controls">
                        <input type="radio" name="slide" id="login" checked={isLogin} onChange={() => setIsLogin(true)} />
                        <input type="radio" name="slide" id="signup" checked={!isLogin} onChange={() => setIsLogin(false)} />
                        <label htmlFor="login" className="slide login">Login</label>
                        <label htmlFor="signup" className="slide signup" ref={signupBtnRef}>Signup</label>
                        <div className="slider-tab"></div>
                    </div>
                    <div className="form-inner">
                        <form className="login" ref={loginFormRef} onSubmit={handleLoginSubmit} >
                            <div className="field">
                                <input type="text" placeholder="Username (eg -> user)" onChange={(e)=>setUsername(e.target.value)} required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Password (eg -> 1234)" onChange={(e)=>setPassword(e.target.value)} required />
                            </div>
                            <div className="pass-link">
                                <a>Forgot password ?</a>
                            </div>
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Login" />
                            </div>
                            <div className="signup-link">Not a member? 
                                <a href="" style={{marginLeft:'4px'}}>Signup now</a>
                            </div>
                        </form>
                        <form className="signup" onSubmit={handleSignupSubmit}>
                            <div className="field">
                                <input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)} required />
                            </div>
                            <div className="field">
                                <input type="text" placeholder="Email Address" onChange={(e)=>setEmail(e.target.value)} required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} required />
                            </div>
                            <div className="field">
                                <input type="password" placeholder="Confirm password" onChange={(e)=>setCpassword(e.target.value)} required />
                            </div>
                            <div className="field btn">
                                <div className="btn-layer"></div>
                                <input type="submit" value="Signup"  />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login_page;



