// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"consett","repository":"europe","path":"united-kingdom/england/consett","depth":3,"parent":"united-kingdom/england","children":["crookhall"]});
export const childModules = Object.freeze({"crookhall":"./crookhall/crookhall.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
