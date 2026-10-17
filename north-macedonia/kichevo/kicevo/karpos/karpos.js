// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karpos","repository":"europe","path":"north-macedonia/kichevo/kicevo/karpos","depth":4,"parent":"north-macedonia/kichevo/kicevo","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
