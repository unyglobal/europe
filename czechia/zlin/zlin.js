// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"zlin","repository":"europe","path":"czechia/zlin","depth":2,"parent":"czechia","children":["kromeriz","otrokovice","roznov-pod-radhostem","uherske-hradiste","uhersky-brod","valasske-mezirici","vsetin"]});
export const childModules = Object.freeze({"kromeriz":"./kromeriz/kromeriz.js","otrokovice":"./otrokovice/otrokovice.js","roznov-pod-radhostem":"./roznov-pod-radhostem/roznov-pod-radhostem.js","uherske-hradiste":"./uherske-hradiste/uherske-hradiste.js","uhersky-brod":"./uhersky-brod/uhersky-brod.js","valasske-mezirici":"./valasske-mezirici/valasske-mezirici.js","vsetin":"./vsetin/vsetin.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
