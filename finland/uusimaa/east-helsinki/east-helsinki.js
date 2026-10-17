// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"east-helsinki","repository":"europe","path":"finland/uusimaa/east-helsinki","depth":3,"parent":"finland/uusimaa","children":["itakeskus"]});
export const childModules = Object.freeze({"itakeskus":"./itakeskus/itakeskus.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
