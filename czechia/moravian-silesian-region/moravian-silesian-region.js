// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"moravian-silesian-region","repository":"europe","path":"czechia/moravian-silesian-region","depth":2,"parent":"czechia","children":["bohumin","cesky-tesin","frydek-mistek","havirov","karvina","koprivnice","krnov","novy-jicin","opava","orlova","ostrava","stary-bohumin","trinec"]});
export const childModules = Object.freeze({"bohumin":"./bohumin/bohumin.js","cesky-tesin":"./cesky-tesin/cesky-tesin.js","frydek-mistek":"./frydek-mistek/frydek-mistek.js","havirov":"./havirov/havirov.js","karvina":"./karvina/karvina.js","koprivnice":"./koprivnice/koprivnice.js","krnov":"./krnov/krnov.js","novy-jicin":"./novy-jicin/novy-jicin.js","opava":"./opava/opava.js","orlova":"./orlova/orlova.js","ostrava":"./ostrava/ostrava.js","stary-bohumin":"./stary-bohumin/stary-bohumin.js","trinec":"./trinec/trinec.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
