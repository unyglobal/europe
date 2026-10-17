// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"scharnhorst","repository":"europe","path":"germany/north-rhine-westphalia/scharnhorst","depth":3,"parent":"germany/north-rhine-westphalia","children":["scharnhorst-ost"]});
export const childModules = Object.freeze({"scharnhorst-ost":"./scharnhorst-ost/scharnhorst-ost.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
