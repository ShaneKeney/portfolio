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
            "I am a code <strong>enthusiast</strong>",
            "I love <strong>building fun projects</strong>",
            "I develop <strong>mobile apps</strong>",
            "I develop <strong>mobile apps</strong>",
            "I love <strong>React Native & Expo</strong>",
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
