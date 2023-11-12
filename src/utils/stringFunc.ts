export const clipText = (text: string) => {
  const modifiedText = text ? text.replace(/\n/g, " ") : "";
  const newText =
    modifiedText.length > 80 ? `${modifiedText.slice(0, 80)}...` : modifiedText;

  return newText;
};
