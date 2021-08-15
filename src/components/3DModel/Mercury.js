import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/mercury_enhanced_color/scene.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={0.6} />
        </>
    );
};

export default function Mercury() {

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

                            <h2 className="self-center mx-8 mb-4 text-5xl font-medium tracking-wide text-white font-fontVollkorn">Mercury</h2>

                            <p className="self-center mx-8 text-xl font-medium tracking-wide text-justify text-white font-fontVollkorn">Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. It is named after the Roman god Mercurius (Mercury), god of commerce, messenger of the gods, and mediator between gods and mortals, corresponding to the Greek god Hermes (Ἑρμῆς). Like Venus, Mercury orbits the Sun within Earth's orbit as an inferior planet, and its apparent distance from the Sun as viewed from Earth never exceeds 28°. This proximity to the Sun means the planet can only be seen near the western horizon after sunset or the eastern horizon before sunrise, usually in twilight.
                            </p>

                            <p className="self-center mx-8 text-xl tracking-wide text-justify text-white font-fontVollkorn">To view the 3D model in AR, scan the QR code or click on the button below.</p>

                            <div className="grid justify-center grid-cols-1 gap-6 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                                <img className="flex p-6 text-6xl rounded-xl h-72 w-72" src="https://storage.echoar.xyz/wispy-violet-4999/1ed8bbb4-536c-4616-afe9-0dbee6e3432c" alt="Solar System QR" />
                                <a href="https://go.echoar.xyz/3BB2" target="_blank" rel="noreferrer">
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