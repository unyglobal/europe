// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"transnistria","repository":"europe","path":"moldova/transnistria","depth":2,"parent":"moldova","children":["dubasari","ribnita","slobozia","tiraspol"]});
export const childModules = Object.freeze({"dubasari":"./dubasari/dubasari.js","ribnita":"./ribnita/ribnita.js","slobozia":"./slobozia/slobozia.js","tiraspol":"./tiraspol/tiraspol.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
