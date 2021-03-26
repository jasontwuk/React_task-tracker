import { useEffect } from "react";

// *** keycode {number}  - the code of the key to respond to, compared against event.keyCode
// *** action {function}  - the action to perform on key press

const useKeyPress = (keycode, action) => {
  useEffect(() => {
    const onKeydown = (e) => {
      if (e.keyCode === keycode) {
        action();
      }
    };

    window.addEventListener("keydown", onKeydown);

    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, []);
};

export default useKeyPress;
