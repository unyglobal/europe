// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"woking","repository":"europe","path":"united-kingdom/england/woking","depth":3,"parent":"united-kingdom/england","children":["horsell","mount-hermon"]});
export const childModules = Object.freeze({"horsell":"./horsell/horsell.js","mount-hermon":"./mount-hermon/mount-hermon.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
