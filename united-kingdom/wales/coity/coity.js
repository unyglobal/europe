// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"coity","repository":"europe","path":"united-kingdom/wales/coity","depth":3,"parent":"united-kingdom/wales","children":["bragdy","byeastwood"]});
export const childModules = Object.freeze({"bragdy":"./bragdy/bragdy.js","byeastwood":"./byeastwood/byeastwood.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
