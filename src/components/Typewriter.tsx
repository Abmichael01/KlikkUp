import React from "react";
import Typewriter from "typewriter-effect";

interface TypewriterCompProps {
    array: string[];
}

const TypewriterComp: React.FC<TypewriterCompProps> = ({
    array,
}) => {
  return (
    <div>
      <Typewriter
        options={{
          strings: array,
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypewriterComp;
