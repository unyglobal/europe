// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"minsk","repository":"europe","path":"belarus/minsk","depth":2,"parent":"belarus","children":["nesvizh","slutsk","smaliavicy","soligorsk","stowbtsy","vileyka","zaslawye"]});
export const childModules = Object.freeze({"nesvizh":"./nesvizh/nesvizh.js","slutsk":"./slutsk/slutsk.js","smaliavicy":"./smaliavicy/smaliavicy.js","soligorsk":"./soligorsk/soligorsk.js","stowbtsy":"./stowbtsy/stowbtsy.js","vileyka":"./vileyka/vileyka.js","zaslawye":"./zaslawye/zaslawye.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
