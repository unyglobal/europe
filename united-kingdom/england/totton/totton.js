// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"totton","repository":"europe","path":"united-kingdom/england/totton","depth":3,"parent":"united-kingdom/england","children":["brokenford","rushington"]});
export const childModules = Object.freeze({"brokenford":"./brokenford/brokenford.js","rushington":"./rushington/rushington.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
