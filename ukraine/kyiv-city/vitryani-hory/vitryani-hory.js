// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vitryani-hory","repository":"europe","path":"ukraine/kyiv-city/vitryani-hory","depth":3,"parent":"ukraine/kyiv-city","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
