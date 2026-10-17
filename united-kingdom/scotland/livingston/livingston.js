// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"livingston","repository":"europe","path":"united-kingdom/scotland/livingston","depth":3,"parent":"united-kingdom/scotland","children":["howden","knightsridge","ladywell"]});
export const childModules = Object.freeze({"howden":"./howden/howden.js","knightsridge":"./knightsridge/knightsridge.js","ladywell":"./ladywell/ladywell.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
