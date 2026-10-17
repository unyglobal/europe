// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"blaydon-on-tyne","repository":"europe","path":"united-kingdom/england/blaydon-on-tyne","depth":3,"parent":"united-kingdom/england","children":["blaydon-haughs"]});
export const childModules = Object.freeze({"blaydon-haughs":"./blaydon-haughs/blaydon-haughs.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
