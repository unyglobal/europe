// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"karachayevo-cherkesiya-republic","repository":"europe","path":"russia/karachayevo-cherkesiya-republic","depth":2,"parent":"russia","children":["cherkessk","karachayevsk","uchkeken","ust-dzheguta","zelenchukskaya"]});
export const childModules = Object.freeze({"cherkessk":"./cherkessk/cherkessk.js","karachayevsk":"./karachayevsk/karachayevsk.js","uchkeken":"./uchkeken/uchkeken.js","ust-dzheguta":"./ust-dzheguta/ust-dzheguta.js","zelenchukskaya":"./zelenchukskaya/zelenchukskaya.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
