// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"greenwich","repository":"europe","path":"united-kingdom/england/greenwich","depth":3,"parent":"united-kingdom/england","children":["greenwich-west"]});
export const childModules = Object.freeze({"greenwich-west":"./greenwich-west/greenwich-west.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
