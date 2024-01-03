import { useFBO, useGLTF } from "@react-three/drei";
import {
  DoubleSide,
  Group,
  MeshPhysicalMaterial,
  MeshPhysicalMaterialParameters,
  Object3DEventMap,
  TextureLoader,
  Vector2,
} from "three";
import { GLTFResult } from "@/types/threejs";
import { useFrame } from "@react-three/fiber";
import { Ref, forwardRef } from "react";

const MacintoshModel = forwardRef(function MacintoshModel(
  props,
  ref: Ref<Group<Object3DEventMap>>,
) {
  const { nodes, materials } = useGLTF("/assets/models/g3.glb") as GLTFResult;

  const TransmissionBuffer = useFBO();
  useFrame((state) => {
    state.gl.setRenderTarget(TransmissionBuffer);
    state.gl.render(state.scene, state.camera);
    state.gl.setRenderTarget(null);
  });

  const NoiseTexture = new TextureLoader().load("/assets/sprites/noise.jpg");

  const OpaquePlasticMaterial = new MeshPhysicalMaterial({
    color: "white",
    thickness: 1.2,
    roughness: 0.1,
    side: DoubleSide,
  });

  const transparentPlasticParams: Partial<MeshPhysicalMaterialParameters> = {
    transmission: 1,
    thickness: 0.2,
    roughness: 0.3,
    roughnessMap: NoiseTexture,
    clearcoat: 0,
    clearcoatRoughness: 0.5,
    clearcoatNormalScale: new Vector2(0.3),
    side: DoubleSide,
  };

  const ClearPlasticMaterial = new MeshPhysicalMaterial({
    color: "white",
    ...transparentPlasticParams,
  });

  const ColoredPlasticMaterial = new MeshPhysicalMaterial({
    color: "orange",
    ...transparentPlasticParams,
  });

  // const ClearPlasticMaterial = (
  //   <MeshTransmissionMaterial
  //     color={"white"}
  //     transmission={1}
  //     thickness={0.2}
  //     roughness={0.6}
  //     roughnessMap={noiseTexture}
  //     clearcoat={0.5}
  //     clearcoatRoughness={0.1}
  //     clearcoatNormalScale={new Vector2(0.3)}
  //     side={DoubleSide}
  //     distortionScale={0}
  //     temporalDistortion={0}
  //   />
  // );

  // const ColoredPlasticMaterial = (
  //   <MeshTransmissionMaterial
  //     color={"orange"}
  //     transmission={1}
  //     thickness={0.2}
  //     roughness={0.6}
  //     roughnessMap={noiseTexture}
  //     clearcoat={1}
  //     clearcoatRoughness={0.1}
  //     clearcoatNormalScale={new Vector2(0.3)}
  //     side={DoubleSide}
  //     distortionScale={0}
  //     temporalDistortion={0}
  //     samples={3}
  //   />
  // );

  return (
    <group
      ref={ref}
      scale={0.05}
      position={[-0.025, 0, 0]}
      castShadow
      receiveShadow
    >
      <mesh
        geometry={nodes["Back_Panel"].geometry}
        material={ColoredPlasticMaterial}
        castShadow
        receiveShadow
      >
        {/* {ColoredPlasticMaterial} */}
      </mesh>
      <mesh
        geometry={nodes["Handle"].geometry}
        material={ClearPlasticMaterial}
        castShadow
        receiveShadow
      >
        {/* {ClearPlasticMaterial} */}
      </mesh>
      <mesh
        geometry={nodes["Screen"].geometry}
        material={Object.entries(materials).at(3)?.[1]}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes["Front_Panel"].geometry}
        material={OpaquePlasticMaterial}
        castShadow
        receiveShadow
      />
      <mesh
        geometry={nodes["Back_Logo"].geometry}
        material={ColoredPlasticMaterial}
        castShadow
        receiveShadow
      >
        {/* {ColoredPlasticMaterial} */}
      </mesh>
      <mesh
        geometry={nodes["Top_Logo"].geometry}
        material={ColoredPlasticMaterial}
        castShadow
        receiveShadow
      >
        {/* {ColoredPlasticMaterial} */}
      </mesh>
      <mesh
        geometry={nodes["Power_Button"].geometry}
        material={ClearPlasticMaterial}
        castShadow
        receiveShadow
      >
        {/* {ClearPlasticMaterial} */}
      </mesh>
      <mesh
        geometry={nodes["Left_Speaker"].geometry}
        material={ColoredPlasticMaterial}
        castShadow
        receiveShadow
      >
        {/* {ColoredPlasticMaterial} */}
      </mesh>
      <mesh
        geometry={nodes["Right_Speaker"].geometry}
        material={ColoredPlasticMaterial}
        castShadow
        receiveShadow
      >
        {/* {ColoredPlasticMaterial} */}
      </mesh>
      <mesh
        geometry={nodes["Disk_Bay"].geometry}
        material={ClearPlasticMaterial}
        castShadow
        receiveShadow
      >
        {/* {ClearPlasticMaterial} */}
      </mesh>
      <mesh
        geometry={nodes["Stand"].geometry}
        material={ColoredPlasticMaterial}
        castShadow
        receiveShadow
      >
        {/* {ColoredPlasticMaterial} */}
      </mesh>
      <mesh
        geometry={nodes["Bottom_Case"].geometry}
        material={ClearPlasticMaterial}
        castShadow
        receiveShadow
      >
        {/* {ClearPlasticMaterial} */}
      </mesh>
      <mesh
        geometry={nodes["Inside"].geometry}
        material={OpaquePlasticMaterial}
        castShadow
        receiveShadow
      />
    </group>
  );
});

export default MacintoshModel;
