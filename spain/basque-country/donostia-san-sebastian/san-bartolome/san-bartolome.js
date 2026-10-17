// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"san-bartolome","repository":"europe","path":"spain/basque-country/donostia-san-sebastian/san-bartolome","depth":4,"parent":"spain/basque-country/donostia-san-sebastian","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
