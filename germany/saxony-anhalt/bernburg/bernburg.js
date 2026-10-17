// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bernburg","repository":"europe","path":"germany/saxony-anhalt/bernburg","depth":3,"parent":"germany/saxony-anhalt","children":["altstadt","bergstadt"]});
export const childModules = Object.freeze({"altstadt":"./altstadt/altstadt.js","bergstadt":"./bergstadt/bergstadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
