// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"casco-historico-de-vicalvaro","repository":"europe","path":"spain/madrid/casco-historico-de-vicalvaro","depth":3,"parent":"spain/madrid","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
