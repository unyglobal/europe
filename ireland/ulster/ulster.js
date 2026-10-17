// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"ulster","repository":"europe","path":"ireland/ulster","depth":2,"parent":"ireland","children":["letterkenny"]});
export const childModules = Object.freeze({"letterkenny":"./letterkenny/letterkenny.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
