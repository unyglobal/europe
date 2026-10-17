// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hansestadt-salzwedel","repository":"europe","path":"germany/saxony-anhalt/hansestadt-salzwedel","depth":3,"parent":"germany/saxony-anhalt","children":["altstadt","neustadt"]});
export const childModules = Object.freeze({"altstadt":"./altstadt/altstadt.js","neustadt":"./neustadt/neustadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
