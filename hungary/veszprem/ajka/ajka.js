// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ajka","repository":"europe","path":"hungary/veszprem/ajka","depth":3,"parent":"hungary/veszprem","children":["borkoskut"]});
export const childModules = Object.freeze({"borkoskut":"./borkoskut/borkoskut.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
