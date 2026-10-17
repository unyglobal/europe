// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"imatra","repository":"europe","path":"finland/south-karelia/imatra","depth":3,"parent":"finland/south-karelia","children":["imatrankoski","liisanpuisto","onnela","saareksiinmaki"]});
export const childModules = Object.freeze({"imatrankoski":"./imatrankoski/imatrankoski.js","liisanpuisto":"./liisanpuisto/liisanpuisto.js","onnela":"./onnela/onnela.js","saareksiinmaki":"./saareksiinmaki/saareksiinmaki.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
