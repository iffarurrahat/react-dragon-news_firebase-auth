import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useLoaderData } from "react-router-dom";
import NewCard from "./NewCard";

const Home = () => {

    const news = useLoaderData();
    console.log(news);

    return (
        <div>
            <Header />
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideNav />
                </div>
                <div className="md:col-span-2">
                    {

                        news.map(aNews => <NewCard
                            key={aNews.id}
                            news={aNews}
                        ></NewCard>)
                    }
                </div>
                <div>
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;