// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"burntwood","repository":"europe","path":"united-kingdom/england/burntwood","depth":3,"parent":"united-kingdom/england","children":["boney-hay"]});
export const childModules = Object.freeze({"boney-hay":"./boney-hay/boney-hay.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
