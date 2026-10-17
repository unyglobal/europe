// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"amsterdam-oost","repository":"europe","path":"netherlands/north-holland/amsterdam-oost","depth":3,"parent":"netherlands/north-holland","children":["watergraafsmeer"]});
export const childModules = Object.freeze({"watergraafsmeer":"./watergraafsmeer/watergraafsmeer.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
