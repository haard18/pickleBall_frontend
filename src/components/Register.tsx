import axios from 'axios';
import React, { useState } from 'react'
enum Endpoints {
    "signUp",
    "signIn"
}
const Register = () => {
    const [signup, setSignup] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = async (endpoint: Endpoints) => {
        if (endpoint === Endpoints.signUp) {
            try {
                const response = await axios.post('https://pickleball.haardsolanki-itm.workers.dev/api/user/signUp', {
                    name,
                    email,
                    phoneNo: phone,
                    password
                });
                console.log(response.data);
            } catch (error) {
                console.error('Error:', error);
            }
        } else if (endpoint === Endpoints.signIn) {
            try {
                const response = await axios.post('https://pickleball.haardsolanki-itm.workers.dev/api/user/signIn', {
                    phoneNo: phone,
                    password
                });
                if (response.data.message === 'Success') {
                    console.log('Login Success');
                } else {
                    console.log('Login Failed');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <>
            <h1 className='text-2xl font-bold my-3 text-center'>{signup ? "Signup For USA SPORTS" : "Login To USA SPORTS"}</h1>
            <div className='flex flex-col w-1/2 mx-auto border-2 rounded-lg bg-gray-800 p-4'>
                {signup && <><div className="flex items-center mb-4">
                    <label className="w-1/4 mr-4">Name</label>
                    <input type="text" className="grow input input-bordered" placeholder="Daisy" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                    <div className="flex items-center mb-4">
                        <label className="w-1/4 mr-4">Email</label>
                        <input type="email" className="grow input input-bordered" placeholder="daisy@site.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div></>}
                <div className="flex items-center mb-4">
                    <label className="w-1/4 mr-4">Phone</label>
                    <input type="text" className="grow input input-bordered" placeholder="123-456-7890" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-1/4 mr-4">Password</label>
                    <input type="password" className="grow input input-bordered" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='flex justify-center items-center gap-4 flex-col'>
                    <button onClick={() => handleClick(signup ? Endpoints.signUp : Endpoints.signIn)} type='submit' className="btn btn-outline btn-warning">{signup ? "Sign-UP" : "Login"}</button>
                    <p>{signup ? "Already have an Account?" : "Register for an Account"}<span className='mx-2'><button onClick={() => { setSignup(!signup) }}>Login</button></span></p>
                </div>

            </div>

        </>
    )
}

export default Register
