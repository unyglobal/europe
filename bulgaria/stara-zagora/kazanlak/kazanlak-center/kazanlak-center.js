// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kazanlak-center","repository":"europe","path":"bulgaria/stara-zagora/kazanlak/kazanlak-center","depth":4,"parent":"bulgaria/stara-zagora/kazanlak","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
