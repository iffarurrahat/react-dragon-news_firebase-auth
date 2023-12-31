import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useEffect, useState } from "react";

const News = () => {

    const { id } = useParams();
    // console.log(typeof id);

    const news = useLoaderData();
    // console.log(news);

    const [result, setResult] = useState({})
    useEffect(() => {
        const result = news?.find(data => data._id === id);
        setResult(result)
    }, [news, id])
    const { image_url, title, details } = result || {}

    return (
        <div className="max-w-screen-xl mx-auto">
            <Header></Header>
            <div className="grid md:grid-cols-4 gap-6 mt-3 md:mt-6 lg:mt-12">
                <div className="md:col-span-3">
                    <img className="w-full" src={image_url} alt="" />
                    <p className="text-xl font-bold my-5">{title}</p>
                    <p>{details}</p>
                </div>
                <div className="md:col-span-1">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default News;


