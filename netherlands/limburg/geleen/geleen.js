// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"geleen","repository":"europe","path":"netherlands/limburg/geleen","depth":3,"parent":"netherlands/limburg","children":["krawinkel"]});
export const childModules = Object.freeze({"krawinkel":"./krawinkel/krawinkel.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
