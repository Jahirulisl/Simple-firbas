import { GithubAuthProvider, GoogleAuthProvider,signInWithPopup, signOut } from "firebase/auth";

import auth from "../../firebase/firebase.init";
import { useState } from "react";


const Login = () => {
    const [user,setUser] = useState(null)

    const GoogleProvider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();

    const handleGoogleSignIN = () => {
      signInWithPopup(auth,GoogleProvider)
      .then(result => {
       console.log(result.user);
       setUser(result.user);
    })
    .catch(error => {
        console.log('ERROR',error);
        setUser(null);
    })
    }
     
    const handleGithubSignIn = () =>{
      signInWithPopup(auth,githubprovider)
      .then(result =>{
        console.log(result.user);
        setUser(result.user);
      })
      .catch(error => {
        console.log('ERROR',error);
        setUser(null);
      })
    }

    const handleSignout = () =>{
      signOut(auth) 
      .then(() =>{
        console.log('sign out done')
        setUser(null)
      }) 
      .catch(error => console.log(error))
    }

    //if user exists ? signout:sign in
    return (
         <div>
            {/* <button onClick={handleGoogleSignIN}>Login with google</button>

            <button onClick={handleSignout}>sign out</button> */}
            {
               user ? <button onClick={handleSignout}>sign out</button>:
              <>
                  <button onClick={handleGoogleSignIN}>Login with google</button>

                  <button onClick={handleGithubSignIn}>Login with Github</button>
              </>
            }

            {user && <div>
              <h4> {user.displayName}</h4>
              <p>Email:{user.email}</p>
              <img src={user.photoURL} alt="" />
            </div>
            }
         </div>
    );
};

export default Login;
