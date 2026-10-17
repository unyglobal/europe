// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nemyshlyanskyi","repository":"europe","path":"ukraine/kharkiv/nemyshlyanskyi","depth":3,"parent":"ukraine/kharkiv","children":["nemyshlya"]});
export const childModules = Object.freeze({"nemyshlya":"./nemyshlya/nemyshlya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
