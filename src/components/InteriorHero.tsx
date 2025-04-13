import { Hexagon } from "@/components/Hexagon";
import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const InteriorHero: React.FC<Props> = ({ children }) => {
  return (
    <section className="py-60 relative overflow-x-clip">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Hexagon className="size-[800px]" />
      </div>
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Hexagon className="size-[1100px]" />
      </div>
      <div className="container">{children}</div>
    </section>
  );
};

export default InteriorHero;
