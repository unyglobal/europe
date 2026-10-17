// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tyumen-oblast","repository":"europe","path":"russia/tyumen-oblast","depth":2,"parent":"russia","children":["borovskiy","ishim","tobolsk","tyumen","yalutorovsk","zavodoukovsk"]});
export const childModules = Object.freeze({"borovskiy":"./borovskiy/borovskiy.js","ishim":"./ishim/ishim.js","tobolsk":"./tobolsk/tobolsk.js","tyumen":"./tyumen/tyumen.js","yalutorovsk":"./yalutorovsk/yalutorovsk.js","zavodoukovsk":"./zavodoukovsk/zavodoukovsk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
