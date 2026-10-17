// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"budaors","repository":"europe","path":"hungary/pest-county/budaors","depth":3,"parent":"hungary/pest-county","children":["geisbardtdulo","mariavolgy"]});
export const childModules = Object.freeze({"geisbardtdulo":"./geisbardtdulo/geisbardtdulo.js","mariavolgy":"./mariavolgy/mariavolgy.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
