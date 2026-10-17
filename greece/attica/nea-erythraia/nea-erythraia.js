// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nea-erythraia","repository":"europe","path":"greece/attica/nea-erythraia","depth":3,"parent":"greece/attica","children":["kastri","mortero"]});
export const childModules = Object.freeze({"kastri":"./kastri/kastri.js","mortero":"./mortero/mortero.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
