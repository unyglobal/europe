// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"split-dalmatia","repository":"europe","path":"croatia/split-dalmatia","depth":2,"parent":"croatia","children":["solin","split"]});
export const childModules = Object.freeze({"solin":"./solin/solin.js","split":"./split/split.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
