// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"vilnius","repository":"europe","path":"lithuania/vilnius","depth":2,"parent":"lithuania","children":["antakalnis","fabijoniskes","justiniskes","karoliniskes","lazdynai","naujamiestis","naujininkai","naujoji-vilnia","pasilaiciai","pilaite","seskine","ukmerge","vilkpede"]});
export const childModules = Object.freeze({"antakalnis":"./antakalnis/antakalnis.js","fabijoniskes":"./fabijoniskes/fabijoniskes.js","justiniskes":"./justiniskes/justiniskes.js","karoliniskes":"./karoliniskes/karoliniskes.js","lazdynai":"./lazdynai/lazdynai.js","naujamiestis":"./naujamiestis/naujamiestis.js","naujininkai":"./naujininkai/naujininkai.js","naujoji-vilnia":"./naujoji-vilnia/naujoji-vilnia.js","pasilaiciai":"./pasilaiciai/pasilaiciai.js","pilaite":"./pilaite/pilaite.js","seskine":"./seskine/seskine.js","ukmerge":"./ukmerge/ukmerge.js","vilkpede":"./vilkpede/vilkpede.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
