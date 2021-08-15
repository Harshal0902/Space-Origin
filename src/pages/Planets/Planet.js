import Navbar from "../../components/Navbar/Navbar"
import Fade from "react-reveal/Fade"
import SolarSystem from "../../components/3DModel/SolarSystem"
import Mercury from "../../components/3DModel/Mercury"
import Venus from "../../components/3DModel/Venus"
import Earth from "../../components/3DModel/Earth"
import Mars from "../../components/3DModel/Mars"
import Jupiter from "../../components/3DModel/Jupiter"
import Saturn from "../../components/3DModel/Saturn"
import Uranus from "../../components/3DModel/Uranus"
import Neptune from "../../components/3DModel/Neptune"
export default function Planet() {
    return (
        <>
            <Fade top>
                <Navbar />
            </Fade>
            <div className="spacecraft_body">
                <h1 className="spacecraft_title">
                    Explore the Space
                </h1>

                <SolarSystem />
                <Mercury />
                <Venus />
                <Earth />
                <Mars />
                <Jupiter />
                <Saturn />
                <Uranus />
                <Neptune />

            </div>
        </>
    )
}
