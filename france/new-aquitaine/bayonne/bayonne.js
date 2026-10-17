// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bayonne","repository":"europe","path":"france/new-aquitaine/bayonne","depth":3,"parent":"france/new-aquitaine","children":["allees-marines","saint-esprit"]});
export const childModules = Object.freeze({"allees-marines":"./allees-marines/allees-marines.js","saint-esprit":"./saint-esprit/saint-esprit.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
