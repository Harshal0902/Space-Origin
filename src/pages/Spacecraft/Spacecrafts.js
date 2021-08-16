import Navbar from "../../components/Navbar/Navbar"
import Fade from "react-reveal/Fade"
import SpaceStation from "../../components/3DModel/SpaceStation"
import Perseverance from "../../components/3DModel/Perseverance"
import DiscoverySpaceShuttle from "../../components/3DModel/DiscoverySpaceShutle"
import Falcon9 from "../../components/3DModel/Falcon9"
import "./Spacecraft.css"

export default function Spacecrafts() {
    return (
        <>
            <Fade top>
                <Navbar />
            </Fade>
        <div className="spacecraft_body">
            <h1 className="spacecraft_title">
                Deep dive into space in your spacecraft
            </h1><br/><br/>
            {/* <h2 className="spacecraft_subtitle">Explore the space with your spacecraft</h2> */}

            <SpaceStation />
            <Perseverance />
            <DiscoverySpaceShuttle />
            <Falcon9 />

        </div>
        </>
    )
}
