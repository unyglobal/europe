// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bromsgrove","repository":"europe","path":"united-kingdom/england/bromsgrove","depth":3,"parent":"united-kingdom/england","children":["sidemoor","stoney-hill"]});
export const childModules = Object.freeze({"sidemoor":"./sidemoor/sidemoor.js","stoney-hill":"./stoney-hill/stoney-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
