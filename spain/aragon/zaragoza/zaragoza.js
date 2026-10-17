// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zaragoza","repository":"europe","path":"spain/aragon/zaragoza","depth":3,"parent":"spain/aragon","children":["arrabal","casco"]});
export const childModules = Object.freeze({"arrabal":"./arrabal/arrabal.js","casco":"./casco/casco.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
