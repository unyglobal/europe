// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rijeka","repository":"europe","path":"croatia/primorje-gorski-kotar/rijeka","depth":3,"parent":"croatia/primorje-gorski-kotar","children":["susak"]});
export const childModules = Object.freeze({"susak":"./susak/susak.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
