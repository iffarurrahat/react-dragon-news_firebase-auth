import { Outlet } from "react-router-dom";
import Container from "../ui/Container";

const Root = () => {
    return (
        <div className="font-poppins">
            <Container>
                <Outlet />
            </Container>
        </div>
    );
};

export default Root;