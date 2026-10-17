// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kilburn","repository":"europe","path":"united-kingdom/england/kilburn","depth":3,"parent":"united-kingdom/england","children":["frognal-and-fitzjohns","west-hampstead"]});
export const childModules = Object.freeze({"frognal-and-fitzjohns":"./frognal-and-fitzjohns/frognal-and-fitzjohns.js","west-hampstead":"./west-hampstead/west-hampstead.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
