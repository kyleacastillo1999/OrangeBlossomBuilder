

const dollBodyPath = "DollParts/Body/Dollies";
const bodies = [
    {id: 1, title: "Doll Body 1", source:`${dollBodyPath}-1.png`},
    {id: 2, title: "Doll Body 2", source:`${dollBodyPath}-2.png`},
    {id: 3, title: "Doll Body 3", source:`${dollBodyPath}-3.png`},
    {id: 4, title: "Doll Body 4", source:`${dollBodyPath}-4.png`},
    {id: 5, title: "Doll Body 5", source:`${dollBodyPath}-5.png`},
    {id: 6, title: "Doll Body 6", source:`${dollBodyPath}-6.png`},
    {id: 7, title: "Doll Body 7", source:`${dollBodyPath}-7.png`},
    {id: 8, title: "Doll Body 8", source:`${dollBodyPath}-8.png`},
];

const BodyList = () =>{
    return(
        <div>
            <ul>
                {bodies.map(doll =>
                    <img src={doll.source} alt={doll.title} />)}
            </ul>
        </div>
    );
}

export default BodyList;