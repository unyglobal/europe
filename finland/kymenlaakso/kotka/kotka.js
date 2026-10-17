// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kotka","repository":"europe","path":"finland/kymenlaakso/kotka","depth":3,"parent":"finland/kymenlaakso","children":["kotkansaari","vasikkasaari"]});
export const childModules = Object.freeze({"kotkansaari":"./kotkansaari/kotkansaari.js","vasikkasaari":"./vasikkasaari/vasikkasaari.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
