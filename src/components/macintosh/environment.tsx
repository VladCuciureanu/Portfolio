import MacintoshModel from "./model";
import {
  Backdrop,
  Center,
  ContactShadows,
  Environment,
  useScroll,
} from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Group, Object3DEventMap, Vector3 } from "three";
import { useMacintosh, useMacintoshDispatch } from "./context";

const LerpSpeed = 0.025;

const TopLookAtPosition = new Vector3(0, 1.975, -0.1);
const TopCameraPosition = new Vector3(0, 7, -0.45);

const FrontLookAtPosition = new Vector3(0, 0.5, 0.5);
const FrontCameraPosition = new Vector3(0, 2.5, 10);

export default function MacintoshEnvironment() {
  const { showFront, initialized, cameraControlRef } = useMacintosh();
  const dispatch = useMacintoshDispatch();

  const scroll = useScroll();
  const modelRef = useRef<Group<Object3DEventMap>>();

  useFrame(() => {
    // Scroll initialization
    if (!modelRef.current || !cameraControlRef.current) {
      return;
    }

    if (!showFront && scroll.offset > 0) {
      dispatch({ type: "showFront" });
    }

    // Animation
    if (!initialized) {
      if (!showFront) {
        cameraControlRef.current?.setLookAt(
          TopCameraPosition.x,
          TopCameraPosition.y,
          TopCameraPosition.z,
          TopLookAtPosition.x,
          TopLookAtPosition.y,
          TopLookAtPosition.z,
        );
      } else {
        cameraControlRef.current?.lerpLookAt(
          FrontCameraPosition.x,
          FrontCameraPosition.y,
          FrontCameraPosition.z,
          FrontLookAtPosition.x,
          FrontLookAtPosition.y,
          FrontLookAtPosition.z,
          TopCameraPosition.x,
          TopCameraPosition.y,
          TopCameraPosition.z,
          TopLookAtPosition.x,
          TopLookAtPosition.y,
          TopLookAtPosition.z,
          LerpSpeed,
          true,
        );

        if (
          cameraControlRef.current.camera.position.distanceTo(
            FrontCameraPosition,
          ) < 0.9
        ) {
          dispatch({ type: "initialize" });
          cameraControlRef.current.rotateAzimuthTo(0, true);
        }
      }
    }
  });

  return (
    <group position={[0, -0.5, 0]}>
      <Center top>
        <MacintoshModel ref={modelRef as any} />
      </Center>
      <Backdrop
        receiveShadow
        scale={[30, 5, 5]}
        floor={1.5}
        position={[0, 0, -2]}
      >
        <meshPhysicalMaterial roughness={0.75} color="#fff" />
      </Backdrop>
      <Environment preset="sunset" />
      {/* <Grid
        position={[0, -0.01, 0]}
        args={[8, 8]}
        cellSize={1}
        cellThickness={1}
        cellColor={"#fff"}
        sectionSize={3}
        sectionThickness={1.5}
        sectionColor={"#f97316"}
        fadeDistance={50}
        fadeStrength={1}
        infiniteGrid
      /> */}
      {/* <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport
          axisColors={["#9d4b4b", "#2f7f4f", "#3b5b9d"]}
          labelColor="white"
        />
      </GizmoHelper> */}
    </group>
  );
}
