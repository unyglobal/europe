// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"riga","repository":"europe","path":"latvia/riga","depth":2,"parent":"latvia","children":["darzciems"]});
export const childModules = Object.freeze({"darzciems":"./darzciems/darzciems.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
