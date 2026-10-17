// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tizenharomvaros","repository":"europe","path":"hungary/vas-county/sarvar/tizenharomvaros","depth":4,"parent":"hungary/vas-county/sarvar","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
