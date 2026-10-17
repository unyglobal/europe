// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bury","repository":"europe","path":"united-kingdom/england/bury","depth":3,"parent":"united-kingdom/england","children":["bury-ground","fernhill","higher-woodhill","seedfield","tentersfield","woodfields","woodhill","woodhill-fold"]});
export const childModules = Object.freeze({"bury-ground":"./bury-ground/bury-ground.js","fernhill":"./fernhill/fernhill.js","higher-woodhill":"./higher-woodhill/higher-woodhill.js","seedfield":"./seedfield/seedfield.js","tentersfield":"./tentersfield/tentersfield.js","woodfields":"./woodfields/woodfields.js","woodhill":"./woodhill/woodhill.js","woodhill-fold":"./woodhill-fold/woodhill-fold.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
