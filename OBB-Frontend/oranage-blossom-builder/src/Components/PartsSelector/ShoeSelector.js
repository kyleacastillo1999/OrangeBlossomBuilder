import { useState } from "react";
import './PartsSelector.css';
/**
 * The ShoeSelector component is currently hard coded and should not be used
 * when deployed. This component needs to dynamically gather and render a list
 * based on a database implementation.
 */
const ShoeSelector = (props) =>{
    
    const [dollShoes, setDollShoes] = useState('Shoes-1');

    const setDollShoesHandler = (event) =>{
        setDollShoes(event.target.alt);
        dollShoeSelectionHandler();
    }

    const dollShoeSelectionHandler = () =>{
        props.callbackDollShoes(dollShoes);
    }
    
    return(
        <div>
            <img className="previewDollBody" src={`DollParts/Shoes/Shoes-1.png`} alt="Shoes-1" onClick={setDollShoesHandler}/>
            <img className="previewDollBody" src={`DollParts/Shoes/Shoes-2.png`} alt="Shoes-2" onClick={setDollShoesHandler}/>
            <img className="previewDollBody" src={`DollParts/Shoes/Shoes-3.png`} alt="Shoes-3" onClick={setDollShoesHandler}/>
        </div>
    );
}

export default ShoeSelector;