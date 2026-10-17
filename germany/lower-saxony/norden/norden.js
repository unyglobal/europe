// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"norden","repository":"europe","path":"germany/lower-saxony/norden","depth":3,"parent":"germany/lower-saxony","children":["ekelergaste"]});
export const childModules = Object.freeze({"ekelergaste":"./ekelergaste/ekelergaste.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
