// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"muschberg-en-geestenberg","repository":"europe","path":"netherlands/north-brabant/tongelre/muschberg-en-geestenberg","depth":4,"parent":"netherlands/north-brabant/tongelre","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
