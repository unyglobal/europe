// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bellaria-igea-marina","repository":"europe","path":"italy/emilia-romagna/bellaria-igea-marina","depth":3,"parent":"italy/emilia-romagna","children":["bellaria","igea-marina"]});
export const childModules = Object.freeze({"bellaria":"./bellaria/bellaria.js","igea-marina":"./igea-marina/igea-marina.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
