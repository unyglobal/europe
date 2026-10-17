// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arad-county","repository":"europe","path":"romania/arad-county","depth":2,"parent":"romania","children":["arad"]});
export const childModules = Object.freeze({"arad":"./arad/arad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
