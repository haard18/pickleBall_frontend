import React, { useState } from 'react'

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    return (
        <>
            <h1 className='text-2xl font-bold my-3 text-center'>Register</h1>
            <div className='flex flex-col w-1/2 mx-auto border-2 rounded-lg bg-gray-800 p-4'>
                <div className="flex items-center mb-4">
                    <label className="w-1/4 mr-4">Name</label>
                    <input type="text" className="grow input input-bordered" placeholder="Daisy" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-1/4 mr-4">Email</label>
                    <input type="text" className="grow input input-bordered" placeholder="daisy@site.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-1/4 mr-4">Phone</label>
                    <input type="text" className="grow input input-bordered" placeholder="123-456-7890" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-1/4 mr-4">Password</label>
                    <input type="password" className="grow input input-bordered" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='flex justify-center items-center gap-4 flex-col'>
                    <button type='submit' className="btn btn-outline btn-warning">Submit</button>
                    <p>Already an Account? Login</p>
                </div>

            </div>

        </>
    )
}

export default Register
