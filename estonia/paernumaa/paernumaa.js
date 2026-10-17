// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"paernumaa","repository":"europe","path":"estonia/paernumaa","depth":2,"parent":"estonia","children":["parnu"]});
export const childModules = Object.freeze({"parnu":"./parnu/parnu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
