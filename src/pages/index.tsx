import { ScrollShadow } from "@heroui/react";
import { animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import WorkCard from "@/components/workCard";
import WorkView from "@/components/workView";
import { works } from "@/service/works";
import { CARD_WIDTH } from "@/utils/constants";

export default function Index() {
  const [activeWork, setActiveWork] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animate(".activeWork", {
      scale: 1.1,
      marginLeft: "8px",
      marginRight: "8px",
    });
  }, [activeWork]);

  const setWork = (index: number) => {
    if (activeWork === index) return;
    if (activeWork < index) {
      scrollRef.current?.scrollTo({
        top: scrollRef.current.scrollTop + CARD_WIDTH - 6 - 16,
        behavior: "smooth",
      });
    } else {
      scrollRef.current?.scrollTo({
        top: scrollRef.current.scrollTop - CARD_WIDTH + 12 + 16,
        behavior: "smooth",
      });
    }
    animate(".activeWork", { scale: 1, marginLeft: 0, marginRight: 0 });
    setActiveWork(index);
  };

  return (
    <section className="h-full flex flex-row justify-center gap-8">
      <ScrollShadow
        ref={scrollRef}
        hideScrollBar
        className="h-full py-4 px-4"
        orientation="vertical"
        visibility="bottom"
      >
        <div className="flex flex-col items-center gap-6">
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
