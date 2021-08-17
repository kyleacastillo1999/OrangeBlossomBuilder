import BodySelector from "./BodySelector";
import './PartsSelector.css';

/**
 * Renders the components necessary to build the image of a doll
 */
const PartsSelector = () =>{

    return(
        <div>
            <div className="buildContainer">
                <img className="dollBody" src="DollParts/Body/Dollies-1.png" alt="Doll Body 1" />
                <img className="dollShoes" src="DollParts/Shoes/shoes1.png" alt="Doll shoes 1" />
                <img className="dollOutfit" src="DollParts/Outfit/outfit2.png" alt="Doll outfit 1" />
            </div>
        </div>
    );
}

export default PartsSelector;