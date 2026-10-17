// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"warwick","repository":"europe","path":"united-kingdom/england/warwick","depth":3,"parent":"united-kingdom/england","children":["bridge-end","cliff-hill","packmores"]});
export const childModules = Object.freeze({"bridge-end":"./bridge-end/bridge-end.js","cliff-hill":"./cliff-hill/cliff-hill.js","packmores":"./packmores/packmores.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
