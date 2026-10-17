// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"studenichani","repository":"europe","path":"north-macedonia/studenichani","depth":2,"parent":"north-macedonia","children":["studenicani"]});
export const childModules = Object.freeze({"studenicani":"./studenicani/studenicani.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
