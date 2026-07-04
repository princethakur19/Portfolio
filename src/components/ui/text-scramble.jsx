import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const defaultChars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const motionElements = {
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  p: motion.p,
  span: motion.span,
};

export function TextScramble({
  children,
  duration = 0.8,
  speed = 0.04,
  characterSet = defaultChars,
  as: Component = "p",
  trigger = true,
  onScrambleComplete,
  ...props
}) {
  const MotionComponent = motionElements[Component] ?? motion.p;
  const [displayText, setDisplayText] = useState(children);

  useEffect(() => {
    if (!trigger) return undefined;

    const steps = duration / speed;
    let step = 0;

    const interval = window.setInterval(() => {
      const progress = step / steps;
      const scrambled = [...children]
        .map((character, index) => {
          if (character === " " || progress * children.length > index) {
            return character;
          }

          return characterSet[Math.floor(Math.random() * characterSet.length)];
        })
        .join("");

      setDisplayText(scrambled);
      step += 1;

      if (step > steps) {
        window.clearInterval(interval);
        setDisplayText(children);
        onScrambleComplete?.();
      }
    }, speed * 1000);

    return () => window.clearInterval(interval);
  }, [children, characterSet, duration, onScrambleComplete, speed, trigger]);

  return <MotionComponent {...props}>{displayText}</MotionComponent>;
}
