// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"settimo-torinese","repository":"europe","path":"italy/piedmont/settimo-torinese","depth":3,"parent":"italy/piedmont","children":["borgo-nuovo"]});
export const childModules = Object.freeze({"borgo-nuovo":"./borgo-nuovo/borgo-nuovo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
