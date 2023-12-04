import { Helmet } from "react-helmet";
import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import PackageSection from "../../Components/PackagesSection/package";
import Footer from "../../assets/SharedComponents/Footer/Footer";
import Navbar from "../../assets/SharedComponents/NavBar/Navbar";
import RequestSecton from "../../Components/CustomRequest/RequestSecton";

const HomePage = () => {

    return (
        <div>
            <Helmet>
                <title>Assets Management System | Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Banner></Banner>
            <RequestSecton></RequestSecton>
            <About></About>
            <PackageSection></PackageSection>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;