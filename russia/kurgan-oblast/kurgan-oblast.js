// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kurgan-oblast","repository":"europe","path":"russia/kurgan-oblast","depth":2,"parent":"russia","children":["kataysk","kurgan","kurtamysh","shadrinsk","shumikha"]});
export const childModules = Object.freeze({"kataysk":"./kataysk/kataysk.js","kurgan":"./kurgan/kurgan.js","kurtamysh":"./kurtamysh/kurtamysh.js","shadrinsk":"./shadrinsk/shadrinsk.js","shumikha":"./shumikha/shumikha.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
