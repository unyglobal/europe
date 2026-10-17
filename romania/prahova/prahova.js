// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"prahova","repository":"europe","path":"romania/prahova","depth":2,"parent":"romania","children":["baicoi","breaza","campina","mizil","ploiesti"]});
export const childModules = Object.freeze({"baicoi":"./baicoi/baicoi.js","breaza":"./breaza/breaza.js","campina":"./campina/campina.js","mizil":"./mizil/mizil.js","ploiesti":"./ploiesti/ploiesti.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
