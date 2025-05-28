import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import signInLottie from '../assets/lotties/signIn.json';
import Lottie from 'lottie-react';
const SignIn = () => {
     
     const {createUser}=use(AuthContext)
    
    
         const handleSignIn=e=>{
            e.preventDefault();
            const form=e.target;
            const email=form.email.value;
            const password=form.password.value;
            console.log({email,password});
    
            createUser(email,password)
            .then(result=>{
              console.log(result.user);
            })
            .catch(error =>{
              console.log(error);
            })
    
         }


    return (
        <div>
               <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
        <Lottie animationData={signInLottie} loop={true}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handleSignIn} >
        <fieldset className="fieldset">
            <h1 className="text-5xl font-bold">Sign In</h1>
          <label className="label">Email</label>
          <input type="email" className="input" name='email' placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" name='password' placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign In</button>
        </fieldset>
        </form>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default SignIn;