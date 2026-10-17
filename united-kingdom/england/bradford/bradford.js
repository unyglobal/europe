// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bradford","repository":"europe","path":"united-kingdom/england/bradford","depth":3,"parent":"united-kingdom/england","children":["broomfields","eastbrook","wapping"]});
export const childModules = Object.freeze({"broomfields":"./broomfields/broomfields.js","eastbrook":"./eastbrook/eastbrook.js","wapping":"./wapping/wapping.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
