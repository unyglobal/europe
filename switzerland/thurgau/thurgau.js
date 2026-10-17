// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"thurgau","repository":"europe","path":"switzerland/thurgau","depth":2,"parent":"switzerland","children":["frauenfeld","kreuzlingen"]});
export const childModules = Object.freeze({"frauenfeld":"./frauenfeld/frauenfeld.js","kreuzlingen":"./kreuzlingen/kreuzlingen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
