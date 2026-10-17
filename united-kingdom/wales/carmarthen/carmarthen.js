// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"carmarthen","repository":"europe","path":"united-kingdom/wales/carmarthen","depth":3,"parent":"united-kingdom/wales","children":["pen-sarn"]});
export const childModules = Object.freeze({"pen-sarn":"./pen-sarn/pen-sarn.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
