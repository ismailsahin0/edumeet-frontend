import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { useEffect, useState } from 'react';
import ListOfTodo from './components/ListOfTodo'

function App() {
  const [auth,setAuth] =  useState(false || window.localStorage.getItem('auth') === 'true');
  const [token,setToken] = useState('');

useEffect(()=>{
  firebase.auth().onAuthStateChanged((userCred)=>{
    if(userCred){
      console.log("userCred");
      console.log(userCred);
      setAuth(true);
      window.localStorage.setItem('auth','true');
      userCred.getIdToken().then((token)=>{
        setToken(token);
      })
    }
  });
},[]);

const signinWithEmail = ()=>{
  firebase
    .auth()
    .signInWithEmailAndPassword("sahinismail0618@gmail.com","ismail12345")
    .then((resp)=>{
      console.log("login is done")
    }).catch((error)=>{
      console.log(error);
    })
}

const signOut = ()=>{
  firebase
    .auth()
    .signOut()
    .then((resp)=>{
      console.log("signout is done");
      setAuth(false);
      window.localStorage.setItem('auth','false');
      setToken('');
    }).catch((error)=>{
      console.log(error);
    })
}

  const loginWithGoogle = ()=>{
    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((userCred)=>{
        if(userCred){
          setAuth(true);
          window.localStorage.setItem('auth','true');
        }
      })
  }

  const updatePassword = () => {
    console.log("currentuser",firebase.auth().currentUser);
  }
  return (
    <div className="App">
      {auth ? (
        <ListOfTodo token={token}/>
      ): (
        <button onClick={loginWithGoogle}>Login With Google</button>
      )}
      <button onClick={signinWithEmail}>Sign In With Email</button>
      <button onClick={signOut}>Sign Out</button>
      <button onClick={updatePassword}>updatePassword</button>
      
    </div>
  );
}

export default App;
