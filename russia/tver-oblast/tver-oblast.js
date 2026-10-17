// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tver-oblast","repository":"europe","path":"russia/tver-oblast","depth":2,"parent":"russia","children":["bezhetsk","bologoye","kashin","kimry","konakovo","nelidovo","ostashkov","rzhev","torzhok","tver","udomlya","vyshniy-volochek"]});
export const childModules = Object.freeze({"bezhetsk":"./bezhetsk/bezhetsk.js","bologoye":"./bologoye/bologoye.js","kashin":"./kashin/kashin.js","kimry":"./kimry/kimry.js","konakovo":"./konakovo/konakovo.js","nelidovo":"./nelidovo/nelidovo.js","ostashkov":"./ostashkov/ostashkov.js","rzhev":"./rzhev/rzhev.js","torzhok":"./torzhok/torzhok.js","tver":"./tver/tver.js","udomlya":"./udomlya/udomlya.js","vyshniy-volochek":"./vyshniy-volochek/vyshniy-volochek.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
