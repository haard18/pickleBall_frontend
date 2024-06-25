import React from 'react'

const Register = () => {
    return (
        <>
            <h1 className='text-2xl font-bold my-3 text-center'>Register</h1>
            <div className='flex flex-col w-1/2 mx-auto border-2 p-4'>
                <div className="flex items-center mb-4">
                    <label className="w-1/4 text-right mr-4">Name</label>
                    <input type="text" className="grow input input-bordered" placeholder="Daisy" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-1/4 text-right mr-4">Email</label>
                    <input type="text" className="grow input input-bordered" placeholder="daisy@site.com" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-1/4 text-right mr-4">Phone</label>
                    <input type="text" className="grow input input-bordered" placeholder="123-456-7890" />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-1/4 text-right mr-4">Password</label>
                    <input type="password" className="grow input input-bordered" placeholder="********" />
                </div>
            </div>

        </>
    )
}

export default Register
