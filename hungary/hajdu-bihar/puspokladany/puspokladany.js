// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"puspokladany","repository":"europe","path":"hungary/hajdu-bihar/puspokladany","depth":3,"parent":"hungary/hajdu-bihar","children":["kislegelo","muszaj","ujtelep"]});
export const childModules = Object.freeze({"kislegelo":"./kislegelo/kislegelo.js","muszaj":"./muszaj/muszaj.js","ujtelep":"./ujtelep/ujtelep.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
