// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"presov-region","repository":"europe","path":"slovakia/presov-region","depth":2,"parent":"slovakia","children":["bardejov","humenne","kezmarok","poprad","presov","snina","stara-lubovna","vranov-nad-toplou"]});
export const childModules = Object.freeze({"bardejov":"./bardejov/bardejov.js","humenne":"./humenne/humenne.js","kezmarok":"./kezmarok/kezmarok.js","poprad":"./poprad/poprad.js","presov":"./presov/presov.js","snina":"./snina/snina.js","stara-lubovna":"./stara-lubovna/stara-lubovna.js","vranov-nad-toplou":"./vranov-nad-toplou/vranov-nad-toplou.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
