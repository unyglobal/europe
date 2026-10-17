// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ammanford","repository":"europe","path":"united-kingdom/wales/ammanford","depth":3,"parent":"united-kingdom/wales","children":["tir-y-dail"]});
export const childModules = Object.freeze({"tir-y-dail":"./tir-y-dail/tir-y-dail.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
