// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wilhelmsburg","repository":"europe","path":"germany/hamburg/wilhelmsburg","depth":3,"parent":"germany/hamburg","children":["kirchdorf"]});
export const childModules = Object.freeze({"kirchdorf":"./kirchdorf/kirchdorf.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
