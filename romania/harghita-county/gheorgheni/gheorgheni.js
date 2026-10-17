// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gheorgheni","repository":"europe","path":"romania/harghita-county/gheorgheni","depth":3,"parent":"romania/harghita-county","children":["ianco","lacu-rosu"]});
export const childModules = Object.freeze({"ianco":"./ianco/ianco.js","lacu-rosu":"./lacu-rosu/lacu-rosu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
