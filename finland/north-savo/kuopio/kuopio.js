// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kuopio","repository":"europe","path":"finland/north-savo/kuopio","depth":3,"parent":"finland/north-savo","children":["kuopionlahti"]});
export const childModules = Object.freeze({"kuopionlahti":"./kuopionlahti/kuopionlahti.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
