import { Link } from "react-router-dom";


export default function RegisterPage() {
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-60">
                <h1 className="text-4xl text-center mb-4">Register</h1>
                <form className="max-w-md mx-auto">
                    <input type="text" placeholder="Aniket Ghadge" />
                    <input type="email" placeholder="aniket@gmail.com" />
                    <input type="password" placeholder="Aniket@123" />
                    <button className="primary">Register</button>
                    <div className="text-center py-2"> Already have account? <Link className="underline text-black" to={"/login"}>Login</Link> </div>
                </form>
            </div>
        </div>
    )
}