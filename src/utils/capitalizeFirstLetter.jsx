export function capitalizeFirstLetter(string) {
  return `${string[0].toUpperCase()}${string.slice(1, -1)}${string.at(-1)}`;
}
