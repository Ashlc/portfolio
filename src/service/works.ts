import avalies from "@/images/Avalies/cover.png";
import lighthouse from "@/images/Lighthouse/cover.png";
import cadMerenda from "@/images/Misc/cadMerenda.png";
import fundef from "@/images/Misc/fundef.png";
import gap from "@/images/Misc/gap.png";
import oxeBanking from "@/images/Oxebanking/cover.png";
import { Work } from "@/types";

export const works: Work[] = [
  {
    id: "1",
    title: "CadMerenda",
    subtitle: "Gerenciamento de cardápios escolares",
    description: "Sistema de gerenciamento de cardápios escolares",
    roles: ["Desenvolvedor Front-End", "UI/UX Designer"],
    workPlace: "SEDUC",
    when: "2023",
    status: "Concluído",
    cover: cadMerenda,
    link: "https://cadmerenda.educacao.al.gov.br",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    id: "2",
    title: "GAP - Gestão de Ações e Projetos",
    subtitle: "Sistema de organização de projetos",
    description:
      "Sistema de gerenciamento de ações e projetos da Superintendência de Infraestrutura e Tecnologia da SEDUC.",
    roles: ["Desenvolvedor Front-End"],
    workPlace: "SEDUC",
    when: "2024",
    status: "Concluído",
    cover: gap,
    link: "https://gap.educacao.al.gov.br",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    id: "3",
    title: "Oxebanking",
    subtitle: "Trabalho da matéria de CLP",
    description:
      "Projeto de um banco digital fictício, desenvolvido para a matéria Conceitos de Linguagens de Programação do curso de Ciência da Computação na Universidade Federal de Alagoas (UFAL) com o intuito de aprimorar habilidades em desenvolvimento web e design de interfaces.",
    roles: ["Desenvolvedor Front-End", "UI/UX Designer"],
    workPlace: "UFAL",
    repo: "https://github.com/Ashlc/oxebanking",
    when: "2024",
    status: "Concluído",
    cover: oxeBanking,
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    id: "4",
    title: "Avalies",
    subtitle: "Avaliação online de instituições de ensino superior",
    description: "Plataforma de avaliação de instituições de ensino superior",
    roles: [
      "Desenvolvedor Fullstack",
      "UI/UX Designer",
      "Product Manager",
      "Tech Lead",
    ],
    workPlace: "SEDUC",
    when: "2025",
    status: "Em andamento",
    cover: avalies,
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    id: "5",
    title: "Precatório FUNDEF",
    subtitle: "Plataforma de consulta de precatórios FUNDEF",
    description: "Plataforma de consulta de precatórios FUNDEF",
    roles: ["Desenvolvedor Front-End"],
    workPlace: "SEDUC",
    when: "2025",
    status: "Em andamento",
    cover: fundef,
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    id: "6",
    title: "D.O. Eletrônico",
    subtitle: "Geração de D.O para o Hospital Universiário",
    description:
      "Geração de Declaração de Óbito para o Hospital Universiário Professor Alberto Antunes (HUPAA)",
    roles: ["Desenvolvedor Front-End"],
    workPlace: "SEDUC",
    when: "2025",
    status: "Concluído",
    link: "https://obito-chi.vercel.app/",
    cover: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    id: "7",
    title: "Bumy",
    subtitle: "Geração de conteúdos automatizada.",
    description: "Geração de conteúdos automatizada.",
    roles: ["UI/UX Designer, Desenvolvedor Front-End"],
    workPlace: "Freelance",
    when: "2025",
    status: "Em andamento",
    cover: "https://via.placeholder.com/150",
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
  },
  {
    id: "8",
    title: "Lighthouse - Landing Page",
    subtitle: "Landing page para a Lighthouse",
    description: "Landing page para a Lighthouse",
    roles: ["UI/UX Designer"],
    workPlace: "Freelance",
    when: "2025",
    status: "Concluído",
    cover: lighthouse,
    images: [
      "https://via.placeholder.com/150",
      "https://via.placeholder.com/150",
    ],
    link: "https://lhs.digital/",
  },
];
