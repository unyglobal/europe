// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"igea-marina","repository":"europe","path":"italy/emilia-romagna/bellaria-igea-marina/igea-marina","depth":4,"parent":"italy/emilia-romagna/bellaria-igea-marina","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
