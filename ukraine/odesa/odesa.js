// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"odesa","repository":"europe","path":"ukraine/odesa","depth":2,"parent":"ukraine","children":["balta","bilhorod-dnistrovskyi","bolhrad","cheremushky","chornomors-k","izmayil","kiliya","pivdenne","podilsk","reni","rozdilna"]});
export const childModules = Object.freeze({"balta":"./balta/balta.js","bilhorod-dnistrovskyi":"./bilhorod-dnistrovskyi/bilhorod-dnistrovskyi.js","bolhrad":"./bolhrad/bolhrad.js","cheremushky":"./cheremushky/cheremushky.js","chornomors-k":"./chornomors-k/chornomors-k.js","izmayil":"./izmayil/izmayil.js","kiliya":"./kiliya/kiliya.js","pivdenne":"./pivdenne/pivdenne.js","podilsk":"./podilsk/podilsk.js","reni":"./reni/reni.js","rozdilna":"./rozdilna/rozdilna.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
