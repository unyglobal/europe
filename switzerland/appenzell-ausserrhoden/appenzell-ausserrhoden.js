// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"appenzell-ausserrhoden","repository":"europe","path":"switzerland/appenzell-ausserrhoden","depth":2,"parent":"switzerland","children":["herisau"]});
export const childModules = Object.freeze({"herisau":"./herisau/herisau.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
