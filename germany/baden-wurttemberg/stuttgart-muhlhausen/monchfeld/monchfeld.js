// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"monchfeld","repository":"europe","path":"germany/baden-wurttemberg/stuttgart-muhlhausen/monchfeld","depth":4,"parent":"germany/baden-wurttemberg/stuttgart-muhlhausen","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
