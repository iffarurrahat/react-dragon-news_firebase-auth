import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const News = () => {

    const { id } = useParams();
    // console.log(typeof id);

    const news = useLoaderData();
    // console.log(news);

    // const newsDetails = news.find(data => data.id === id)
    // console.log(newsDetails);

    return (
        <div className="max-w-screen-xl mx-auto">
            <Header></Header>
            <div className="grid grid-cols-4 gap-6 mt-3 md:mt-6 lg:mt-12">
                <div className="col-span-3">
                    {/* <img className="w-full" src={image_url} alt="" />
                    <p className="text-xl font-bold my-5">{title}</p>
                    <p>{details}</p> */}
                </div>
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default News;