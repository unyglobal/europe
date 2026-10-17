// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"friesoythe","repository":"europe","path":"germany/lower-saxony/friesoythe","depth":3,"parent":"germany/lower-saxony","children":["meeschen"]});
export const childModules = Object.freeze({"meeschen":"./meeschen/meeschen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
