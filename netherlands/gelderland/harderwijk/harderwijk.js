// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"harderwijk","repository":"europe","path":"netherlands/gelderland/harderwijk","depth":3,"parent":"netherlands/gelderland","children":["slingerbos","stadsdennen"]});
export const childModules = Object.freeze({"slingerbos":"./slingerbos/slingerbos.js","stadsdennen":"./stadsdennen/stadsdennen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
