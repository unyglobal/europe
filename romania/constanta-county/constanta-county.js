// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"constanta-county","repository":"europe","path":"romania/constanta-county","depth":2,"parent":"romania","children":["cernavoda","constanta","mangalia","medgidia","navodari"]});
export const childModules = Object.freeze({"cernavoda":"./cernavoda/cernavoda.js","constanta":"./constanta/constanta.js","mangalia":"./mangalia/mangalia.js","medgidia":"./medgidia/medgidia.js","navodari":"./navodari/navodari.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
