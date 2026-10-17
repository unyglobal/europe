// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"caras-severin-county","repository":"europe","path":"romania/caras-severin-county","depth":2,"parent":"romania","children":["bocsa","caransebes","resita"]});
export const childModules = Object.freeze({"bocsa":"./bocsa/bocsa.js","caransebes":"./caransebes/caransebes.js","resita":"./resita/resita.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
