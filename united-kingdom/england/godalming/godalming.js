// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"godalming","repository":"europe","path":"united-kingdom/england/godalming","depth":3,"parent":"united-kingdom/england","children":["charterhouse","crownpits","frith-hill","holloway-hill","westbrook"]});
export const childModules = Object.freeze({"charterhouse":"./charterhouse/charterhouse.js","crownpits":"./crownpits/crownpits.js","frith-hill":"./frith-hill/frith-hill.js","holloway-hill":"./holloway-hill/holloway-hill.js","westbrook":"./westbrook/westbrook.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
