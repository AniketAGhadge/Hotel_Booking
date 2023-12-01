import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from 'axios';
import { UserContext } from "../UserContext";


export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUser} = useContext(UserContext);

    async function handleLoginSubmit(e) {
        e.preventDefault();
        try {
            const {data} = await axios.post('/login', { email, password }, { withCredentials: true });
            setUser(data);
            alert('Login successful');
            setRedirect(true);
        } catch (e) {
            alert('Login failed');
        }
    }

    if (redirect) {
        return <Navigate to={'/'} />;
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-60">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>
                    <input type="email"
                        placeholder="aniket@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    <input type="password"
                        placeholder="Aniket@123"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}/>
                    <button className="primary">Login</button>
                    <div className="text-center py-2"> Dont have accout yet? <Link className="underline text-black" to={"/register"}>Register Now</Link> </div>
                </form>
            </div>
        </div>
    )
}