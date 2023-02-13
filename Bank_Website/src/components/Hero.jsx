import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section
    id="Home"
    className={`flex md: flex-row flex-col ${styles.paddingY}`}
  >
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0  sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="discount" className="w-[32] h-[32] " />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount for{" "}
          <span className="text-white">1 month</span>
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0 ">
          <GetStarted />
        </div>
      </div>

      <h1 className=" font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
        Payment Method
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti totam
        expedita, excepturi quasi laborum blanditiis et ullam natus. Maxime,
        iusto quos.
      </p>
    </div>
    <div>
      <img src={robot} alt="billing" className="w-[100%] h-[100%] z-[5]" />
    </div>
  </section>
);

export default Hero;
