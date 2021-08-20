import {useState} from 'react';
import BodySelector from './BodySelector';
import OutfitSelector from './OutfitSelector';
import ShoeSelector from './ShoeSelector';
import './PartsSelector.css';

/**
 * Renders the components necessary to build the image of a doll
 */
const PartsSelector = () =>{

    const [selectedDollBody, setDollBody] = useState('Dollies-1');
    const [selectedDollShoes, setDollShoes] = useState('Shoes-1');
    const [selectedDollOutfit, setDollOutfit] = useState('Outfit-1');

    const setDollBodyHandler = (event) =>{
        setDollBody(event.target.value);
    }

    const setDollOutfitHandler = (event) =>{
        setDollOutfit(event.target.value);
    }

    const setDollShoesHandler = (event) =>{
        setDollShoes(event.target.value);
    }

    return(
        <div>
            <div className="buildContainer">
                <img className="dollBody" src={`DollParts/Body/${selectedDollBody}.png`} alt="Doll Body 1" />
                <img className="dollShoes" src={`DollParts/Shoes/${selectedDollShoes}.png`} alt="Doll shoes 1" />
                <img className="dollOutfit" src={`DollParts/Outfit/${selectedDollOutfit}.png`} alt="Doll outfit 1" />
            </div>
            <BodySelector callbackDollBody={setDollBodyHandler} />
            <OutfitSelector callbackDollOutfit={setDollOutfitHandler} />
            <ShoeSelector callbackDollShoes={setDollShoesHandler} />
        </div>
    );
}

export default PartsSelector;