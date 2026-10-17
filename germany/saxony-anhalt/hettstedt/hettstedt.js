// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hettstedt","repository":"europe","path":"germany/saxony-anhalt/hettstedt","depth":3,"parent":"germany/saxony-anhalt","children":["kupferberg"]});
export const childModules = Object.freeze({"kupferberg":"./kupferberg/kupferberg.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
