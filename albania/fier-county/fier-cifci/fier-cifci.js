// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"fier-cifci","repository":"europe","path":"albania/fier-county/fier-cifci","depth":3,"parent":"albania/fier-county","children":["petove-e-re"]});
export const childModules = Object.freeze({"petove-e-re":"./petove-e-re/petove-e-re.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
