// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"soest","repository":"europe","path":"netherlands/utrecht/soest","depth":3,"parent":"netherlands/utrecht","children":["eng"]});
export const childModules = Object.freeze({"eng":"./eng/eng.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
