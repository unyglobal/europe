// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sofia-capital","repository":"europe","path":"bulgaria/sofia-capital","depth":2,"parent":"bulgaria","children":["sofia"]});
export const childModules = Object.freeze({"sofia":"./sofia/sofia.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
