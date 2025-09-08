import Footer2 from "../Components/Footer/Footer2";
import HeaderStyle2 from "../Components/Header/HeaderStyle2";
import Home2 from "../Pages/Home2";
import ContactPage from "../Pages/ContactPage";
import { useLocation } from "react-router-dom";

const Main = () => {
    const location = useLocation();

    let content;
    switch (location.pathname) {
        case "/":
            content = <Home2 />;
            break;
        case "/contact":
            content = <ContactPage />;
            break;
        // Add more cases for other routes as needed
        default:
            content = <Home2 />;
    }

    return (
        <div className="main-page-area body2">
            <HeaderStyle2 />
            {content}
            <Footer2 />
        </div>
    );
};

export default Main;
