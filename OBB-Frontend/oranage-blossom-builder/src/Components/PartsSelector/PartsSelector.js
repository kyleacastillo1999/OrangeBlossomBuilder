import {ImageBackground, Image, View} from "react-native";
import './PartsSelector.css';

/**
 * Renders the components necessary to build the image of a doll
 */
const PartsSelector = () =>{
    
    return(
        <div className="buildContainer">
            <img className="dollBody" src="DollParts/Body/dollies1.png" alt="Doll Body 1" />
            <img className="dollShoes" src="DollParts/Shoes/shoes1.png" alt="Doll shoes 1" />
            <img className="dollOutfit" src="DollParts/Outfit/outfit2.png" alt="Doll outfit 1" />
        </div>
    );
}

export default PartsSelector;