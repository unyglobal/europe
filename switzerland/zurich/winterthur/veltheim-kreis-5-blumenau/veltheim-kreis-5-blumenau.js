// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"veltheim-kreis-5-blumenau","repository":"europe","path":"switzerland/zurich/winterthur/veltheim-kreis-5-blumenau","depth":4,"parent":"switzerland/zurich/winterthur","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
