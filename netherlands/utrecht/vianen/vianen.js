// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vianen","repository":"europe","path":"netherlands/utrecht/vianen","depth":3,"parent":"netherlands/utrecht","children":["de-hagen"]});
export const childModules = Object.freeze({"de-hagen":"./de-hagen/de-hagen.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
