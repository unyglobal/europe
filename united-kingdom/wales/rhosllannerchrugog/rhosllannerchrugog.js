// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rhosllannerchrugog","repository":"europe","path":"united-kingdom/wales/rhosllannerchrugog","depth":3,"parent":"united-kingdom/wales","children":["pant","ponciau"]});
export const childModules = Object.freeze({"pant":"./pant/pant.js","ponciau":"./ponciau/ponciau.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
