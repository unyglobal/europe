// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"burgas","repository":"europe","path":"bulgaria/burgas","depth":2,"parent":"bulgaria","children":["aytos","karnobat"]});
export const childModules = Object.freeze({"aytos":"./aytos/aytos.js","karnobat":"./karnobat/karnobat.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
