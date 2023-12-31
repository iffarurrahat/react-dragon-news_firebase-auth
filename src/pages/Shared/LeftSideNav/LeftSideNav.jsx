import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdDateRange } from "react-icons/md";

const LeftSideNav = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    const [leftAside, setLeftAside] = useState([]);
    useEffect(() => {
        fetch('leftAsideData.json')
            .then(res => res.json())
            .then(data => setLeftAside(data))
    }, [])

    return (
        <div className="md:h-screen">
            <h4 className="text-xl font-semibold mb-4">All Category</h4>
            <button className="btn w-full text-xl font-semibold"> National News</button>
            <div>
                {
                    categories?.map(category => <Link
                        key={category.id}
                        className="block ml-16 my-5 text-xl font-medium"
                        // to={`/category/${category.id}`}
                    >
                        {category.name}
                    </Link>)
                }
            </div>
            <div className="mt-5">
                {
                    leftAside.map(data => {
                        return (
                            <div key={data.id} className="mb-8">
                                <img className="mx-auto md:mx-0" src={data.image} alt="" />
                                <div className="px-12 md:px-0 md:pr-4">
                                    <h2 className="text-lg font-medium my-2">{data.title}</h2>
                                    <p className="flex justify-between">
                                        <span>Sport</span>
                                        <span className="flex items-center gap-3 "><MdDateRange /> {data.date}</span>
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default LeftSideNav;