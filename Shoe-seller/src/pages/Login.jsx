import React, { useState } from 'react'

const Login = () => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
  return (
    <div>
        <section>
            <input type="text"
             placeholder='Enter you email'
             value={() =>setemail(e.target.value)}
                className='border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 '
             />
             <input type="password"
             placeholder='password'
             value={() =>setpassword(e.target.value)} 
             className=''
             />
        </section>
    </div>
  )
}

export default Login