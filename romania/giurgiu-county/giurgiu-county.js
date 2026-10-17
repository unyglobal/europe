// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"giurgiu-county","repository":"europe","path":"romania/giurgiu-county","depth":2,"parent":"romania","children":["giurgiu"]});
export const childModules = Object.freeze({"giurgiu":"./giurgiu/giurgiu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
