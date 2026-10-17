// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"adliswil","repository":"europe","path":"switzerland/zurich/adliswil","depth":3,"parent":"switzerland/zurich","children":["adliswil-adliswil-stadtkern","adliswil-hundli-zopf","adliswil-lebern","adliswil-ruti","adliswil-sihlau","adliswil-sonnenberg","adliswil-sood","adliswil-tal","adliswil-wacht","adliswil-wanneten","adliswil-wil"]});
export const childModules = Object.freeze({"adliswil-adliswil-stadtkern":"./adliswil-adliswil-stadtkern/adliswil-adliswil-stadtkern.js","adliswil-hundli-zopf":"./adliswil-hundli-zopf/adliswil-hundli-zopf.js","adliswil-lebern":"./adliswil-lebern/adliswil-lebern.js","adliswil-ruti":"./adliswil-ruti/adliswil-ruti.js","adliswil-sihlau":"./adliswil-sihlau/adliswil-sihlau.js","adliswil-sonnenberg":"./adliswil-sonnenberg/adliswil-sonnenberg.js","adliswil-sood":"./adliswil-sood/adliswil-sood.js","adliswil-tal":"./adliswil-tal/adliswil-tal.js","adliswil-wacht":"./adliswil-wacht/adliswil-wacht.js","adliswil-wanneten":"./adliswil-wanneten/adliswil-wanneten.js","adliswil-wil":"./adliswil-wil/adliswil-wil.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
