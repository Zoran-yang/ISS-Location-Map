import PeopleInSpaceFile from "../component/PeopleInSpaceFile"
import Map from "../component/Map"
import "tachyons"


function App(){
    return (
        <div>
            <header class="tc ph4">
            <h1 class="f3 f2-m f1-l fw2 black-90 mv3" id="SSI">
            ISS Info.
            </h1>
            <h2 class="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
            International Space Station(SSI) Position In Sky
            </h2>
            </header>            
            <Map />
            <header class="tc ph4">
            <h1 class="f3 f2-m f1-l fw2 black-90 mv3" id="Astronaut">
            Astronaut Info.
            </h1>
            <h2 class="f5 f4-m f3-l fw2 black-50 mt0 lh-copy">
            For people in space right now
            </h2>
            </header>     
            <PeopleInSpaceFile />
        </div>
    )
}


export default App;