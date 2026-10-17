// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"billstedt","repository":"europe","path":"germany/hamburg/billstedt","depth":3,"parent":"germany/hamburg","children":["ojendorf"]});
export const childModules = Object.freeze({"ojendorf":"./ojendorf/ojendorf.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
