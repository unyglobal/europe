// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hartlepool","repository":"europe","path":"united-kingdom/england/hartlepool","depth":3,"parent":"united-kingdom/england","children":["bellevue","old-town","stranton"]});
export const childModules = Object.freeze({"bellevue":"./bellevue/bellevue.js","old-town":"./old-town/old-town.js","stranton":"./stranton/stranton.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
