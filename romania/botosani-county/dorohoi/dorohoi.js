// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dorohoi","repository":"europe","path":"romania/botosani-county/dorohoi","depth":3,"parent":"romania/botosani-county","children":["iorga","liveni-loturi","loturi-ungureanu"]});
export const childModules = Object.freeze({"iorga":"./iorga/iorga.js","liveni-loturi":"./liveni-loturi/liveni-loturi.js","loturi-ungureanu":"./loturi-ungureanu/loturi-ungureanu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
