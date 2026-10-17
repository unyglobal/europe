// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ganderkesee","repository":"europe","path":"germany/lower-saxony/ganderkesee","depth":3,"parent":"germany/lower-saxony","children":["urneburg"]});
export const childModules = Object.freeze({"urneburg":"./urneburg/urneburg.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
