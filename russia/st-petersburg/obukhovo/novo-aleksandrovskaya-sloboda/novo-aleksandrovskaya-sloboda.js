// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"novo-aleksandrovskaya-sloboda","repository":"europe","path":"russia/st-petersburg/obukhovo/novo-aleksandrovskaya-sloboda","depth":4,"parent":"russia/st-petersburg/obukhovo","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
