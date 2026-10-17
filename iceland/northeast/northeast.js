// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"northeast","repository":"europe","path":"iceland/northeast","depth":2,"parent":"iceland","children":["akureyri"]});
export const childModules = Object.freeze({"akureyri":"./akureyri/akureyri.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
