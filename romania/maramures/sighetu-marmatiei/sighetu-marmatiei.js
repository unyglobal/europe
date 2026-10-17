// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sighetu-marmatiei","repository":"europe","path":"romania/maramures/sighetu-marmatiei","depth":3,"parent":"romania/maramures","children":["campu-negru","dealu-cetatii","dobaes","hanesti","sugau","vadu-izei","valea-ungurului"]});
export const childModules = Object.freeze({"campu-negru":"./campu-negru/campu-negru.js","dealu-cetatii":"./dealu-cetatii/dealu-cetatii.js","dobaes":"./dobaes/dobaes.js","hanesti":"./hanesti/hanesti.js","sugau":"./sugau/sugau.js","vadu-izei":"./vadu-izei/vadu-izei.js","valea-ungurului":"./valea-ungurului/valea-ungurului.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
