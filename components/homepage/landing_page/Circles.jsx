"use client";
import React, { useEffect, useState } from "react";
import styles from "./Circles.module.css";
import Circle from "../../ui/homepage/Circle";
import BigFactory from "@/public/svg/homepage/landing-page/circlesObjects/BigFactory";
import Box from "@/public/svg/homepage/landing-page/circlesObjects/Box";
import Boxes from "@/public/svg/homepage/landing-page/circlesObjects/Boxes";
import Cart from "@/public/svg/homepage/landing-page/circlesObjects/Cart";
import Factory from "@/public/svg/homepage/landing-page/circlesObjects/Factory";
import Message from "@/public/svg/homepage/landing-page/circlesObjects/Message";

const Circles = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  let c3top, c3left;
  let c2top, c2left;
  let c1top, c1left;

  if (width > 1200) {
    c3top = "25.5%";
    c2top = "36%";
    c1top = "48%";

    c3left = "49%";
    c2left = "54.7%";
    c1left = "60%";
  } else {
    c3top = "29%";
    c2top = "42%";
    c1top = "55%";

    c3left = "52.5%";
    c2left = "61%";
    c1left = "69%";
  }

  return (
    <>
      <Circle
        top={c1top}
        left={c1left}
        diameter={378}
        objects={{
          object1: { Object: Box, start: "0deg", end: "359deg" },
          object2: { Object: Factory, start: "135deg", end: "494deg" },
          object3: { Object: Message, start: "250deg", end: "609deg" },
        }}
      />
      <Circle
        top={c2top}
        left={c2left}
        diameter={537}
        objects={{
          object1: { Object: Message, start: "60deg", end: "419deg" },
          object2: { Object: Cart, start: "195deg", end: "554deg" },
          // object3: { Object: Boxes, start: "295deg", end: "654deg" },
        }}
      />
      <Circle
        top={c3top}
        left={c3left}
        diameter={700}
        objects={{
          object1: { Object: BigFactory, start: "0deg", end: "359deg" },
          object2: { Object: Cart, start: "95deg", end: "454deg" },
          // object3: { Object: Box, start: "165deg", end: "524deg" },
          object4: { Object: Factory, start: "250deg", end: "609deg" },
        }}
      />
      <Circle
        top={"12%"}
        left={"42%"}
        diameter={900}
        objects={{
          // object1: { Object: Boxes, start: "30deg", end: "389deg" },
          // object2: { Object: BigFactory, start: "70deg", end: "429deg" },
          object3: { Object: Boxes, start: "135deg", end: "494deg" },
          object4: { Object: BigFactory, start: "210deg", end: "569deg" },
          // object5: { Object: Box, start: "275deg", end: "634deg" },
          object6: { Object: Cart, start: "330deg", end: "689deg" },
        }}
      />
    </>
  );
};

export default Circles;
