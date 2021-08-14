import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Model = () => {
    const gltf = useLoader(GLTFLoader, "/earth/scene.gltf");
    return (
        <>
            <primitive object={gltf.scene} scale={0.012} />
        </>
    );
};

export default function Earth() {

    return (
        <>
            <div>

                <div>

                    <div style={{height: "700px", padding: "50px"}}>
                        <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 50 }}>
                            <Suspense fallback={null}>
                                <Model />
                                <OrbitControls autoRotate />
                                <ContactShadows rotation-x={Math.PI / 2} position={[0, 1.8, 0]} opacity={0.25} width={50} height={50} blur={1} far={0.8} />
                                <Environment preset="sunset" />
                            </Suspense>
                        </Canvas>
                    </div>

                    {/* <div className="mt-5 md:mt-0 md:col-span-2">
                        <div className="md:flex md:flex-col md:justify-center ">

                            <h2 className="self-center mx-8 mb-4 text-5xl font-medium tracking-wide text-black font-fontVollkorn">Earth</h2>

                            <p className="self-center mx-8 text-xl font-medium tracking-wide text-justify text-black font-fontVollkorn">Earth Desc
                            </p>

                            <p className="self-center mx-8 text-xl tracking-wide text-justify text-black font-fontVollkorn">To view in</p>

                            <div className="grid justify-center grid-cols-1 gap-6 pb-8 mx-8 md:grid-cols-2 lg:grid-cols-2">
                                <img className="flex p-6 text-6xl rounded-xl h-72 w-72" src="https://storage.echoar.xyz/wispy-violet-4999/90a2a92c-b69d-45d4-8935-9ea307faeb05" alt="Earth QR" />
                                <a href="https://go.echoar.xyz/J8oi" target="_blank" rel="noreferrer">
                                    <button className="h-12 px-8 ml-12 text-base font-semibold tracking-wider text-white border rounded-full shadow-sm font-fontVollkorn lg:mt-36 sm:mt-4 bg-red-50 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:shadow-lg">{t('modelViewInAR')}</button>
                                </a>
                            </div>

                        </div>
                    </div> */}

                </div>

            </div>
        </>
    );
}
