// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"liberec-region","repository":"europe","path":"czechia/liberec-region","depth":2,"parent":"czechia","children":["ceska-lipa","jablonec-nad-nisou","liberec"]});
export const childModules = Object.freeze({"ceska-lipa":"./ceska-lipa/ceska-lipa.js","jablonec-nad-nisou":"./jablonec-nad-nisou/jablonec-nad-nisou.js","liberec":"./liberec/liberec.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
