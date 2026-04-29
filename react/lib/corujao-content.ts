export type CorujaoChip = {
  label: string;
  value: string;
};

export type CorujaoFaqItem = {
  question: string;
  answer: string;
};

export type CorujaoSpec = {
  item: string;
  spec: string;
};

export const corujaoChips: CorujaoChip[] = [
  { label: "Dias", value: "Sexta ou Sábado" },
  { label: "Horário", value: "21h00 ~ 07h00" },
  { label: "Local", value: "Av. Nove de Julho, 1992" },
  { label: "Vagas", value: "Apenas 10 vagas por edição" },
];

export const corujaoFaqItems: CorujaoFaqItem[] = [
  {
    question: "Posso levar meus periféricos?",
    answer:
      "Sim. Você pode trazer seus periféricos. Se preferir, pode usar os disponíveis na arena.",
  },
  {
    question: "Pode levar comida/bebida?",
    answer:
      "Pode trazer, dependendo da conveniência e disponibilidade do que você quer consumir.",
  },
  {
    question: "Tem idade mínima?",
    answer: "Não. O Corujão é livre para todas as idades.",
  },
  {
    question: "Precisa reservar vaga?",
    answer:
      "Recomendado. As vagas são limitadas e quem reserva tem prioridade no check-in.",
  },
  {
    question: "Quais jogos rolam no Corujão?",
    answer:
      "Valorant, CS2, Fortnite, LoL e outros. Se não tiver o jogo que deseja, pode baixar.",
  },
  {
    question: "Como pago?",
    answer: "Pix, cartão de crédito/débito e dinheiro em espécie.",
  },
  {
    question: "Quanto custa?",
    answer: "A experiência completa do Corujão Gamer sai por R$ 99,90.",
  },
];

export const corujaoSpecs: CorujaoSpec[] = [
  {
    item: "Processador",
    spec: "i5-13600K (13ª Geração) · 14 núcleos / 20 threads / 3.50 GHz",
  },
  {
    item: "Placa de vídeo",
    spec: "NVIDIA GeForce RTX 3060 Ti 8GB",
  },
  {
    item: "Memória RAM",
    spec: "HyperX Fury 16GB DDR4 3200MHz (2×8GB Dual Channel)",
  },
  {
    item: "Monitor",
    spec: 'UltraGear 27" Full HD, 144Hz, 1ms, IPS, DisplayPort, HDR, FreeSync Premium',
  },
  {
    item: "Periféricos",
    spec: "Teclado, mouse e headset da Redragon, com mousepad estendido Husky.",
  },
  {
    item: "Internet",
    spec: "800 Mega, sem lag, sem quedas, sem dor de cabeça.",
  },
];

