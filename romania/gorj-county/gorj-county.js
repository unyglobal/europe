// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"gorj-county","repository":"europe","path":"romania/gorj-county","depth":2,"parent":"romania","children":["motru","targu-jiu"]});
export const childModules = Object.freeze({"motru":"./motru/motru.js","targu-jiu":"./targu-jiu/targu-jiu.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
