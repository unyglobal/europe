// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nokia","repository":"europe","path":"finland/pirkanmaa/nokia","depth":3,"parent":"finland/pirkanmaa","children":["ketolanmaki","koskenmaki","ruskeepaa"]});
export const childModules = Object.freeze({"ketolanmaki":"./ketolanmaki/ketolanmaki.js","koskenmaki":"./koskenmaki/koskenmaki.js","ruskeepaa":"./ruskeepaa/ruskeepaa.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
