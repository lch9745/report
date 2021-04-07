/* eslint-disable */
import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const[Username,setUsername] = useState('');  
  const[Email,setEmail] = useState('');
  const[Nickname,setNickname] = useState('');
  const[Biological_sex,setBiological_sex] = useState('');
  
  const[keyword,setkeyword] = useState('');

  const [UserData, setUserData] = useState([
    {username: 'John', email: 'Johnthyroscope.com', nickname: 'Apple', biological_sex: 'male'},
    {username: 'Sara', email: 'Sarathyroscope.com', nickname: 'Banana', biological_sex: 'female'},
    {username: 'Steve', email: 'Stevethyroscope.com', nickname: 'Orange', biological_sex: 'male'}
  ]);


  const onSubmit = (event) =>{
    event.preventDefault();   
    
    setUserData([
      ...UserData,
      {
        username: Username,
        email: Email,
        nickname: Nickname,
        biological_sex: Biological_sex,
    }])

  };

  const removeUserData = (email) => {
    setUserData(UserData.filter(userdata =>{
      return userdata.email !== email;
    }));
  };




  const renderUserData = UserData.map(UserData => {
    return(
      <div className="UserData" key={UserData.email} removeUserData={removeUserData}>

        <div className="UserData-Username">{UserData.username}</div>
        <div className="UserData-Email">{UserData.email}</div>
        <div className="UserData-Nickname">{UserData.nickname}</div>
        <div className="UserData-Biological_sex">{UserData.biological_sex}</div>
        <div><button onClick={() => removeUserData(UserData.email)}>삭제</button> </div>
      </div>

    );
  });


  return (
    <div className="App">
      <div className="black-nav">
        <div>Add new user</div>
      </div>
      
      <form onSubmit={onSubmit}>
        <label>
          <div className="list">
            Username
          <input 
            type="text"
            name="Username"
            value={Username}
            onChange={e => setUsername(e.target.value)}
          />
            Email
          <input 
            type="text" 
            name="Email"
            value={Email}
            onChange={e => setEmail(e.target.value)}
          />
          </div>          

          <div className="list">
            Nickname
          <input 
            type="text" 
            name="Nickname" 
            value={Nickname}
            onChange={e => setNickname(e.target.value)}
          />
            sex
          <input 
            type="text" 
            name="Biological_sex"
            value={Biological_sex} 
            onChange={e => setBiological_sex(e.target.value)}
          />
          </div> 
          <button type = "submit">+add</button>         
        </label>
      </form>  


      <input
        name = "keyword"
        placeholder="Search user name"
        value={keyword}
        onChange={e=>setkeyword(e.target.value)}
      /> 


      {renderUserData}


      

    </div>
  );
}

export default App;
