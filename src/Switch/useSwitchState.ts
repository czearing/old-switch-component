import * as React from "react";
import { useControllableState } from "@fluentui/react-utilities";
import { SwitchSlots, SwitchState, SwitchCommon } from "./Switch.types";

export const useSwitchState = (
  state: Pick<
    SwitchState,
    keyof SwitchCommon | keyof SwitchSlots | "as" | "ref"
  >
) => {
  const {
    defaultChecked = false,
    checked,
    disabled = false,
    onChange,
    id
  } = state;

  const [internalValue, setInternalValue] = useControllableState({
    defaultState: defaultChecked,
    state: checked,
    initialState: false
  });

  const onInputChange = React.useCallback(
    (ev: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(ev, { value: ev.target.checked });
      setInternalValue(ev.target.checked);
    },
    [onChange, setInternalValue]
  );

  // Track Props
  state.track.children = null;
  state.track.className = "ms-Switch-track";

  // Thumb Wrapper Props
  state.thumbWrapper.children = null;

  // Thumb Props
  state.thumb.children = null;
  state.thumb.className = "ms-Switch-thumb";

  // Input Props
  state.input.type = "checkbox";
  state.input.onChange = onInputChange;
  state.input.checked = internalValue;
  state.input.disabled = disabled;
  state.input.id = id;
  state.input.children = null;

  return state;
};
