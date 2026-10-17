// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"brixham","repository":"europe","path":"united-kingdom/england/brixham","depth":3,"parent":"united-kingdom/england","children":["higher-brixham"]});
export const childModules = Object.freeze({"higher-brixham":"./higher-brixham/higher-brixham.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
