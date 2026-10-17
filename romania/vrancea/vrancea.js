// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vrancea","repository":"europe","path":"romania/vrancea","depth":2,"parent":"romania","children":["adjud","focsani"]});
export const childModules = Object.freeze({"adjud":"./adjud/adjud.js","focsani":"./focsani/focsani.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
