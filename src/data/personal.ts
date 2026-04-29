export const personal = {
  name:     "Felipe Vilela Freire",
  age:      21,
  email:    "felipe.vilela.freire@gmail.com",
  linkedin: "https://linkedin.com/in/felipevilelafreire786721336",
  github:   "https://github.com/FelipeVilelaFreire",
  photo:    "/assets/fotos/felipevilelafreire.jfif",
} as const;

export const companies = {
  prognum:      "Prognum",
  uff:          "Universidade Federal Fluminense (UFF)",
  santo_inacio: "Colégio Santo Inácio",
  escola:       "Colégio São Bento",
} as const;

export const toefl = {
  name:    "TOEFL iBT",
  issuer:  "ETS · Educational Testing Service",
  score:   "78 / 120",
  pdfPath: "/pdf/TOEFL Candidate Details.pdf",
} as const;

export const hobbyTags = {
  sport:     ["Futebol", "Surf", "Vôlei", "Futevôlei"],
  music:     ["Cavaquinho", "Violão"],
  volunteer: ["EJC – Encontro de Jovens com Cristo"],
} as const;

export const volunteerOrg = "Jovens da Paz" as const;

export const timelineItems: { key: keyof typeof companies; current: boolean }[] = [
  { key: "prognum",      current: true  },
  { key: "uff",          current: true  },
  { key: "santo_inacio", current: false },
  { key: "escola",       current: false },
];
