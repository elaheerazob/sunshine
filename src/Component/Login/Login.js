import React from 'react';
import { useState } from 'react';

const Login = () => {
    const [account , toggleAccount] =useState('login');

    const toggleSignup = () => {
       account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }
    return (
        <div>
            { account === 'login' ? 

            <div className="flex flex-col  mt-20 mx-auto bg-slate-300 max-w-md p-6 rounded-md sm:p-10 ">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">Login</h1>
            </div>
                <form className="space-y-12 ">
                    <div className="space-y-4">
                        <div>
                            <label for="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email"  placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md"/>
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label for="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline ">Forgot password?</a>
                            </div>
                            <input type="password" name="password"  placeholder="*****" className="w-full px-3 py-2 border rounded-md "/>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="button" className="btn-primary mb-2 w-full px-8 py-3 font-semibold rounded-md ">Sign in</button>
                            <button onClick={() =>toggleSignup()} type="button" className="btn-outline mb-2 w-full px-8 py-3 font-semibold rounded-md ">Don't have an account yet Signup</button>
                        </div>
                        
                    </div>
                </form>
        </div>

        :
            <div className="flex flex-col  mt-20 mx-auto bg-slate-300 max-w-md p-6 rounded-md sm:p-10 ">
            <div className="mb-8 text-center">
                <h1 className="my-3 text-4xl font-bold">SignUp</h1>
            </div>
                <form className="space-y-12 ">
                    <div className="space-y-4">
                        <div>
                            <label for="name" className="block mb-2 text-sm">Your Name</label>
                            <input type="text" name="name"  placeholder="Your Name" className="w-full px-3 py-2 border rounded-md"/>
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email"  placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md"/>
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label for="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline ">Forgot password?</a>
                            </div>
                            <input type="password" name="password"  placeholder="*****" className="w-full px-3 py-2 border rounded-md "/>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="button" className="btn-primary mb-2 w-full px-8 py-3 font-semibold rounded-md ">Sign in</button>
                            <button onClick={() =>toggleSignup()} type="button" className="btn-outline mb-2 w-full px-8 py-3 font-semibold rounded-md ">Already Have an Account Login</button>
                            
                        </div>
                        
                    </div>
                </form>
        </div>
    }
        </div>
    );
};

export default Login;