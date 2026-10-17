// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"castiglione-delle-stiviere","repository":"europe","path":"italy/lombardy/castiglione-delle-stiviere","depth":3,"parent":"italy/lombardy","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
