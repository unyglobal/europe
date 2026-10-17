// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"isle-of-lewis","repository":"europe","path":"united-kingdom/scotland/isle-of-lewis","depth":3,"parent":"united-kingdom/scotland","children":["guershader","laxdale"]});
export const childModules = Object.freeze({"guershader":"./guershader/guershader.js","laxdale":"./laxdale/laxdale.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
