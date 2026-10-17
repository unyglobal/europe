// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"asti","repository":"europe","path":"italy/piedmont/asti","depth":3,"parent":"italy/piedmont","children":["borgo-san-pietro"]});
export const childModules = Object.freeze({"borgo-san-pietro":"./borgo-san-pietro/borgo-san-pietro.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
