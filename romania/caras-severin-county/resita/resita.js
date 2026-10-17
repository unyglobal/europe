// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"resita","repository":"europe","path":"romania/caras-severin-county/resita","depth":3,"parent":"romania/caras-severin-county","children":["resita-montana","resita-romana"]});
export const childModules = Object.freeze({"resita-montana":"./resita-montana/resita-montana.js","resita-romana":"./resita-romana/resita-romana.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
