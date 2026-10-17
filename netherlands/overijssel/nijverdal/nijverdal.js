// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nijverdal","repository":"europe","path":"netherlands/overijssel/nijverdal","depth":3,"parent":"netherlands/overijssel","children":["noetsele"]});
export const childModules = Object.freeze({"noetsele":"./noetsele/noetsele.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
