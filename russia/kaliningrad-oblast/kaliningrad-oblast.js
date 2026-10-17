// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kaliningrad-oblast","repository":"europe","path":"russia/kaliningrad-oblast","depth":2,"parent":"russia","children":["baltiysk","chernyakhovsk","gusev","kaliningrad","svetlyy","zelenogradsk"]});
export const childModules = Object.freeze({"baltiysk":"./baltiysk/baltiysk.js","chernyakhovsk":"./chernyakhovsk/chernyakhovsk.js","gusev":"./gusev/gusev.js","kaliningrad":"./kaliningrad/kaliningrad.js","svetlyy":"./svetlyy/svetlyy.js","zelenogradsk":"./zelenogradsk/zelenogradsk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
