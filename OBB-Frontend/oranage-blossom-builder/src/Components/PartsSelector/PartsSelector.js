import {useState} from 'react';
import BodySelector from "./BodySelector";
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
            <form>
                <label for="pickDollBody">Choose a body: </label>
                <select name="pickDollBody" onChange={setDollBodyHandler}>
                    <option value="Dollies-1">Doll 1</option>
                    <option value="Dollies-2">Doll 2</option>
                    <option value="Dollies-3">Doll 3</option>
                    <option value="Dollies-4">Doll 4</option>
                    <option value="Dollies-5">Doll 5</option>
                    <option value="Dollies-6">Doll 6</option>
                    <option value="Dollies-7">Doll 7</option>
                </select>
            </form>

            <form>
                <label for="pickDollOutift">Choose an outfit: </label>
                <select name="pickDollOutfit" onChange={setDollOutfitHandler}>
                    <option value="Outfit-1">Outfit 1</option>
                    <option value="Outfit-2">Outfit 2</option>
                </select>
            </form>

            <form>
                <label for="pickDollShoes">Choose shoes: </label>
                <select name="pickDollShoes" onChange={setDollShoesHandler}>
                    <option value="Shoes-1">Shoes 1</option>
                    <option value="Shoes-2">Shoes 2</option>
                    <option value="Shoes-3">Shoes 3</option>
                </select>
            </form>
        </div>
    );
}

export default PartsSelector;