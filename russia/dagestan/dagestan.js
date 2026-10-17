// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"dagestan","repository":"europe","path":"russia/dagestan","depth":2,"parent":"russia","children":["belidzhi","buynaksk","dagestanskiye-ogni","derbent","izberbash","kaspiysk","khasavyurt","kizilyurt","kizlyar","makhachkala","semender"]});
export const childModules = Object.freeze({"belidzhi":"./belidzhi/belidzhi.js","buynaksk":"./buynaksk/buynaksk.js","dagestanskiye-ogni":"./dagestanskiye-ogni/dagestanskiye-ogni.js","derbent":"./derbent/derbent.js","izberbash":"./izberbash/izberbash.js","kaspiysk":"./kaspiysk/kaspiysk.js","khasavyurt":"./khasavyurt/khasavyurt.js","kizilyurt":"./kizilyurt/kizilyurt.js","kizlyar":"./kizlyar/kizlyar.js","makhachkala":"./makhachkala/makhachkala.js","semender":"./semender/semender.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
