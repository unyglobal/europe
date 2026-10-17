// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"trentino-alto-adige","repository":"europe","path":"italy/trentino-alto-adige","depth":2,"parent":"italy","children":["bolzano","bressanone","eppan","merano","riva-del-garda","rovereto","trento"]});
export const childModules = Object.freeze({"bolzano":"./bolzano/bolzano.js","bressanone":"./bressanone/bressanone.js","eppan":"./eppan/eppan.js","merano":"./merano/merano.js","riva-del-garda":"./riva-del-garda/riva-del-garda.js","rovereto":"./rovereto/rovereto.js","trento":"./trento/trento.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
