// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"pazardzhik","repository":"europe","path":"bulgaria/pazardzhik","depth":2,"parent":"bulgaria","children":["panagyurishte","peshtera","velingrad"]});
export const childModules = Object.freeze({"panagyurishte":"./panagyurishte/panagyurishte.js","peshtera":"./peshtera/peshtera.js","velingrad":"./velingrad/velingrad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
