// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"istria","repository":"europe","path":"croatia/istria","depth":2,"parent":"croatia","children":["pula"]});
export const childModules = Object.freeze({"pula":"./pula/pula.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
