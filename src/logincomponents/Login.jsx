import React, { useState } from 'react';

function Login() {
    // todo: 將其他useState放成物件管理
    const [data, setData] = useState({});

    const [userName, setUserName] = React.useState('')
    const [secret,setSecret] = React.useState('')
    const [realName, setRealName] = React.useState('')
    const [mail, setMail] = React.useState('')

    const [homepage, setHomepage] = useState(false);
    const [registerpage, setRegisterpage] =useState(false);
    
    
    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:8080/user/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: userName,
            secret: secret,
            realName: realName,
            mail: mail,
          }),
        });

        const data = await response.json();
        if (data.returnCode === 200) {
            setHomepage(true);
        }
    }

    const handleRegistration = async (e) => {
        e.preventDefault();
        
        const response = await fetch("http://localhost:8080/user/createUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userName: userName,
            secret: secret,
            realName: realName,
            mail: mail,
          }),
        });

        const data = await response.json();
        if (data.returnCode === 200) {
            setRegisterpage(true);
        }
    }
    if (registerpage === true) {
        return <div>註冊成功</div>
     }

    if (homepage) {
        return <div>登入成功</div>
    }
    
  return (
    <>
      <form >
        <label htmlFor="userName">帳號</label>
        <br />
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          id="userName"
        />
        <br />
        <label htmlFor="secret">密碼</label>
        <br />
        <input
          type="password"
          value={secret}
                  onChange={(e) => setSecret(e.target.value)}
                  id='secret'
        />
        <br />
        <label htmlFor="realName">姓名</label>
        <br />
        <input
          type="text"
          value={realName}
                onChange={(e) => setRealName(e.target.value)}
                id='realName'
        /><br/>
        <label htmlFor="mail">信箱</label>
        <br />
        <input
          type="text"
          value={mail}
                  onChange={(e) => setMail(e.target.value)}
                  id='mail'
        />
        <br />
        <input type="submit" value="登入" onClick={handleLogin} />

        <input type="submit" value="註冊" onClick={handleRegistration} />
      </form>
    </>
  );
}

export default Login
