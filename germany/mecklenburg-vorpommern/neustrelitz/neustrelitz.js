// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"neustrelitz","repository":"europe","path":"germany/mecklenburg-vorpommern/neustrelitz","depth":3,"parent":"germany/mecklenburg-vorpommern","children":["kiefernheide"]});
export const childModules = Object.freeze({"kiefernheide":"./kiefernheide/kiefernheide.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
