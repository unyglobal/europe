// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"derby","repository":"europe","path":"united-kingdom/england/derby","depth":3,"parent":"united-kingdom/england","children":["the-holmes"]});
export const childModules = Object.freeze({"the-holmes":"./the-holmes/the-holmes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
