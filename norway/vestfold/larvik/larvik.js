// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"larvik","repository":"europe","path":"norway/vestfold/larvik","depth":3,"parent":"norway/vestfold","children":["nanset"]});
export const childModules = Object.freeze({"nanset":"./nanset/nanset.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
