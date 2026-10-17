// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"lithuania","repository":"europe","path":"lithuania","depth":1,"parent":"","children":["alytus","kaunas","klaipeda-county","marijampole-county","panevezys","siauliai","taurage-county","telsiai","utena","vilnius"]});
export const childModules = Object.freeze({"alytus":"./alytus/alytus.js","kaunas":"./kaunas/kaunas.js","klaipeda-county":"./klaipeda-county/klaipeda-county.js","marijampole-county":"./marijampole-county/marijampole-county.js","panevezys":"./panevezys/panevezys.js","siauliai":"./siauliai/siauliai.js","taurage-county":"./taurage-county/taurage-county.js","telsiai":"./telsiai/telsiai.js","utena":"./utena/utena.js","vilnius":"./vilnius/vilnius.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
