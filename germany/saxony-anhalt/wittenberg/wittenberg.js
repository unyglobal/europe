// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wittenberg","repository":"europe","path":"germany/saxony-anhalt/wittenberg","depth":3,"parent":"germany/saxony-anhalt","children":["schlo-vorstadt"]});
export const childModules = Object.freeze({"schlo-vorstadt":"./schlo-vorstadt/schlo-vorstadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
