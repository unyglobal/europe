// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"primorje-gorski-kotar","repository":"europe","path":"croatia/primorje-gorski-kotar","depth":2,"parent":"croatia","children":["rijeka"]});
export const childModules = Object.freeze({"rijeka":"./rijeka/rijeka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
