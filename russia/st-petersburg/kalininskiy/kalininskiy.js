// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kalininskiy","repository":"europe","path":"russia/st-petersburg/kalininskiy","depth":3,"parent":"russia/st-petersburg","children":["bol-shaya-kushelevka"]});
export const childModules = Object.freeze({"bol-shaya-kushelevka":"./bol-shaya-kushelevka/bol-shaya-kushelevka.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
