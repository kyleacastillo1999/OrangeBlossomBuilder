/**
 * The BodySelector component is currently hard coded and should not be used
 * when deployed. This component needs to dynamically gather and render a list
 * based on a database implementation.
 */
const BodySelector = (props) =>{
   
    return(
       <div>
           <form>
                <label for="pickDollBody">Choose a body: </label>
                <select name="pickDollBody" onChange={props.callbackDollBody}>
                    <option value="Dollies-1">Doll 1</option>
                    <option value="Dollies-2">Doll 2</option>
                    <option value="Dollies-3">Doll 3</option>
                    <option value="Dollies-4">Doll 4</option>
                    <option value="Dollies-5">Doll 5</option>
                    <option value="Dollies-6">Doll 6</option>
                    <option value="Dollies-7">Doll 7</option>
                </select>
            </form>
       </div>
   );
}


export default BodySelector;