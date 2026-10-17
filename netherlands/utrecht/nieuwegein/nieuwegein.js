// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"nieuwegein","repository":"europe","path":"netherlands/utrecht/nieuwegein","depth":3,"parent":"netherlands/utrecht","children":["jutphaas"]});
export const childModules = Object.freeze({"jutphaas":"./jutphaas/jutphaas.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
