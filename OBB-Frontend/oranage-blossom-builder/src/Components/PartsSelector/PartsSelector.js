import {useState} from 'react';
import BodySelector from './BodySelector';
import OutfitSelector from './OutfitSelector';
import ShoeSelector from './ShoeSelector';
import './PartsSelector.css';

/**
 * The parts selector will render the current doll that is being edited and has child components
 * that handle the selection of outfits, body types, and shoes.
 * 
 * In the current version all parts are gathered from the public folder but this will be changed to use
 * a backend in future implementations of this project.
 * @author Kyle Castillo
 */
const PartsSelector = () =>{

    /********************************************************************
     * DOLL PARTS
     * 
     * These are the three hooks needed to render the doll onto the page.
     * Currently the hooks contain a string state that modifies an image
     * tag on the page.
     *******************************************************************/
    const [selectedDollBody, setDollBody] = useState('Dollies-1');
    const [selectedDollShoes, setDollShoes] = useState('Shoes-1');
    const [selectedDollOutfit, setDollOutfit] = useState('Outfit-1');

    /**
     * setDollBodyHandler is a handler function that awaits a callback from a child
     * component to render the new doll part to the page. 
     */
    const setDollBodyHandler = (event) =>{
        setDollBody(event);
    }

    /**
     * setDollOutfitHandler is a handler function that awaits a callback from a child
     * component to render the new doll part to the page. 
     */
    const setDollOutfitHandler = (event) =>{
        setDollOutfit(event);
    }

    /**
     * setDollShoesHandler is a handler function that awaits a callback from a child
     * component to render the new doll part to the page. 
     */
    const setDollShoesHandler = (event) =>{
        setDollShoes(event);
    }

    return(
        <div>
            <div className="buildContainer">
                <img className="dollBody" src={`DollParts/Body/${selectedDollBody}.png`} alt="Doll body" />
                <img className="dollShoes" src={`DollParts/Shoes/${selectedDollShoes}.png`} alt="Doll shoes" />
                <img className="dollOutfit" src={`DollParts/Outfit/${selectedDollOutfit}.png`} alt="Doll outfit" />
            </div>
            <BodySelector callbackDollBody={setDollBodyHandler} />
            <OutfitSelector callbackDollOutfit={setDollOutfitHandler} />
            <ShoeSelector callbackDollShoes={setDollShoesHandler} />
        </div>
    );
}

export default PartsSelector;