import * as React from "react";
import { resolveShorthand } from "@fluentui/react-utilities";
import { SwitchProps, SwitchSlots, SwitchState } from "./Switch.types";
import { useSwitchState } from "./useSwitchState";

/**
 * Array of all shorthand properties listed in SliderShorthandProps
 */
export const sliderShorthandProps: Array<keyof SwitchSlots> = [
  "track",
  "thumbWrapper",
  "thumb",
  "input"
];

/**
 * Given user props, returns state and render function for a Switch.
 */
export const useSwitch = (
  props: SwitchProps,
  ref: React.Ref<HTMLElement>
): SwitchState => {
  const state: SwitchState = {
    ref,
    ...props,
    components: {
      input: "input"
    },
    track: resolveShorthand(props.track),
    thumbWrapper: resolveShorthand(props.thumbWrapper),
    thumb: resolveShorthand(props.thumb),
    input: resolveShorthand(props.input)
  };

  useSwitchState(state);

  return state;
};
