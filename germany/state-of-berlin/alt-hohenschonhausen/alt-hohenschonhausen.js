// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"alt-hohenschonhausen","repository":"europe","path":"germany/state-of-berlin/alt-hohenschonhausen","depth":3,"parent":"germany/state-of-berlin","children":["hohenschonhausen"]});
export const childModules = Object.freeze({"hohenschonhausen":"./hohenschonhausen/hohenschonhausen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
