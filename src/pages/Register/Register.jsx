import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="bg-light-gray mt-0 py-5">
            <div className="bg-white py-5 md:py-16 md:w-1/2 mx-auto mt-8 rounded">
                <h2 className="text-3xl font-semibold text-center">Register your account</h2>
                <form className="card-body md:w-3/4 lg:w-2/3 mx-auto ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-neutral">Register</button>
                    </div>
                </form>
                <p className="text-center">Do not Have An Account ? <Link className="text-red-600" to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;