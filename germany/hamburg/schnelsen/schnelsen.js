// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"schnelsen","repository":"europe","path":"germany/hamburg/schnelsen","depth":3,"parent":"germany/hamburg","children":["moordamm"]});
export const childModules = Object.freeze({"moordamm":"./moordamm/moordamm.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
