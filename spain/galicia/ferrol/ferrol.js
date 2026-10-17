// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ferrol","repository":"europe","path":"spain/galicia/ferrol","depth":3,"parent":"spain/galicia","children":["a-malata"]});
export const childModules = Object.freeze({"a-malata":"./a-malata/a-malata.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
