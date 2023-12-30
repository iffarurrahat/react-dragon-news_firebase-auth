import moment from 'moment';
import logo from '../../../assets/logo.png'
// import { useEffect, useState } from 'react';
import BreakingNews from '../../Home/BreakingNews';


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
            <img className='my-4 mx-auto' src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
            <p className="text-xl mb-3">{moment().format("dddd, MMMM D, YYYY")}</p>
            {/* <p className="text-xl">{currentDateTime.format('dddd, MMMM D, YYYY, h:mm:ss A')}</p> */}
            <BreakingNews />
        </div>
    );
};

export default Header;