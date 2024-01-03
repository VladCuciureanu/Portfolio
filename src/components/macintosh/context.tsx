import CameraControls from "camera-controls";
import {
  Dispatch,
  MutableRefObject,
  ReactNode,
  createContext,
  useContext,
  useReducer,
} from "react";

type ContextStructure = {
  showFront: boolean;
  initialized: boolean;
  cameraControlRef: MutableRefObject<CameraControls | null>;
};

type ReducerAction = {
  type: "showFront" | "initialize";
};

const MacintoshContext = createContext<ContextStructure>(null as any);

const MacintoshDispatchContext = createContext<Dispatch<ReducerAction>>(
  null as any,
);

export function MacintoshProvider({
  children,
  cameraControlRef,
}: {
  children: ReactNode;
  cameraControlRef: MutableRefObject<CameraControls | null>;
}) {
  const [values, dispatch] = useReducer(MacintoshReducer, InitialValues);

  return (
    <MacintoshContext.Provider value={{ ...values, cameraControlRef }}>
      <MacintoshDispatchContext.Provider value={dispatch}>
        {children}
      </MacintoshDispatchContext.Provider>
    </MacintoshContext.Provider>
  );
}

function MacintoshReducer(
  values: ContextStructure,
  action: ReducerAction,
): ContextStructure {
  switch (action.type) {
    case "showFront": {
      return { ...values, showFront: true };
    }
    case "initialize": {
      return { ...values, initialized: true };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

export function useMacintosh() {
  return useContext(MacintoshContext);
}

export function useMacintoshDispatch() {
  return useContext(MacintoshDispatchContext);
}

const InitialValues: ContextStructure = {
  showFront: false,
  initialized: false,
  cameraControlRef: null as any,
};
