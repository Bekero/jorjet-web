import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Cookies",
          "Cakes",
          "Moouse Cakes"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 35,
      }}
      />
  );
}

export default Type;
