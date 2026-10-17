// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lauda-konigshofen","repository":"europe","path":"germany/baden-wurttemberg/lauda-konigshofen","depth":3,"parent":"germany/baden-wurttemberg","children":["lauda"]});
export const childModules = Object.freeze({"lauda":"./lauda/lauda.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
