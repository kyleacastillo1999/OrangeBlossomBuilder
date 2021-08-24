import { useState } from 'react';
import './PartsSelector.css';
/**
 * The BodySelector component is currently hard coded and should not be used
 * when deployed. This component needs to dynamically gather and render a list
 * based on a database implementation.
 */
const BodySelector = (props) =>{
    
    const [dollBody, setDollBody] = useState('Dollies-1');
    
    const setDollBodyHandler = (event) =>{
        setDollBody(event.target.alt);
        dollBodySelectionHandler();
    }

    const dollBodySelectionHandler = () =>{
        props.callbackDollBody(dollBody);
    }
    // TO DO either create a compoment or pass a prop as a child component to render the image accordingly.
    return(
       <div>
            <img className="previewDollBody" src={`DollParts/Body/Dollies-1.png`} alt="Dollies-1" onClick={setDollBodyHandler}/>
            <img className="previewDollBody" src={`DollParts/Body/Dollies-2.png`} alt="Dollies-2" onClick={setDollBodyHandler}/>
            <img className="previewDollBody" src={`DollParts/Body/Dollies-3.png`} alt="Dollies-3" onClick={setDollBodyHandler}/>
            <img className="previewDollBody" src={`DollParts/Body/Dollies-4.png`} alt="Dollies-4" onClick={setDollBodyHandler}/>
            <img className="previewDollBody" src={`DollParts/Body/Dollies-5.png`} alt="Dollies-5" onClick={setDollBodyHandler}/>
            <img className="previewDollBody" src={`DollParts/Body/Dollies-6.png`} alt="Dollies-6" onClick={setDollBodyHandler}/>
            <img className="previewDollBody" src={`DollParts/Body/Dollies-7.png`} alt="Dollies-7" onClick={setDollBodyHandler}/>
            <img className="previewDollBody" src={`DollParts/Body/Dollies-8.png`} alt="Dollies-8" onClick={setDollBodyHandler}/>

       </div>
   );
}


export default BodySelector;