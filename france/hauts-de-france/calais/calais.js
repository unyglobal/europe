// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"calais","repository":"europe","path":"france/hauts-de-france/calais","depth":3,"parent":"france/hauts-de-france","children":["calais-nord","calais-saint-pierre"]});
export const childModules = Object.freeze({"calais-nord":"./calais-nord/calais-nord.js","calais-saint-pierre":"./calais-saint-pierre/calais-saint-pierre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
