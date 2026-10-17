// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dresden","repository":"europe","path":"germany/saxony/dresden","depth":3,"parent":"germany/saxony","children":["altstadt","innere-altstadt"]});
export const childModules = Object.freeze({"altstadt":"./altstadt/altstadt.js","innere-altstadt":"./innere-altstadt/innere-altstadt.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
