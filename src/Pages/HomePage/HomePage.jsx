import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import PackageSection from "../../Components/PackagesSection/package";
import Footer from "../../assets/SharedComponents/Footer/Footer";
import Navbar from "../../assets/SharedComponents/NavBar/Navbar";

const HomePage = () => {
  
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <PackageSection></PackageSection>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;