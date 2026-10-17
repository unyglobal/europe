// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tipton","repository":"europe","path":"united-kingdom/england/tipton","depth":3,"parent":"united-kingdom/england","children":["bloomfield","tipton-green"]});
export const childModules = Object.freeze({"bloomfield":"./bloomfield/bloomfield.js","tipton-green":"./tipton-green/tipton-green.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
