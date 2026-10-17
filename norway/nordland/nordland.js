// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nordland","repository":"europe","path":"norway/nordland","depth":2,"parent":"norway","children":["bod","mo-i-rana"]});
export const childModules = Object.freeze({"bod":"./bod/bod.js","mo-i-rana":"./mo-i-rana/mo-i-rana.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
