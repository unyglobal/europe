// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wolfsburg","repository":"europe","path":"germany/lower-saxony/wolfsburg","depth":3,"parent":"germany/lower-saxony","children":["hohenstein"]});
export const childModules = Object.freeze({"hohenstein":"./hohenstein/hohenstein.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
