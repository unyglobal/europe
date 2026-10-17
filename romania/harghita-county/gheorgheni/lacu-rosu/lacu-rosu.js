// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lacu-rosu","repository":"europe","path":"romania/harghita-county/gheorgheni/lacu-rosu","depth":4,"parent":"romania/harghita-county/gheorgheni","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
