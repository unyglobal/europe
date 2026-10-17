// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"krzyki-partynice","repository":"europe","path":"poland/lower-silesia/krzyki-partynice","depth":3,"parent":"poland/lower-silesia","children":["krzyki"]});
export const childModules = Object.freeze({"krzyki":"./krzyki/krzyki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
