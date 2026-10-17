// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"valais","repository":"europe","path":"switzerland/valais","depth":2,"parent":"switzerland","children":["martigny-ville","monthey","sierre","sitten"]});
export const childModules = Object.freeze({"martigny-ville":"./martigny-ville/martigny-ville.js","monthey":"./monthey/monthey.js","sierre":"./sierre/sierre.js","sitten":"./sitten/sitten.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
