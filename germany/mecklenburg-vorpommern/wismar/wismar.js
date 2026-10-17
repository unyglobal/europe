// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"wismar","repository":"europe","path":"germany/mecklenburg-vorpommern/wismar","depth":3,"parent":"germany/mecklenburg-vorpommern","children":["altstadt","weidendamm","wismar-west"]});
export const childModules = Object.freeze({"altstadt":"./altstadt/altstadt.js","weidendamm":"./weidendamm/weidendamm.js","wismar-west":"./wismar-west/wismar-west.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
