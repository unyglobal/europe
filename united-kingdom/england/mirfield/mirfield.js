// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"mirfield","repository":"europe","path":"united-kingdom/england/mirfield","depth":3,"parent":"united-kingdom/england","children":["knowl","littlemoor","lower-hopton","new-scarboro","snake-hill"]});
export const childModules = Object.freeze({"knowl":"./knowl/knowl.js","littlemoor":"./littlemoor/littlemoor.js","lower-hopton":"./lower-hopton/lower-hopton.js","new-scarboro":"./new-scarboro/new-scarboro.js","snake-hill":"./snake-hill/snake-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
