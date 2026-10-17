// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bendorf","repository":"europe","path":"germany/rheinland-pfalz/bendorf","depth":3,"parent":"germany/rheinland-pfalz","children":["mulhofen"]});
export const childModules = Object.freeze({"mulhofen":"./mulhofen/mulhofen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
