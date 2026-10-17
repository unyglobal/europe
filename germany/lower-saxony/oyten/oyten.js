// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"oyten","repository":"europe","path":"germany/lower-saxony/oyten","depth":3,"parent":"germany/lower-saxony","children":["oyterthunen"]});
export const childModules = Object.freeze({"oyterthunen":"./oyterthunen/oyterthunen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
