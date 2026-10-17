// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tukums-municipality","repository":"europe","path":"latvia/tukums-municipality","depth":2,"parent":"latvia","children":["tukums"]});
export const childModules = Object.freeze({"tukums":"./tukums/tukums.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
