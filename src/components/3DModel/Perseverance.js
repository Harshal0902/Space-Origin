import {Link} from "react-router-dom";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/perseverance_-_nasa_mars_landing_2021/scene.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={0.6} />
        </>
    );
};

export default function Perseverance() {


    return (
        <>
            <div className="py-8">

                <div className="md:grid md:grid-cols-3 lg:mx-20 sm:mx-4">

                    <div className="w-full h-full px-4 outline-none cursor-pointer md:col-span-1 lg:block">
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
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

                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="md:flex md:flex-col md:justify-center ">

                            <h2 className="self-center mx-8 mb-4 text-5xl font-medium tracking-wide text-white font-fontVollkorn">Perseverance</h2>

                            <p className="self-center mx-8 text-xl font-medium tracking-wide text-justify text-white font-fontVollkorn">The Mars Perseverance rover mission is part of NASA's Mars Exploration Program, a long-term effort of robotic exploration of the Red Planet. The Mars Perseverance mission addresses high-priority science goals for Mars exploration, including key questions about the potential for life on Mars. The mission takes the next step by not only seeking signs of habitable conditions on Mars in the ancient past, but also searching for signs of past microbial life itself. The Mars Perseverance rover introduces a drill that can collect core samples of the most promising rocks and soils and set them aside in a "cache" on the surface of Mars. This work is based on "Perseverance - NASA Mars Landing 2021" (https://sketchfab.com/3d-models/perseverance-nasa-mars-landing-2021-c1c94e1f69df45eeae4a0a1d0d27e85b) by Thomas Flynn (https://sketchfab.com/nebulousflynn) licensed under CC0-1.0 (http://creativecommons.org/publicdomain/zero/1.0/)
                            </p>

                            <Link to="perseverance">
                                    <button className="px-8 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn py-2 my-10 ml-8 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">Explore More</button>
                                </Link>

                            <p className="self-center mx-8 text-xl tracking-wide text-justify text-white font-fontVollkorn">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                            <div className="grid justify-center grid-cols-1 gap-6 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                                <img className="flex p-6 text-6xl rounded-xl h-72 w-72" src="https://storage.echoar.xyz/wispy-violet-4999/6bca4f75-c15c-4754-8227-e9d027561e4f" alt="Earth QR" />
                                <a href="https://go.echoar.xyz/G6xs" target="_blank" rel="noreferrer">
                                    <button className="h-12 px-8 ml-12 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn lg:mt-36 sm:mt-4 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">View in AR</button>
                                </a>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}