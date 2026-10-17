// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"olomouc-region","repository":"europe","path":"czechia/olomouc-region","depth":2,"parent":"czechia","children":["hranice","olomouc","prerov","prostejov","sumperk"]});
export const childModules = Object.freeze({"hranice":"./hranice/hranice.js","olomouc":"./olomouc/olomouc.js","prerov":"./prerov/prerov.js","prostejov":"./prostejov/prostejov.js","sumperk":"./sumperk/sumperk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
