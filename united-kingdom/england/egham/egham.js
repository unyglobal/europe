// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"egham","repository":"europe","path":"united-kingdom/england/egham","depth":3,"parent":"united-kingdom/england","children":["ripley-springs"]});
export const childModules = Object.freeze({"ripley-springs":"./ripley-springs/ripley-springs.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
