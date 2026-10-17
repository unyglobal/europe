// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bloxwich","repository":"europe","path":"united-kingdom/england/bloxwich","depth":3,"parent":"united-kingdom/england","children":["blakenall-heath","dudley-s-fields","wallington-heath"]});
export const childModules = Object.freeze({"blakenall-heath":"./blakenall-heath/blakenall-heath.js","dudley-s-fields":"./dudley-s-fields/dudley-s-fields.js","wallington-heath":"./wallington-heath/wallington-heath.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
