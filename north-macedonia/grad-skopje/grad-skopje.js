// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"grad-skopje","repository":"europe","path":"north-macedonia/grad-skopje","depth":2,"parent":"north-macedonia","children":["butel","cair","gjorce-petro","kisela-voda","saraj","skopje","suto-orizare"]});
export const childModules = Object.freeze({"butel":"./butel/butel.js","cair":"./cair/cair.js","gjorce-petro":"./gjorce-petro/gjorce-petro.js","kisela-voda":"./kisela-voda/kisela-voda.js","saraj":"./saraj/saraj.js","skopje":"./skopje/skopje.js","suto-orizare":"./suto-orizare/suto-orizare.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
