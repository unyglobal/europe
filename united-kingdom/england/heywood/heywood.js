// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"heywood","repository":"europe","path":"united-kingdom/england/heywood","depth":3,"parent":"united-kingdom/england","children":["back-o-th-moss","bottom-o-th-brow","broadfield","hooley-brow"]});
export const childModules = Object.freeze({"back-o-th-moss":"./back-o-th-moss/back-o-th-moss.js","bottom-o-th-brow":"./bottom-o-th-brow/bottom-o-th-brow.js","broadfield":"./broadfield/broadfield.js","hooley-brow":"./hooley-brow/hooley-brow.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
