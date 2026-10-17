// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"veenendaal","repository":"europe","path":"netherlands/utrecht/veenendaal","depth":3,"parent":"netherlands/utrecht","children":["t-horntie"]});
export const childModules = Object.freeze({"t-horntie":"./t-horntie/t-horntie.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
