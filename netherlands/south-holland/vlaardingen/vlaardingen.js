// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vlaardingen","repository":"europe","path":"netherlands/south-holland/vlaardingen","depth":3,"parent":"netherlands/south-holland","children":["vlaardinger-ambacht"]});
export const childModules = Object.freeze({"vlaardinger-ambacht":"./vlaardinger-ambacht/vlaardinger-ambacht.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
