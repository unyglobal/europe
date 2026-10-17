// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zabbar","repository":"europe","path":"malta/haz-zabbar/zabbar","depth":3,"parent":"malta/haz-zabbar","children":["tal-amra","tal-awlija"]});
export const childModules = Object.freeze({"tal-amra":"./tal-amra/tal-amra.js","tal-awlija":"./tal-awlija/tal-awlija.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
