import { makeStyles, mergeClasses } from "@fluentui/react-make-styles";
import { createFocusIndicatorStyleRule } from "@fluentui/react-tabster";
import { SwitchState } from "./Switch.types";

/**
 * Styles for the root slot
 */
const useRootStyles = makeStyles({
  root: (theme) => ({
    "--slider-thumb-size": "12px",
    position: "relative",
    display: "inline-block",
    width: "40px",
    height: "20px",
    // userSelect: "none",
    overflow: "hidden",
    // touchAction: "none",
    verticalAlign: "bottom"
  }),

  unchecked: (theme) => ({
    ":hover .ms-Switch-thumb": {
      background: "black"
    },

    ":hover .ms-Switch-track": {
      borderColor: "black"
    }
  }),

  checked: (theme) => ({
    ":hover .ms-Switch-track": {
      background: "#005a9e"
    }
  }),

  focusIndictor: createFocusIndicatorStyleRule(
    (theme) => ({
      background: "green"
    }),
    { selector: "focus-within" }
  )
});

/**
 * Styles for the track slot
 */
const useTrackStyles = makeStyles({
  track: (theme) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    borderRadius: "999px"
  }),

  unchecked: (theme) => ({
    border: `1px solid #605e5c`
  }),

  checked: (theme) => ({
    border: "0px",
    background: "#0078d4"
  }),

  disabledUnchecked: (theme) => ({
    border: `1px solid #c8c6c4`
  }),

  disabledChecked: (theme) => ({
    border: "0px",
    background: "#c8c6c4"
  })
});

/**
 * Styles for the thumb wrapper slot
 */
const useThumbWrapperStyles = makeStyles({
  thumbWrapper: (theme) => ({
    position: "absolute",
    left: "calc(var(--slider-thumb-size) * .7)",
    right: "calc(var(--slider-thumb-size) * .7)",
    height: "100%",
    transition:
      "transform .3s cubic-bezier(0.1, 0.9, 0.2, 1), opacity .3s cubic-bezier(0.1, 0.9, 0.2, 1) .05s"
  }),

  unchecked: (theme) => ({
    transform: "translate(0%)"
  }),

  checked: (theme) => ({
    transform: "translate(100%)"
  })
});

/**
 * Styles for the thumb slot
 */
const useThumbStyles = makeStyles({
  thumb: (theme) => ({
    position: "absolute",
    width: "var(--slider-thumb-size)",
    height: "var(--slider-thumb-size)",
    borderRadius: "999px",
    top: "50%",
    transform: "translate(-50%, -50%)"
  }),

  unchecked: (theme) => ({
    background: "#605e5c"
  }),

  checked: (theme) => ({
    background: "white"
  }),

  disabledUnchecked: (theme) => ({
    background: "#c8c6c4"
  }),

  disabledChecked: (theme) => ({
    background: "#f3f2f1"
  })
});

/**
 * Styles for the hidden input slot
 */
const useInputStyle = makeStyles({
  input: {
    opacity: 0,
    width: "100%",
    height: "100%",
    margin: 0
  },

  enabled: {
    cursor: "pointer"
  },

  disabled: {
    cursor: "default"
  }
});

/**
 * Apply styling to the Switch slots based on the state
 */
export const useSwitchStyles = (state: SwitchState): SwitchState => {
  const rootStyles = useRootStyles();
  const trackStyles = useTrackStyles();
  const thumbWrapperStyles = useThumbWrapperStyles();
  const thumbStyles = useThumbStyles();
  const inputStyles = useInputStyle();

  state.className = mergeClasses(
    rootStyles.root,
    !state.disabled &&
      (state.input.checked ? rootStyles.checked : rootStyles.unchecked),
    rootStyles.focusIndictor,
    state.className
  );

  state.track.className = mergeClasses(
    trackStyles.track,
    !state.disabled &&
      (state.input.checked ? trackStyles.checked : trackStyles.unchecked),
    state.disabled &&
      (state.input.checked
        ? trackStyles.disabledChecked
        : trackStyles.disabledUnchecked),
    state.track.className
  );

  state.thumbWrapper.className = mergeClasses(
    thumbWrapperStyles.thumbWrapper,
    !state.disabled &&
      (state.input.checked
        ? thumbWrapperStyles.checked
        : thumbWrapperStyles.unchecked),
    state.thumbWrapper.className
  );

  state.thumb.className = mergeClasses(
    thumbStyles.thumb,
    !state.disabled &&
      (state.input.checked ? thumbStyles.checked : thumbStyles.unchecked),
    state.disabled &&
      (state.input.checked
        ? thumbStyles.disabledChecked
        : thumbStyles.disabledUnchecked),
    state.thumb.className
  );

  state.input.className = mergeClasses(
    inputStyles.input,
    state.disabled ? inputStyles.disabled : inputStyles.enabled,
    state.input.className
  );

  return state;
};
