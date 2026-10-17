// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"glattbrugg-wydacker-bettacker-lattenwiesen","repository":"europe","path":"switzerland/zurich/opfikon/glattbrugg-wydacker-bettacker-lattenwiesen","depth":4,"parent":"switzerland/zurich/opfikon","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
