// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"risca","repository":"europe","path":"united-kingdom/wales/risca","depth":3,"parent":"united-kingdom/wales","children":["penrhiw"]});
export const childModules = Object.freeze({"penrhiw":"./penrhiw/penrhiw.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
