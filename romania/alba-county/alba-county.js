// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"alba-county","repository":"europe","path":"romania/alba-county","depth":2,"parent":"romania","children":["aiud","alba-iulia","blaj","cugir","ocna-mures","sebes"]});
export const childModules = Object.freeze({"aiud":"./aiud/aiud.js","alba-iulia":"./alba-iulia/alba-iulia.js","blaj":"./blaj/blaj.js","cugir":"./cugir/cugir.js","ocna-mures":"./ocna-mures/ocna-mures.js","sebes":"./sebes/sebes.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
