// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"csongrad","repository":"europe","path":"hungary/csongrad","depth":2,"parent":"hungary","children":["hodmezovasarhely","mako","szeged","szentes"]});
export const childModules = Object.freeze({"hodmezovasarhely":"./hodmezovasarhely/hodmezovasarhely.js","mako":"./mako/mako.js","szeged":"./szeged/szeged.js","szentes":"./szentes/szentes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
