import { Section1 } from "./section1/index";
import { Section2 } from "./section2/index";
import { Section3 } from "./section3/index";
import { Section4 } from "./section4/index";
import { useRef } from "react";
import "./index.css";

export const Inicio = () => {
  const sec2Ref = useRef();

  return (
    <div className="page">
      <Section1 sec2={sec2Ref} />
      <Section2 reference={sec2Ref} />
      <Section3 />
      <Section4 />
    </div>
  );
};
