// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sastamala","repository":"europe","path":"finland/pirkanmaa/sastamala","depth":3,"parent":"finland/pirkanmaa","children":["pappila"]});
export const childModules = Object.freeze({"pappila":"./pappila/pappila.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
