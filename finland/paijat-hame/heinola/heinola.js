// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"heinola","repository":"europe","path":"finland/paijat-hame/heinola","depth":3,"parent":"finland/paijat-hame","children":["harju","keskusta","laukkamaki","niemela","plaani","pyhaton","seminaari","suppi","tommola"]});
export const childModules = Object.freeze({"harju":"./harju/harju.js","keskusta":"./keskusta/keskusta.js","laukkamaki":"./laukkamaki/laukkamaki.js","niemela":"./niemela/niemela.js","plaani":"./plaani/plaani.js","pyhaton":"./pyhaton/pyhaton.js","seminaari":"./seminaari/seminaari.js","suppi":"./suppi/suppi.js","tommola":"./tommola/tommola.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
