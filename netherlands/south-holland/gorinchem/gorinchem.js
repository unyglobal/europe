// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gorinchem","repository":"europe","path":"netherlands/south-holland/gorinchem","depth":3,"parent":"netherlands/south-holland","children":["avelingen"]});
export const childModules = Object.freeze({"avelingen":"./avelingen/avelingen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
