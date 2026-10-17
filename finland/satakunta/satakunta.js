// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"satakunta","repository":"europe","path":"finland/satakunta","depth":2,"parent":"finland","children":["pori","rauma"]});
export const childModules = Object.freeze({"pori":"./pori/pori.js","rauma":"./rauma/rauma.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
