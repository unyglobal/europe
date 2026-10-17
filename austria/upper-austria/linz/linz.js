// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"linz","repository":"europe","path":"austria/upper-austria/linz","depth":3,"parent":"austria/upper-austria","children":["innere-stadt"]});
export const childModules = Object.freeze({"innere-stadt":"./innere-stadt/innere-stadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
