// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gjilan","repository":"europe","path":"kosovo/gjilan","depth":2,"parent":"kosovo","children":["vitina"]});
export const childModules = Object.freeze({"vitina":"./vitina/vitina.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
