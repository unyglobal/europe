// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"idar-oberstein","repository":"europe","path":"germany/rheinland-pfalz/idar-oberstein","depth":3,"parent":"germany/rheinland-pfalz","children":["idar"]});
export const childModules = Object.freeze({"idar":"./idar/idar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
