// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"szczecin","repository":"europe","path":"poland/west-pomerania/szczecin","depth":3,"parent":"poland/west-pomerania","children":["centrum","stare-miasto"]});
export const childModules = Object.freeze({"centrum":"./centrum/centrum.js","stare-miasto":"./stare-miasto/stare-miasto.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
