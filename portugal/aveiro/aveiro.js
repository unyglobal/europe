// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"aveiro","repository":"europe","path":"portugal/aveiro","depth":2,"parent":"portugal","children":["arouca","espinho","feira","ilhavo","ovar","sao-joao-da-madeira","vilar"]});
export const childModules = Object.freeze({"arouca":"./arouca/arouca.js","espinho":"./espinho/espinho.js","feira":"./feira/feira.js","ilhavo":"./ilhavo/ilhavo.js","ovar":"./ovar/ovar.js","sao-joao-da-madeira":"./sao-joao-da-madeira/sao-joao-da-madeira.js","vilar":"./vilar/vilar.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
