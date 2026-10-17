// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"itzehoe","repository":"europe","path":"germany/schleswig-holstein/itzehoe","depth":3,"parent":"germany/schleswig-holstein","children":["leuenkamp"]});
export const childModules = Object.freeze({"leuenkamp":"./leuenkamp/leuenkamp.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
