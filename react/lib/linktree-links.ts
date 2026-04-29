export type LinktreeLink = {
  title: string;
  description: string;
  href: string;
  image: string;
  disabled?: boolean;
  disabledLabel?: string;
};

const basePath = "/saiba-mais";

export const linktreeLinks: LinktreeLink[] = [
  {
    title: "Suporte",
    description: "Fale conosco",
    href: "https://wa.me/5516991069776?text=Ol%C3%A1%2C%20preciso%20de%20ajuda%20com%20algumas%20informa%C3%A7%C3%B5es",
    image: `${basePath}/image/banners/capa02.avif`,
  },
  {
    title: "Twitch",
    description: "Nossas lives",
    href: "https://www.twitch.tv/santosgamesesports",
    image: `${basePath}/image/banners/capa03.avif`,
  },
  {
    title: "VCT Ribeirão",
    description: "Campeonato Presencial",
    href: "https://santos-games.com/vct-ribeirao",
    image: `${basePath}/image/banners/vct-ribeirao_sga.avif`,
    disabled: false,
  },
  /*{
    title: "Corujão",
    description: "Das 21h as 07h",
    href: "/corujao",
    image: `${basePath}/image/banners/capa001.avif`,
    disabled: true,
    disabledLabel: "Manutenção",
  },*/
  {
    title: "CS Prime",
    description: "Campeonato Presencial",
    href: "https://cs-prime.santos-games.com/",
    image: `${basePath}/image/banners/cs-prime_sga.avif`,
    disabled: true,
  },
  {
    title: "Lan House",
    description: "Jogue quando quiser",
    href: "#",
    image: `${basePath}/image/banners/capa06.avif`,
    disabled: true,
  },
  {
    title: "Aniversário",
    description: "Seu aniversário gamer",
    href: "#",
    image: `${basePath}/image/banners/capa07.avif`,
    disabled: true,
  },
  {
    title: "Mix",
    description: "Junte seus amigos",
    href: "#",
    image: `${basePath}/image/banners/capa08.avif`,
    disabled: true,
  },
  {
    title: "SGA",
    description: "Em breve",
    href: "#",
    image: `${basePath}/image/banners/capa09.avif`,
    disabled: true,
  },
  {
    title: "YouTube",
    description: "Em breve",
    href: "#",
    image: `${basePath}/image/banners/capa04.avif`,
    disabled: true,
  },
];

export const homeLinktreeLinks = linktreeLinks;
