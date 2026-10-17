// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bussum","repository":"europe","path":"netherlands/north-holland/bussum","depth":3,"parent":"netherlands/north-holland","children":["het-spiegel","westereng"]});
export const childModules = Object.freeze({"het-spiegel":"./het-spiegel/het-spiegel.js","westereng":"./westereng/westereng.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
