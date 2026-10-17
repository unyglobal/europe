// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"cathedral-s-quarter","repository":"europe","path":"united-kingdom/northern-ireland/belfast/cathedral-s-quarter","depth":4,"parent":"united-kingdom/northern-ireland/belfast","children":[]});
export const childModules = Object.freeze({});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
