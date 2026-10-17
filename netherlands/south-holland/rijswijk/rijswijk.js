// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"rijswijk","repository":"europe","path":"netherlands/south-holland/rijswijk","depth":3,"parent":"netherlands/south-holland","children":["plaspoelpolder"]});
export const childModules = Object.freeze({"plaspoelpolder":"./plaspoelpolder/plaspoelpolder.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
