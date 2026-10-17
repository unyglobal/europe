// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"szazhalombatta","repository":"europe","path":"hungary/pest-county/szazhalombatta","depth":3,"parent":"hungary/pest-county","children":["ernyeitanya","latymanyosdulo","ledinadulo","roviddulo"]});
export const childModules = Object.freeze({"ernyeitanya":"./ernyeitanya/ernyeitanya.js","latymanyosdulo":"./latymanyosdulo/latymanyosdulo.js","ledinadulo":"./ledinadulo/ledinadulo.js","roviddulo":"./roviddulo/roviddulo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
