// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"limburg","repository":"europe","path":"netherlands/limburg","depth":2,"parent":"netherlands","children":["blerick","brunssum","geleen","gennep","heerlen","hoensbroek","kerkrade","maastricht","roermond","sittard","tegelen","venlo","venray","weert"]});
export const childModules = Object.freeze({"blerick":"./blerick/blerick.js","brunssum":"./brunssum/brunssum.js","geleen":"./geleen/geleen.js","gennep":"./gennep/gennep.js","heerlen":"./heerlen/heerlen.js","hoensbroek":"./hoensbroek/hoensbroek.js","kerkrade":"./kerkrade/kerkrade.js","maastricht":"./maastricht/maastricht.js","roermond":"./roermond/roermond.js","sittard":"./sittard/sittard.js","tegelen":"./tegelen/tegelen.js","venlo":"./venlo/venlo.js","venray":"./venray/venray.js","weert":"./weert/weert.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
