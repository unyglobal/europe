// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"frankfurt-am-main","repository":"europe","path":"germany/hesse/frankfurt-am-main","depth":3,"parent":"germany/hesse","children":["altstadt","innenstadt"]});
export const childModules = Object.freeze({"altstadt":"./altstadt/altstadt.js","innenstadt":"./innenstadt/innenstadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
