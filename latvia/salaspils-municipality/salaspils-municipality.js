// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"salaspils-municipality","repository":"europe","path":"latvia/salaspils-municipality","depth":2,"parent":"latvia","children":["salaspils"]});
export const childModules = Object.freeze({"salaspils":"./salaspils/salaspils.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
