import Container from "../../ui/Container";
import BreakingNews from "../Home/BreakingNews";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";

const Career = () => {
    return (
        <div>
            <Container>
                <Header />
                <BreakingNews />
                <Navbar />
                <p className="font-bold my-[25%] text-center">Career content coming...</p>
            </Container>
        </div>
    );
};

export default Career;