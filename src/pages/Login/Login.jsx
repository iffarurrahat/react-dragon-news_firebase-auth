import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email = form.get('email');
        const password = form.get('password')
        // console.log(email, password);
        signInUser(email, password)
            .then(result => {
                console.log(result.user);
                navigate('/')
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="bg-[#F3F3F3] h-screen w-full flex justify-center items-center">
            <div className="bg-white py-5 md:py-16 w-11/12 md:w-1/2 mx-5 md:mx-auto rounded">
                <h2 className="text-2xl md:text-3xl font-semibold text-center">Please Login Here <span className="h-6">&#128516;</span></h2>
                <p className=" border-b-2 mx-auto w-2/3 mt-3"></p>
                <form onSubmit={handleLogin} className="card-body w-full md:w-3/4 lg:w-2/3 mx-auto ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral">Login</button>
                    </div>
                </form>
                <p className="text-center">Do not have an account ? <Link className="text-red-600" to='/register'>Register</Link></p>
            </div>
        </div>
    );
};

export default Login;