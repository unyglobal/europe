// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"briton-ferry","repository":"europe","path":"united-kingdom/wales/briton-ferry","depth":3,"parent":"united-kingdom/wales","children":["shelone","warren-hill"]});
export const childModules = Object.freeze({"shelone":"./shelone/shelone.js","warren-hill":"./warren-hill/warren-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
