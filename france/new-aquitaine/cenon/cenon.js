// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cenon","repository":"europe","path":"france/new-aquitaine/cenon","depth":3,"parent":"france/new-aquitaine","children":["brazza"]});
export const childModules = Object.freeze({"brazza":"./brazza/brazza.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
