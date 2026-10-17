// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arnold","repository":"europe","path":"united-kingdom/england/arnold","depth":3,"parent":"united-kingdom/england","children":["daybrook"]});
export const childModules = Object.freeze({"daybrook":"./daybrook/daybrook.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
