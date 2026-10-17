// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"errenteria","repository":"europe","path":"spain/basque-country/errenteria","depth":3,"parent":"spain/basque-country","children":["agustinak","altamira","gabierrota","galtzaraborda","gaztano","iztieta","olibet","ondartxo","pontika"]});
export const childModules = Object.freeze({"agustinak":"./agustinak/agustinak.js","altamira":"./altamira/altamira.js","gabierrota":"./gabierrota/gabierrota.js","galtzaraborda":"./galtzaraborda/galtzaraborda.js","gaztano":"./gaztano/gaztano.js","iztieta":"./iztieta/iztieta.js","olibet":"./olibet/olibet.js","ondartxo":"./ondartxo/ondartxo.js","pontika":"./pontika/pontika.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
