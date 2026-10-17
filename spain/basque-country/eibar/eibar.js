// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"eibar","repository":"europe","path":"spain/basque-country/eibar","depth":3,"parent":"spain/basque-country","children":["amana","ardantza","ipuruaga","matxaria","miraflores","txonta","urkidi"]});
export const childModules = Object.freeze({"amana":"./amana/amana.js","ardantza":"./ardantza/ardantza.js","ipuruaga":"./ipuruaga/ipuruaga.js","matxaria":"./matxaria/matxaria.js","miraflores":"./miraflores/miraflores.js","txonta":"./txonta/txonta.js","urkidi":"./urkidi/urkidi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
