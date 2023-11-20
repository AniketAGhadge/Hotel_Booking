import { Link } from "react-router-dom";


export default function LoginPage() {
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-60">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form className="max-w-md mx-auto">
                    <input type="email" placeholder="aniket@gmail.com" />
                    <input type="password" placeholder="Aniket@123" />
                    <button className="primary">Login</button>
                    <div className="text-center py-2"> Dont have accout yet? <Link className="underline text-black" to={"/register"}>Register Now</Link> </div>
                </form>
            </div>
        </div>
    )
}