import PeopleInSpaceFile from "../component/PeopleInSpaceFile"
import Map from "../component/Map"
import "tachyons"


function App(){
    return (
        <div>
            <h2 className ="tc">SSI Position in Sky</h2>
            <Map />
            <h2 className ="tc">For people in space right now</h2>
            <PeopleInSpaceFile />
        </div>
    )
}


export default App;