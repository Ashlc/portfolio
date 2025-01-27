import { ScrollShadow } from "@heroui/react";
import { animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

import WorkCard from "@/components/workCard";
import WorkView from "@/components/workView";
import { works } from "@/service/works";
import { CARD_WIDTH } from "@/utils/constants";

export default function Index() {
  const [activeWork, setActiveWork] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isSmall = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    animate(".activeWork", {
      scale: 1.1,
      marginLeft: "8px",
      marginRight: "8px",
    });
  }, [activeWork]);

  const setWork = (index: number) => {
    if (activeWork === index) return;

    const scrollOptions = {
      behavior: "smooth" as ScrollBehavior,
      [isSmall ? "left" : "top"]:
        (scrollRef.current
          ? scrollRef.current[isSmall ? "scrollLeft" : "scrollTop"]
          : 0) +
        (activeWork < index ? 1 : -1) * (CARD_WIDTH + 16 + index * 4),
    };

    scrollRef.current?.scrollTo(scrollOptions);
    animate(".activeWork", { scale: 1, marginLeft: 0, marginRight: 0 });
    setActiveWork(index);
  };

  return (
    <section className="h-full flex flex-col lg:flex-row justify-center gap-8">
      <ScrollShadow
        ref={scrollRef}
        hideScrollBar
        className={`h-full py-4 px-4 ${isSmall ? "w-full" : "h-full"}`}
        orientation={isSmall ? "horizontal" : "vertical"}
        visibility={isSmall ? "right" : "bottom"}
      >
        <div className="flex flex-row w-fit lg:flex-col items-center gap-6">
          {works.map((work, i) => (
            <WorkCard
              key={work.id}
              active={activeWork === i}
              index={i}
              setActive={setWork}
              work={work}
            />
          ))}
        </div>
      </ScrollShadow>
      <WorkView workIndex={activeWork} />
    </section>
  );
}
