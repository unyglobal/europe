// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"satu-mare-county","repository":"europe","path":"romania/satu-mare-county","depth":2,"parent":"romania","children":["carei","satu-mare"]});
export const childModules = Object.freeze({"carei":"./carei/carei.js","satu-mare":"./satu-mare/satu-mare.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
