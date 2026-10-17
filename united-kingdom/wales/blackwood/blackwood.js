// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"blackwood","repository":"europe","path":"united-kingdom/wales/blackwood","depth":3,"parent":"united-kingdom/wales","children":["cefn-fforest"]});
export const childModules = Object.freeze({"cefn-fforest":"./cefn-fforest/cefn-fforest.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
