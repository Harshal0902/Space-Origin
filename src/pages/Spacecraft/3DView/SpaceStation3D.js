import Navbar from "../../../components/Navbar/Navbar"
import Fade from "react-reveal/Fade"
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/international_space_station_-_iss_-_3d/scene.gltf");

    return (
        <>
            <primitive object={gltf.scene} scale={1.5} />
        </>
    );
};

export default function SpaceStation3D() {

    return (
        <>

            <Fade top>
                <Navbar />
            </Fade>
            <div className="py-8 bg-indigo-900">
                <div className="w-full h-screen px-16 outline-none cursor-pointer lg:block">
                    <Canvas shadows dpr={[1, 2]} >
                        <ambientLight intensity={0.7} />
                        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />
                        <Suspense fallback={null}>
                            <Model />
                            <Environment preset="city" />
                            <ContactShadows rotation-x={Math.PI / 2} position={[0, -0.8, 0]} opacity={0.25} width={10} height={10} blur={1.5} far={0.8} />
                        </Suspense>
                        <OrbitControls autoRotate />
                    </Canvas>
                </div>

                <div className="mt-5 md:mt-0 md:col-span-2 mx-36">
                    <div className="md:flex md:flex-col md:justify-center ">

                        <h2 className="self-center mx-8 mb-4 text-5xl font-medium tracking-wide text-white font-fontVollkorn">International Space Station</h2>

                        <p className="self-center mx-8 sm:text-sm md:text-xl font-medium tracking-wide text-justify text-white font-fontVollkorn">The International Space Station (ISS) is a modular space station (habitable artificial satellite) in low Earth orbit. It is a multinational collaborative project involving five participating space agencies: NASA (United States), Roscosmos (Russia), JAXA (Japan), ESA (Europe), and CSA (Canada). The ownership and use of the space station is established by intergovernmental treaties and agreements. The station serves as a microgravity and space environment research laboratory in which scientific research is conducted in astrobiology, astronomy, meteorology, physics, and other fields. This work is based on "International Space Station - ISS - 3D" (https://sketchfab.com/3d-models/international-space-station-iss-3d-a40e6888dcaa4e0297dd27d29e475151) by arnaudbanner (https://sketchfab.com/arnaudbanner) licensed under CC-BY-ND-4.0 (http://creativecommons.org/licenses/by-nd/4.0/)
                        </p>

                        <p className="self-center mx-8 text-xl tracking-wide text-justify text-white font-fontVollkorn">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                        <div className="grid justify-center grid-cols-1 gap-6 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                            <img className="flex p-6 text-6xl rounded-xl h-72 w-72" src="https://storage.echoar.xyz/wispy-violet-4999/5b70a60a-e496-4c68-a6e7-9f4d1f70bb14" alt="Space Station QR" />
                            <a href="https://go.echoar.xyz/i18a" target="_blank" rel="noreferrer">
                                <button className="h-12 px-8 ml-12 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn lg:mt-36 sm:mt-4 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">View in AR</button>
                            </a>
                        </div>

                    </div>
                </div>


            </div>
        </>
    );
}