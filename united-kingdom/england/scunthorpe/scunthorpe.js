// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"scunthorpe","repository":"europe","path":"united-kingdom/england/scunthorpe","depth":3,"parent":"united-kingdom/england","children":["lincoln-gardens","old-brumby"]});
export const childModules = Object.freeze({"lincoln-gardens":"./lincoln-gardens/lincoln-gardens.js","old-brumby":"./old-brumby/old-brumby.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
