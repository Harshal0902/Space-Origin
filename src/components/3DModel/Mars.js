import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/mars/scene.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={0.01} />
        </>
    );
};

export default function Mars() {

    return (
        <>
            <div className="py-8">

                <div className="md:grid md:grid-cols-3 lg:mx-20 sm:mx-4">

                    <div className="w-full h-full px-4 outline-none cursor-pointer md:col-span-1 lg:block">
                        {/* <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <Suspense fallback={null}>
                                <Model />
                                <ContactShadows rotation-x={Math.PI / 2} position={[0, 1.8, 0]} opacity={0.25} width={50} height={50} blur={1} far={0.8} />
                                <Environment preset="sunset" />
                                </Suspense>
                            </Canvas> */}
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

                            <h2 className="self-center mx-8 mb-4 text-5xl font-medium tracking-wide text-white font-fontVollkorn">Mars</h2>

                            <p className="self-center mx-8 text-xl font-medium tracking-wide text-justify text-white font-fontVollkorn">Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet". The latter refers to the effect of the iron oxide prevalent on Mars's surface, which gives it a reddish appearance distinctive among the astronomical bodies visible to the naked eye. Mars is a terrestrial planet with a thin atmosphere, with surface features reminiscent of the impact craters of the Moon and the valleys, deserts and polar ice caps of Earth.
                            </p>

                            <p className="self-center mx-8 text-xl tracking-wide text-justify text-white font-fontVollkorn">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                            <div className="grid justify-center grid-cols-1 gap-6 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                                <img className="flex p-6 text-6xl rounded-xl h-72 w-72" src="https://storage.echoar.xyz/wispy-violet-4999/633d6a9c-73d8-4207-ada6-61dc04cfebe3" alt="Solar System QR" />
                                <a href="https://go.echoar.xyz/rQke" target="_blank" rel="noreferrer">
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