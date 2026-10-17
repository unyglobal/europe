// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"astrakhan-oblast","repository":"europe","path":"russia/astrakhan-oblast","depth":2,"parent":"russia","children":["akhtubinsk","astrakhan","kamyzyak","kharabali","znamensk"]});
export const childModules = Object.freeze({"akhtubinsk":"./akhtubinsk/akhtubinsk.js","astrakhan":"./astrakhan/astrakhan.js","kamyzyak":"./kamyzyak/kamyzyak.js","kharabali":"./kharabali/kharabali.js","znamensk":"./znamensk/znamensk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
