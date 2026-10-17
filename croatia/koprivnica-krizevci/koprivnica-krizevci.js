// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"koprivnica-krizevci","repository":"europe","path":"croatia/koprivnica-krizevci","depth":2,"parent":"croatia","children":["koprivnica"]});
export const childModules = Object.freeze({"koprivnica":"./koprivnica/koprivnica.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
