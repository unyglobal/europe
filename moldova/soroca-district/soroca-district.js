// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"soroca-district","repository":"europe","path":"moldova/soroca-district","depth":2,"parent":"moldova","children":["soroca"]});
export const childModules = Object.freeze({"soroca":"./soroca/soroca.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
