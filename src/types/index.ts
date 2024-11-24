export enum Direction {
  WEST = "west",
  EAST = "east",
  NORTH = "north",
  SOUTH = "south",
}

export type YabaiWindow = {
  id: number;
  pid: number;
  app: string;
  title: string;
  scratchpad: string;
  frame: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
  role: string;
  subrole: string;
  rootWindow: boolean;
  display: number;
  space: number;
  level: number;
  subLevel: number;
  layer: string;
  subLayer: string;
  opacity: number;
  splitType: string;
  splitChild: string;
  stackIndex: number;
  canMove: boolean;
  canResize: boolean;
  hasFocus: boolean;
  hasShadow: boolean;
  hasParentZoom: boolean;
  hasFullscreenZoom: boolean;
  hasAxReference: boolean;
  isNativeFullscreen: boolean;
  isVisible: boolean;
  isMinimized: boolean;
  isHidden: boolean;
  isFloating: boolean;
  isSticky: boolean;
  isGrabbed: boolean;
};

export type YabaiSpaceType = "bsp" | "float" | "stack";

export type YabaiSpace = {
  id: number;
  uuid: string;
  index: number;
  label: string;
  type: YabaiSpaceType;
  display: number;
  windows: number[];
  firstWindow: number;
  lastWindow: number;
  hasFocus: boolean;
  isVisible: boolean;
  isNativeFullscreen: boolean;
};

export type ValidationResult = {
  canProceed: boolean;
  message?: string;
}

export type CommandOptions = {
  command: string;
  successMessage: string;
  failureMessage: string;
  requiresWindow?: boolean;
  validate?: () => Promise<ValidationResult>;
}