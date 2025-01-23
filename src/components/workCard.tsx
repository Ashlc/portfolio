import { Card, CardBody, CardFooter } from "@heroui/react";

import { Work } from "@/types";

type Props = {
  work: Work;
};

const WorkCard = ({ work }: Props) => {
  return (
    <Card isPressable className="hover:scale-95">
      <CardBody className="p-0">
        <img
          alt={work.title}
          className="object-cover aspect-video w-full"
          src={work.cover}
        />
      </CardBody>
      <CardFooter>
        <div>
          <h2>{work.title}</h2>
          <p>{work.subtitle}</p>
        </div>
      </CardFooter>
    </Card>
  );
};

export default WorkCard;
