import PeopleInSpaceFile from "../component/PeopleInSpaceFile"
import Map from "../component/Map"
import "tachyons"


function App(){
    return (
        <div>
            <h2 className ="tc f2" id="SSI">ISS Info.</h2>
            <h2 className ="tc f3" >International Space Station(SSI) Position In Sky</h2>
            <Map />
            <h2 className ="tc f2" id="Astronaut">Astronaut Info.</h2>
            <h2 className ="tc f3" >For people in space right now</h2>
            <PeopleInSpaceFile />
        </div>
    )
}


export default App;