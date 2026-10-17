// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"soroca","repository":"europe","path":"moldova/soroca-district/soroca","depth":3,"parent":"moldova/soroca-district","children":["dealul-tiganilor"]});
export const childModules = Object.freeze({"dealul-tiganilor":"./dealul-tiganilor/dealul-tiganilor.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
