import { Button, ScrollShadow } from "@heroui/react";
import { animate } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

import WorkCard from "@/components/workCard";
import WorkView from "@/components/workView";
import { works } from "@/service/works";

export default function Index() {
  const [activeWork, setActiveWork] = useState(0);
  const workCardRefs = useRef<Array<HTMLDivElement | null>>([]);
  const isSmall = useMediaQuery({ query: "(max-width: 768px)" });

  useEffect(() => {
    animate(".activeWork", {
      scale: 1.1,
    });
  }, [activeWork]);

  const setWork = (index: number) => {
    if (activeWork === index) return;

    workCardRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: isSmall ? "nearest" : "center",
      inline: isSmall ? "center" : "nearest",
    });

    animate(".activeWork", { scale: 1 });
    setActiveWork(index);
  };

  return (
    <section className="h-full flex flex-col lg:flex-row justify-center gap-8 relative">
      <div className="max-sm:w-full relative">
        <ScrollShadow
          hideScrollBar
          className={`h-full py-4 px-4 ${isSmall ? "w-full" : "h-full"}`}
          orientation={isSmall ? "horizontal" : "vertical"}
          visibility={isSmall ? "right" : "bottom"}
        >
          <div className="flex flex-row w-fit lg:flex-col items-center gap-6">
            {works.map((work, i) => (
              <WorkCard
                key={work.id}
                ref={(el) => (workCardRefs.current[i] = el)}
                active={activeWork === i}
                index={i}
                setActive={setWork}
                work={work}
              />
            ))}
          </div>
        </ScrollShadow>
        <div className="md:hidden flex flex-row justify-between w-full absolute top-1/2 -translate-y-1/2 left-0 right-0">
          <Button
            isIconOnly
            isDisabled={activeWork === 0}
            variant="flat"
            onPress={() => setWork(activeWork - 1)}
          >
            <ChevronLeft />
          </Button>
          <Button
            isIconOnly
            isDisabled={activeWork === works.length - 1}
            variant="flat"
            onPress={() => setWork(activeWork + 1)}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
      <WorkView workIndex={activeWork} />
    </section>
  );
}
