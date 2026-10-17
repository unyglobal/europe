// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"coatbridge","repository":"europe","path":"united-kingdom/scotland/coatbridge","depth":3,"parent":"united-kingdom/scotland","children":["barrowfield","blairhill","dunbeth","dundyvan","gartsherrie","greenhill","langloan","summerlee","sunnyside"]});
export const childModules = Object.freeze({"barrowfield":"./barrowfield/barrowfield.js","blairhill":"./blairhill/blairhill.js","dunbeth":"./dunbeth/dunbeth.js","dundyvan":"./dundyvan/dundyvan.js","gartsherrie":"./gartsherrie/gartsherrie.js","greenhill":"./greenhill/greenhill.js","langloan":"./langloan/langloan.js","summerlee":"./summerlee/summerlee.js","sunnyside":"./sunnyside/sunnyside.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
