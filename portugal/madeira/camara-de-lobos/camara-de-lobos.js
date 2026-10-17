// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"camara-de-lobos","repository":"europe","path":"portugal/madeira/camara-de-lobos","depth":3,"parent":"portugal/madeira","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
