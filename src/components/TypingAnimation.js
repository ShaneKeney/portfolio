import { useEffect, useRef } from "react";
import Typed from "typed.js";
const TypingAnimation = ({ typingData, extraClassName }) => {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: typingData
        ? typingData
        : [
            "You <strong>name it</strong>",
            "I'll <strong>build it</strong>",
            "If we <strong>build it</strong>",
            "They <strong>will come</strong>",
          ], // Strings to display
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: false,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <span
      className={`${extraClassName} typing-subtitle`}
      id="subtitle"
      ref={el}
    ></span>
  );
};
export default TypingAnimation;
