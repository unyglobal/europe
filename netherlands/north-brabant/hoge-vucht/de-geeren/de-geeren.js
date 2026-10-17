// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"de-geeren","repository":"europe","path":"netherlands/north-brabant/hoge-vucht/de-geeren","depth":4,"parent":"netherlands/north-brabant/hoge-vucht","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
