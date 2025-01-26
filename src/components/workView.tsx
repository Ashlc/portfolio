import { Chip, Divider, Link, ScrollShadow, Tooltip } from "@heroui/react";
import { Briefcase, Calendar, PlaySquare } from "lucide-react";

import Gallery from "./gallery";
import { GithubIcon } from "./icons";

import { useTheme } from "@/hooks/use-theme";
import { works } from "@/service/works";
import { WorkStatus } from "@/types";

type Props = {
  workIndex: number;
};

type ChipStyle = {
  label: string;
  background: string;
  foreground: string;
  border?: string;
};

const WorkView = ({ workIndex }: Props) => {
  const work = works[workIndex];
  const { theme } = useTheme();
  const statusChip: Record<WorkStatus, ChipStyle> = {
    completed: {
      label: "Concluído",
      background: "bg-success-400",
      foreground: "text-success-50",
    },
    ongoing: {
      label: "Em andamento",
      background: "bg-warning-400",
      foreground: "text-warning-50",
    },
  };

  return (
    <ScrollShadow className="w-[50vw] border border-default-200 rounded-xl">
      <div className="flex flex-col p-6 border-b border-default-200 dark:border-b-0 dark:bg-default-100 gap-4">
        <div>
          <h1 className="text-2xl font-bold">{work.title}</h1>
          <p className="text-primary-500">{work.roles.join(", ")}</p>
        </div>
        {work.technologies && (
          <div className="flex flex-row gap-2 w-full flex-wrap">
            {work.technologies.map((tech) => (
              <Chip
                key={`${tech}.${work.id}`}
                color="primary"
                variant={theme === "dark" ? "shadow" : "flat"}
              >
                {tech}
              </Chip>
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-6">
        <Gallery index={workIndex} />
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Sobre o projeto</h2>
          <p className="text-justify whitespace-pre-wrap">{work.description}</p>
        </div>
        <Divider />
        <div className="flex flex-row gap-8 items-center">
          {work.status && (
            <Chip
              className={`font-medium uppercase text-xs ${statusChip[work.status].background} ${statusChip[work.status].foreground}`}
              variant={theme === "dark" ? "shadow" : "flat"}
            >
              {statusChip[work.status].label}
            </Chip>
          )}
          <div className="flex flex-row gap-2 items-center">
            <Calendar size={17} />
            <p>{work.when}</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Briefcase size={18} />
            <p>{work.workPlace}</p>
          </div>
        </div>
        <div className="flex flex-row items-center gap-4">
          {work.link && (
            <Tooltip content="Ver projeto" placement="top">
              <Link
                aria-label="Ver projeto"
                className="rounded"
                href={work.link}
                target="_blank"
              >
                <PlaySquare />
              </Link>
            </Tooltip>
          )}
          {work.repo && (
            <Tooltip content="Repositório no Github" placement="top">
              <Link
                aria-label="Repositório no Github"
                className="rounded"
                href={work.repo}
                target="_blank"
              >
                <GithubIcon />
              </Link>
            </Tooltip>
          )}
        </div>
      </div>
    </ScrollShadow>
  );
};

export default WorkView;
