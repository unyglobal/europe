// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hythe","repository":"europe","path":"united-kingdom/england/hythe","depth":3,"parent":"united-kingdom/england","children":["buttsash"]});
export const childModules = Object.freeze({"buttsash":"./buttsash/buttsash.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
