// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"susak","repository":"europe","path":"croatia/primorje-gorski-kotar/rijeka/susak","depth":4,"parent":"croatia/primorje-gorski-kotar/rijeka","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
