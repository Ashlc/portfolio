import { Card, CardBody } from "@heroui/react";
import React from "react";

import { Work } from "@/types";
import { CARD_WIDTH } from "@/utils/constants";

type Props = {
  index: number;
  work: Work;
  active: boolean;
  setActive: (index: number) => void;
};

const WorkCard = React.forwardRef<HTMLDivElement, Props>(
  ({ index, work, active, setActive }, ref) => {
    return (
      <Card
        ref={ref}
        isPressable
        className={active ? "activeWork" : ""}
        shadow="sm"
        style={{ width: CARD_WIDTH }}
        onPress={() => setActive(index)}
      >
        <CardBody className="p-0">
          <img
            alt={work.title}
            className="object-cover aspect-video w-full border-b border-b-primary-50"
            src={work.cover}
          />
          <div className="w-full text-left px-3 pt-2 pb-4">
            <h2 className="text-primary text-sm font-semibold">{work.title}</h2>
            <p className="text-xs text-default-400">{work.subtitle}</p>
          </div>
        </CardBody>
      </Card>
    );
  },
);

WorkCard.displayName = "WorkCard";

export default WorkCard;
