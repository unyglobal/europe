// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"swindon","repository":"europe","path":"united-kingdom/england/swindon","depth":3,"parent":"united-kingdom/england","children":["new-town","walcot-west"]});
export const childModules = Object.freeze({"new-town":"./new-town/new-town.js","walcot-west":"./walcot-west/walcot-west.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
