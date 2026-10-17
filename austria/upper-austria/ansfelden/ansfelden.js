// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ansfelden","repository":"europe","path":"austria/upper-austria/ansfelden","depth":3,"parent":"austria/upper-austria","children":["furhappen"]});
export const childModules = Object.freeze({"furhappen":"./furhappen/furhappen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
