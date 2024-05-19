import * as THREE from 'three'
import useRefs from "react-use-refs";
import { useFrame } from '@react-three/fiber'
import { GLTF } from 'three-stdlib'
import { useGLTF, Text, MeshTransmissionMaterial } from "@react-three/drei";

type GLTFResult = GLTF & {
    nodes: {
        Cylinder002: THREE.Mesh,
        Cylinder003: THREE.Mesh,
        Cylinder004: THREE.Mesh,
        Cylinder005: THREE.Mesh,
        Cylinder010: THREE.Mesh,
        Cylinder011: THREE.Mesh,
    }
    materials: {}
//    animations: GLTFAction[]
}

type ContextType = Record<string, React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>>

export default function Render(props: JSX.IntrinsicElements['group']) {
    const { nodes } = useGLTF('./circles-profile/public/circles.glb') as GLTFResult
    const [ circle1, circle2, circle3, circle4, circle5, circle6 ] = useRefs<any>();
    
    useFrame(() => {
        circle1.current.rotation.x += 0.02
        circle2.current.rotation.x -= 0.01
        circle2.current.rotation.y -= 0.03
        circle2.current.rotation.z -= 0.001
        circle3.current.rotation.x += 0.03
        circle4.current.rotation.x -= 0.02
        circle4.current.rotation.z -= 0.001
        circle4.current.rotation.y -= 0.02
        circle5.current.rotation.x += 0.01
        circle6.current.rotation.y += 0.04
        circle6.current.rotation.z += 0.01
    })

    const view = {
        thickness: 2.15,
        roughness: 0.2,
        transmission: 1,
        ior: 2.3,
        chromaticAberration: 0.65,
        backside: true,
    }

    return (
        <group {...props} dispose={null}>
            <Text font={'../Switzer-Variable.woff'} position={[0, 0, -1]} fontSize={2.5} letterSpacing={-0.02} color="white">
            {'Hey, it\'s me.'}
            </Text>
            <mesh ref={circle1}
                castShadow
                receiveShadow
                geometry={nodes.Cylinder002.geometry}
                material={nodes.Cylinder002.material}
                position={[-1.566, -0.131, 1.951]}
                rotation={[0.608, -0.238, -0.089]}
                scale={[0.5, 0.015, 0.5]}
                >
                <MeshTransmissionMaterial {...view}/>
            </mesh>
            <mesh ref={circle2}
                castShadow
                receiveShadow
                geometry={nodes.Cylinder003.geometry}
                material={nodes.Cylinder003.material}
                position={[-0.541, 0.022, 0.065]}
                rotation={[0.1, -0.114, -0.099]}
                scale={[1, 0.015, 1]}
                >
                <MeshTransmissionMaterial {...view}/>
            </mesh>
            <mesh ref={circle3}
                castShadow
                receiveShadow
                geometry={nodes.Cylinder004.geometry}
                material={nodes.Cylinder004.material}
                position={[0.048, -0.184, 1.526]}
                rotation={[-0.913, -0.054, -0.367]}
                scale={[0.2, 0.015, 0.2]}
                >
                <MeshTransmissionMaterial {...view}/>
            </mesh>
            <mesh ref={circle4}
                castShadow
                receiveShadow
                geometry={nodes.Cylinder005.geometry}
                material={nodes.Cylinder005.material}
                position={[1.098, -0.732, -0.357]}
                rotation={[-3.004, 0.28, 2.082]}
                scale={[0.8, 0.015, 0.8]}
                >
                <MeshTransmissionMaterial {...view}/>
            </mesh>
            <mesh ref={circle5}
                castShadow
                receiveShadow
                geometry={nodes.Cylinder010.geometry}
                material={nodes.Cylinder010.material}
                position={[1.505, 0.615, 0.491]}
                rotation={[-0.101, -0.711, -0.327]}
                scale={[0.6, 0.015, 0.6]}
                >
                <MeshTransmissionMaterial {...view}/>
            </mesh>
            <mesh ref={circle6}
                castShadow
                receiveShadow
                geometry={nodes.Cylinder011.geometry}
                material={nodes.Cylinder011.material}
                position={[2.264, -0.582, 1.171]}
                rotation={[0.344, 0.059, 0.164]}
                scale={[0.4, 0.015, 0.4]}
            >
                <MeshTransmissionMaterial {...view}/>
            </mesh>
      </group>
    )
}

useGLTF.preload('./circles-profile/public/circles.glb')