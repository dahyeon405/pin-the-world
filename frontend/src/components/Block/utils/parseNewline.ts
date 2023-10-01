export const parseNewline = (text: string) => {
  return text
    .split("\\n")
    .map((str) => str.trim())
    .join("\n");
};
