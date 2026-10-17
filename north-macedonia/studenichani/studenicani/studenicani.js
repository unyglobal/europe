// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"studenicani","repository":"europe","path":"north-macedonia/studenichani/studenicani","depth":3,"parent":"north-macedonia/studenichani","children":["krnjevo"]});
export const childModules = Object.freeze({"krnjevo":"./krnjevo/krnjevo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
