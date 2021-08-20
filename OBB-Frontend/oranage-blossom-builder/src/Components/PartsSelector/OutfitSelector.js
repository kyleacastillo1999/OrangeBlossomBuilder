
/**
 * The OutfitSelector component is currently hard coded and should not be used
 * when deployed. This component needs to dynamically gather and render a list
 * based on a database implementation.
 */
const OutfitSelector = (props) =>{

    return(
        <div>
        <form>
            <label for="pickDollOutift">Choose an outfit: </label>
                <select name="pickDollOutfit" onChange={props.callbackDollOutfit}>
                    <option value="Outfit-1">Outfit 1</option>
                    <option value="Outfit-2">Outfit 2</option>
                </select>
        </form>
        </div>
    );
}

export default OutfitSelector;