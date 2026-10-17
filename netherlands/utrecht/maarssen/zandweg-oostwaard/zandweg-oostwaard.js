// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zandweg-oostwaard","repository":"europe","path":"netherlands/utrecht/maarssen/zandweg-oostwaard","depth":4,"parent":"netherlands/utrecht/maarssen","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
