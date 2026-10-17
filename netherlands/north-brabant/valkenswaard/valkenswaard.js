// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"valkenswaard","repository":"europe","path":"netherlands/north-brabant/valkenswaard","depth":3,"parent":"netherlands/north-brabant","children":["geenhoven"]});
export const childModules = Object.freeze({"geenhoven":"./geenhoven/geenhoven.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
