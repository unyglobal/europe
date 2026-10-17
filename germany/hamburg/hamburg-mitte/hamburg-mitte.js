// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hamburg-mitte","repository":"europe","path":"germany/hamburg/hamburg-mitte","depth":3,"parent":"germany/hamburg","children":["klostertor","st-georg"]});
export const childModules = Object.freeze({"klostertor":"./klostertor/klostertor.js","st-georg":"./st-georg/st-georg.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
