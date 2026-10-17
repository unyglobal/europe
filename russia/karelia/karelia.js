// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karelia","repository":"europe","path":"russia/karelia","depth":2,"parent":"russia","children":["kondopoga","kostomuksha","medvezh-yegorsk","petrozavodsk","segezha","sortavala"]});
export const childModules = Object.freeze({"kondopoga":"./kondopoga/kondopoga.js","kostomuksha":"./kostomuksha/kostomuksha.js","medvezh-yegorsk":"./medvezh-yegorsk/medvezh-yegorsk.js","petrozavodsk":"./petrozavodsk/petrozavodsk.js","segezha":"./segezha/segezha.js","sortavala":"./sortavala/sortavala.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
