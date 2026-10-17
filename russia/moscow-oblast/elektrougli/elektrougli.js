// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"elektrougli","repository":"europe","path":"russia/moscow-oblast/elektrougli","depth":3,"parent":"russia/moscow-oblast","children":["kamchatka","safonovo"]});
export const childModules = Object.freeze({"kamchatka":"./kamchatka/kamchatka.js","safonovo":"./safonovo/safonovo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
