import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/falcon_9_-_spacex/scene.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={0.00055} />
        </>
    );
};

export default function Falcon9() {

    return (
        <>
            <div className="py-8">

                <div className="md:grid md:grid-cols-3 lg:mx-20 sm:mx-4">

                    <div className="w-full h-full px-4 outline-none cursor-pointer md:col-span-1 lg:block">
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

                    <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="md:flex md:flex-col md:justify-center ">

                            <h2 className="self-center mx-8 mb-4 text-5xl font-medium tracking-wide text-white font-fontVollkorn">SpaceX Falcon 9</h2>

                            <p className="self-center mx-8 sm:text-sm md:text-xl font-medium tracking-wide text-justify text-white font-fontVollkorn">Falcon 9 is a partially reusable two-stage-to-orbit medium-lift launch vehicle designed and manufactured by SpaceX in the United States. Both the first and second stages are powered by SpaceX Merlin engines, using cryogenic liquid oxygen and rocket-grade kerosene (RP-1) as propellants. Its name is derived from the fictional Star Wars spacecraft, the Millennium Falcon, and the nine Merlin engines of the rocket's first stage. The rocket evolved with versions v1.0 (2010–2013), v1.1 (2013–2016), v1.2 "Full Thrust" (2015–present), including the Block 5 Full Thrust variant, flying since May 2018.
                            </p>

                            <p className="self-center mx-8 text-xl tracking-wide text-justify text-white font-fontVollkorn">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                            <div className="grid justify-center grid-cols-1 gap-6 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                                <img className="flex p-6 text-6xl rounded-xl h-72 w-72" src="https://storage.echoar.xyz/wispy-violet-4999/78e7d09c-3274-451e-bf51-2871d7f15434" alt="Space Station QR" />
                                <a href="https://go.echoar.xyz/T6nR" target="_blank" rel="noreferrer">
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