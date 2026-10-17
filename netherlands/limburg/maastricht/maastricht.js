// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"maastricht","repository":"europe","path":"netherlands/limburg/maastricht","depth":3,"parent":"netherlands/limburg","children":["binnenstad","jekerkwartier","wijk"]});
export const childModules = Object.freeze({"binnenstad":"./binnenstad/binnenstad.js","jekerkwartier":"./jekerkwartier/jekerkwartier.js","wijk":"./wijk/wijk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
