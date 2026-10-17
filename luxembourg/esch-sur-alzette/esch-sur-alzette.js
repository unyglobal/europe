// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"esch-sur-alzette","repository":"europe","path":"luxembourg/esch-sur-alzette","depth":2,"parent":"luxembourg","children":["dudelange"]});
export const childModules = Object.freeze({"dudelange":"./dudelange/dudelange.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
