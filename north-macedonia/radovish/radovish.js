// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"radovish","repository":"europe","path":"north-macedonia/radovish","depth":2,"parent":"north-macedonia","children":["radovis"]});
export const childModules = Object.freeze({"radovis":"./radovis/radovis.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
