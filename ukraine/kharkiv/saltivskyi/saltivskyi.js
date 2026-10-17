// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"saltivskyi","repository":"europe","path":"ukraine/kharkiv/saltivskyi","depth":3,"parent":"ukraine/kharkiv","children":["imeni-kirova"]});
export const childModules = Object.freeze({"imeni-kirova":"./imeni-kirova/imeni-kirova.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
