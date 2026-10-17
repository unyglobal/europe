// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"llandudno","repository":"europe","path":"united-kingdom/wales/llandudno","depth":3,"parent":"united-kingdom/wales","children":["cwlach"]});
export const childModules = Object.freeze({"cwlach":"./cwlach/cwlach.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
