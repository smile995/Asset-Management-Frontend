import { useContext } from "react";
import { ContextAPI } from "../../ContaxtAPI/AuthContext";


const MyAsset = () => {
    const {data}= useContext(ContextAPI)
    return (
        <div>
            my asset page{data.length}
        </div>
    );
};

export default MyAsset;