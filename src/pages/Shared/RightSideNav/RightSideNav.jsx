import { useContext } from 'react';
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'
import { FaGoogle, FaGithub, FaFacebookF } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { AuthContext } from '../../../providers/AuthProvider';

const RightSideNav = () => {

    const { signInWithGoogle, signInWithGithub } = useContext(AuthContext);

    // google signIn
    const handleGoogleSingIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.error(error)
            })
    }

    // github signIn
    const handleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className=' h-screen'>
            {/* login with */}
            <div>
                <h4 className="text-xl font-semibold mb-4">Login With</h4>
                <button onClick={handleGoogleSingIn} className="btn w-full font-semibold btn-outline border border-blue-600 text-blue-600 mb-3"><FaGoogle />  Login With Google</button>
                <button onClick={handleGithubSignIn} className="btn w-full font-semibold btn-outline"><FaGithub /> Login With Github</button>
            </div>
            {/* find us on */}
            <div className="mt-7">
                <h4 className="text-xl font-semibold mb-4">Find Us On</h4>
                <a className="flex items-center gap-2 border rounded-t-lg p-4" href="#">
                    <span className='bg-gray-200 p-2 rounded-full'><FaFacebookF className='text-blue-600' /></span>
                    Facebook</a>
                <a className="flex items-center gap-2 border-x p-4" href="#">
                    <span className='bg-gray-200 p-2 rounded-full'>
                        <FaXTwitter />
                    </span>
                    Twitter</a>
                <a className="flex items-center gap-2 border rounded-b-lg p-4" href="#">
                    <span className='bg-gray-200 p-2 rounded-full'>
                        <FaInstagram className='text-orange-600' />
                    </span>
                    Instagram</a>
            </div>
            {/* Q-zone */}
            <div className="bg-light-gray mt-5">
                <h4 className="text-xl font-semibold px-4 mb-2">Q Zone</h4>
                <img className='mx-auto' src={qZone1} alt="" />
                <img className='mx-auto py-5' src={qZone2} alt="" />
                <img className='mx-auto' src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNav;