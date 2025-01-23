import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type Work = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  roles: string[];
  workPlace: string;
  when: string;
  cover: string;
  link?: string;
  repo?: string;
  images?: string[];
  status?: "Em andamento" | "Concluído";
};
