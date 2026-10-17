// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cesis-municipality","repository":"europe","path":"latvia/cesis-municipality","depth":2,"parent":"latvia","children":["cesis"]});
export const childModules = Object.freeze({"cesis":"./cesis/cesis.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
