// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gubakha","repository":"europe","path":"russia/perm-krai/gubakha","depth":3,"parent":"russia/perm-krai","children":["novaya-gubakha"]});
export const childModules = Object.freeze({"novaya-gubakha":"./novaya-gubakha/novaya-gubakha.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
