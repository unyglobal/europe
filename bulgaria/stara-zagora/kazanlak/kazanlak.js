// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kazanlak","repository":"europe","path":"bulgaria/stara-zagora/kazanlak","depth":3,"parent":"bulgaria/stara-zagora","children":["kazanlak-center"]});
export const childModules = Object.freeze({"kazanlak-center":"./kazanlak-center/kazanlak-center.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
