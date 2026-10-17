// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"upper-austria","repository":"europe","path":"austria/upper-austria","depth":2,"parent":"austria","children":["ansfelden","linz","steyr","traun","wels"]});
export const childModules = Object.freeze({"ansfelden":"./ansfelden/ansfelden.js","linz":"./linz/linz.js","steyr":"./steyr/steyr.js","traun":"./traun/traun.js","wels":"./wels/wels.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
