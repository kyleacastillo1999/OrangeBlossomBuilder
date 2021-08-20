
const ShoeSelector = (props) =>{
    return(
        <div>
            <form>
                <label for="pickDollShoes">Choose shoes: </label>
                <select name="pickDollShoes" onChange={props.callbackDollShoes}>
                    <option value="Shoes-1">Shoes 1</option>
                    <option value="Shoes-2">Shoes 2</option>
                    <option value="Shoes-3">Shoes 3</option>
                </select>
            </form>
        </div>
    );
}

export default ShoeSelector;