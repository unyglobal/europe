// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"taunton","repository":"europe","path":"united-kingdom/england/taunton","depth":3,"parent":"united-kingdom/england","children":["firepool","north-town","tangier"]});
export const childModules = Object.freeze({"firepool":"./firepool/firepool.js","north-town":"./north-town/north-town.js","tangier":"./tangier/tangier.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
