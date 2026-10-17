// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nardo","repository":"europe","path":"italy/apulia/nardo","depth":3,"parent":"italy/apulia","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
