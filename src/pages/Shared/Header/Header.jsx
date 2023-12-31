import moment from 'moment';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
// import { useEffect, useState } from 'react';


const Header = () => {

    // const [currentDateTime, setCurrentDateTime] = useState(moment());

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setCurrentDateTime(moment());
    //     }, 1000); // Update every second

    //     return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    // }, []); // Empty dependency array ensures that the effect runs only once on mount


    return (
        <div className='text-center'>
            <Link to='/'>
                <img className='my-4 mx-auto' src={logo} alt="" />
            </Link>
            <p>Journalism Without Fear or Favour</p>
            <p className="text-xl mb-3">{moment().format("dddd, MMMM D, YYYY")}</p>
            {/* <p className="text-xl">{currentDateTime.format('dddd, MMMM D, YYYY, h:mm:ss A')}</p> */}
        </div>
    );
};

export default Header;