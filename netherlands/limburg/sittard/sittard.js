// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sittard","repository":"europe","path":"netherlands/limburg/sittard","depth":3,"parent":"netherlands/limburg","children":["stadbroek"]});
export const childModules = Object.freeze({"stadbroek":"./stadbroek/stadbroek.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
