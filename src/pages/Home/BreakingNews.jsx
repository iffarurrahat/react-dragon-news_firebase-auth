import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex items-center bg-[#F3F3F3] p-3 mb-5">
            <button className="bg-[#D72050] text-white py-2 px-6">Latest</button>
            <Marquee pauseOnHover={true}>
               <Link to="/"> Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain as...</Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;