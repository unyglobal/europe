// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hausbruch","repository":"europe","path":"germany/hamburg/hausbruch","depth":3,"parent":"germany/hamburg","children":["neuwiedenthal"]});
export const childModules = Object.freeze({"neuwiedenthal":"./neuwiedenthal/neuwiedenthal.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
