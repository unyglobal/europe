// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"luzern","repository":"europe","path":"switzerland/lucerne/luzern","depth":3,"parent":"switzerland/lucerne","children":["altstadt-wey","bruch-gibraltar","hirschmatt-kleinstadt","hochwacht-zurichstrasse"]});
export const childModules = Object.freeze({"altstadt-wey":"./altstadt-wey/altstadt-wey.js","bruch-gibraltar":"./bruch-gibraltar/bruch-gibraltar.js","hirschmatt-kleinstadt":"./hirschmatt-kleinstadt/hirschmatt-kleinstadt.js","hochwacht-zurichstrasse":"./hochwacht-zurichstrasse/hochwacht-zurichstrasse.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
