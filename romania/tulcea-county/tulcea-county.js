// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tulcea-county","repository":"europe","path":"romania/tulcea-county","depth":2,"parent":"romania","children":["tulcea"]});
export const childModules = Object.freeze({"tulcea":"./tulcea/tulcea.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
