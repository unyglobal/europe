// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"new-milton","repository":"europe","path":"united-kingdom/england/new-milton","depth":3,"parent":"united-kingdom/england","children":["old-milton"]});
export const childModules = Object.freeze({"old-milton":"./old-milton/old-milton.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
