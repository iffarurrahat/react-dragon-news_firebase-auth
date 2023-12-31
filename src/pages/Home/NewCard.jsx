import { Link } from "react-router-dom";
import { FaEye, FaRegBookmark } from "react-icons/fa";
import { CiShare2 } from "react-icons/ci";
import Rating from "react-rating";

const NewCard = ({ news }) => {
    const { _id, author, title, image_url, details, rating, total_view } = news || {}
    return (
        <div className="mb-7 border rounded">
            <div className="bg-[#F3F3F3] flex items-center justify-between p-5">
                <div className="flex items-center gap-4">
                    <img className="w-10 h-10 rounded-full" src={author.img} alt="" />
                    <div>
                        <p className="font-semibold">{author?.name || "Not Found"}</p>
                        <p className="text-sm">{author.published_date || "Not Found"}</p>
                    </div>
                </div>
                <p className="text-2xl flex">
                    <span><FaRegBookmark /></span>
                    <span><CiShare2 /></span>
                </p>
            </div>
            <div className="px-5 pt-3">
                <p className="text-xl font-bold mb-5">{title}</p>
                <img className="mb-7" src={image_url} alt="" />
                <p>
                    {
                        details?.length > 200 ?
                            <p>{details.slice(0, 200)} <Link className="text-blue-600" to={`/news/${_id}`}>Read More...</Link></p> :
                            <p>{details}</p>
                    }
                </p>
            </div>
            <hr className="w-[95%] mt-5 mx-auto" />
            <div className="flex justify-between p-5 ">
                {/* Rating  */}
                <p><Rating
                    emptySymbol={<svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                    </svg>}
                    fullSymbol={<svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                        />
                    </svg>}
                    initialRating={rating.number}
                    readonly
                /></p>
                <p className="flex items-center gap-2"><FaEye />{total_view}</p>
            </div>
        </div>
    );
};

export default NewCard;