// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"arenella","repository":"europe","path":"italy/campania/arenella","depth":3,"parent":"italy/campania","children":["rione-alto"]});
export const childModules = Object.freeze({"rione-alto":"./rione-alto/rione-alto.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
