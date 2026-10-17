// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"craigavon","repository":"europe","path":"united-kingdom/northern-ireland/craigavon","depth":3,"parent":"united-kingdom/northern-ireland","children":["knockmenagh"]});
export const childModules = Object.freeze({"knockmenagh":"./knockmenagh/knockmenagh.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
