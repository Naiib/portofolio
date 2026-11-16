export type Language = "id" | "en";

export const t = (language: Language, id: string, en: string) =>
  language === "id" ? id : en;
