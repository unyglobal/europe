// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"orpington","repository":"europe","path":"united-kingdom/england/orpington","depth":3,"parent":"united-kingdom/england","children":["broom-hill","goddington"]});
export const childModules = Object.freeze({"broom-hill":"./broom-hill/broom-hill.js","goddington":"./goddington/goddington.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
