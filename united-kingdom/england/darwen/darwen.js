// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"darwen","repository":"europe","path":"united-kingdom/england/darwen","depth":3,"parent":"united-kingdom/england","children":["belgrave","chapels","livesey-fold","pot-house","radford","shorey-bank"]});
export const childModules = Object.freeze({"belgrave":"./belgrave/belgrave.js","chapels":"./chapels/chapels.js","livesey-fold":"./livesey-fold/livesey-fold.js","pot-house":"./pot-house/pot-house.js","radford":"./radford/radford.js","shorey-bank":"./shorey-bank/shorey-bank.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
