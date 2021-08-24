import { useState } from "react";
import './PartsSelector.css';

/**
 * The OutfitSelector component is currently hard coded and should not be used
 * when deployed. This component needs to dynamically gather and render a list
 * based on a database implementation.
 */
const OutfitSelector = (props) =>{

    const [dollOutfit, setDollOutfit] = useState('Outfit-1');

    const setDollOutfitHandler = (event) =>{
        setDollOutfit(event.target.alt);
        dollOutfitSelectionHandler();
    }

    const dollOutfitSelectionHandler = () =>{
        props.callbackDollOutfit(dollOutfit);
    }

    return(
        <div>
            <img className="previewDollBody" src={`DollParts/Outfit/Outfit-1.png`} alt="Outfit-1" onClick={setDollOutfitHandler}/>
            <img className="previewDollBody" src={`DollParts/Outfit/Outfit-2.png`} alt="Outfit-2" onClick={setDollOutfitHandler}/>
        </div>
    );
}

export default OutfitSelector;