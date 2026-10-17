// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bentley","repository":"europe","path":"united-kingdom/england/bentley","depth":3,"parent":"united-kingdom/england","children":["bentley-rise"]});
export const childModules = Object.freeze({"bentley-rise":"./bentley-rise/bentley-rise.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
