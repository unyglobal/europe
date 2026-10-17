// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dagenham","repository":"europe","path":"united-kingdom/england/dagenham","depth":3,"parent":"united-kingdom/england","children":["eastbrook"]});
export const childModules = Object.freeze({"eastbrook":"./eastbrook/eastbrook.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
