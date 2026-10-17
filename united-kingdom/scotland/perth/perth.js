// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"perth","repository":"europe","path":"united-kingdom/scotland/perth","depth":3,"parent":"united-kingdom/scotland","children":["bridgend"]});
export const childModules = Object.freeze({"bridgend":"./bridgend/bridgend.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
