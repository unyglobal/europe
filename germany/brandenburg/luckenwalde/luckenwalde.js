// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"luckenwalde","repository":"europe","path":"germany/brandenburg/luckenwalde","depth":3,"parent":"germany/brandenburg","children":["vor-dem-juterborger-tor"]});
export const childModules = Object.freeze({"vor-dem-juterborger-tor":"./vor-dem-juterborger-tor/vor-dem-juterborger-tor.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
