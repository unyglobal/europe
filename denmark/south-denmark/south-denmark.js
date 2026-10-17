// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"south-denmark","repository":"europe","path":"denmark/south-denmark","depth":2,"parent":"denmark","children":["aabenraa","esbjerg","fredericia","haderslev","kolding","middelfart","nyborg","odense","s-nderborg","svendborg","t-nder","vejle"]});
export const childModules = Object.freeze({"aabenraa":"./aabenraa/aabenraa.js","esbjerg":"./esbjerg/esbjerg.js","fredericia":"./fredericia/fredericia.js","haderslev":"./haderslev/haderslev.js","kolding":"./kolding/kolding.js","middelfart":"./middelfart/middelfart.js","nyborg":"./nyborg/nyborg.js","odense":"./odense/odense.js","s-nderborg":"./s-nderborg/s-nderborg.js","svendborg":"./svendborg/svendborg.js","t-nder":"./t-nder/t-nder.js","vejle":"./vejle/vejle.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
