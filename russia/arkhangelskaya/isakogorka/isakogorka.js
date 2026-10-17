// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"isakogorka","repository":"europe","path":"russia/arkhangelskaya/isakogorka","depth":3,"parent":"russia/arkhangelskaya","children":["dinamo"]});
export const childModules = Object.freeze({"dinamo":"./dinamo/dinamo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
