import React from "react";
import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeals = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>

      <p className={`${styles.paragraph} max-w5-[480px] mt-`}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus
        itaque corporis, voluptatem vel asperiores nobis dolorum exercitationem!
        Quisquam, magni reiciendis!
      </p>
      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeals;
