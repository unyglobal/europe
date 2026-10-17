// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"haydock","repository":"europe","path":"united-kingdom/england/haydock","depth":3,"parent":"united-kingdom/england","children":["stanley-bank"]});
export const childModules = Object.freeze({"stanley-bank":"./stanley-bank/stanley-bank.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
