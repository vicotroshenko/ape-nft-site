export const getPartText = (text, start, end) => 
  text.split(" ").slice(start, end).join(" ");