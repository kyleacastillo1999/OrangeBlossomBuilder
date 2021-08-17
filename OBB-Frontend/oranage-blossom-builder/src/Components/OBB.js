import PartsSelector from "./PartsSelector/PartsSelector"

/**
 * Primary component for the orange blossom builder. This will render all the necessary information
 * onto the user's screen.
 * 
 * @author Kyle Castillo
 */
const OBB = () => {
    return(
    <div>
      <h1>Orange Blossom Builder</h1>
      <PartsSelector /> 
    </div>
    );
}

export default OBB;