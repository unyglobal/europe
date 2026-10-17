// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tulle","repository":"europe","path":"france/new-aquitaine/tulle","depth":3,"parent":"france/new-aquitaine","children":["trech"]});
export const childModules = Object.freeze({"trech":"./trech/trech.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
