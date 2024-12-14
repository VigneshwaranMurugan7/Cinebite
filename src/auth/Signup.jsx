import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { toast } from "react-toastify";


Link

const Signup = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSignUp = async(e) =>{
        e.preventDefault();

        try {
            await createUserWithEmailAndPassword(auth, email, password)
            toast.success("Account created succesfully")
            navigate("/")
        } catch (error) {
            toast.error("Please give valid email Id or Password")
        }
    }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4'>
    <h1 className='text-2xl font-semibold mb-6'>Sign Up</h1>
    <form onSubmit={handleSignUp}>
    <div className="mb-4">
        <label className='block text-sm font-medium mb-2'>Email :</label>
        <input type="email" required className='w-full p-2 border-gray-300 rounded-md' value={email} onChange={(e) => setEmail(e.target.value)}/>
    </div>

    <div className="mb-4">
        <label className='block text-sm font-medium mb-2'>Password :</label>
        <input type="password" required className='w-full p-2 border-gray-300 rounded-md' value={password} onChange={(e) => setPassword(e.target.value)}/>
    </div>

    <button type='submit' className='w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700'>
        Sign Up
    </button>
    </form>

    <Link className="mt-5" to="/signin">Already have an account?</Link>
</div>
  )
}

export default Signup