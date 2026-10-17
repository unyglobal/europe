// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"anjala","repository":"europe","path":"finland/kymenlaakso/anjala","depth":3,"parent":"finland/kymenlaakso","children":["tullinmaki"]});
export const childModules = Object.freeze({"tullinmaki":"./tullinmaki/tullinmaki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
