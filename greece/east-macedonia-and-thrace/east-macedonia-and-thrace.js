// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"east-macedonia-and-thrace","repository":"europe","path":"greece/east-macedonia-and-thrace","depth":2,"parent":"greece","children":["alexandroupoli","drama","kavala","komotini","orestiada","xanthi"]});
export const childModules = Object.freeze({"alexandroupoli":"./alexandroupoli/alexandroupoli.js","drama":"./drama/drama.js","kavala":"./kavala/kavala.js","komotini":"./komotini/komotini.js","orestiada":"./orestiada/orestiada.js","xanthi":"./xanthi/xanthi.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
