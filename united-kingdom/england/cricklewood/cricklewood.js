// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cricklewood","repository":"europe","path":"united-kingdom/england/cricklewood","depth":3,"parent":"united-kingdom/england","children":["mapesbury"]});
export const childModules = Object.freeze({"mapesbury":"./mapesbury/mapesbury.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
