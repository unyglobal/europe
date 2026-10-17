// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"skane","repository":"europe","path":"sweden/skane","depth":2,"parent":"sweden","children":["angelholm","eslov","hassleholm","helsingborg","kristianstad","landskrona","limhamn","lund","malmo","staffanstorp","trelleborg","ystad"]});
export const childModules = Object.freeze({"angelholm":"./angelholm/angelholm.js","eslov":"./eslov/eslov.js","hassleholm":"./hassleholm/hassleholm.js","helsingborg":"./helsingborg/helsingborg.js","kristianstad":"./kristianstad/kristianstad.js","landskrona":"./landskrona/landskrona.js","limhamn":"./limhamn/limhamn.js","lund":"./lund/lund.js","malmo":"./malmo/malmo.js","staffanstorp":"./staffanstorp/staffanstorp.js","trelleborg":"./trelleborg/trelleborg.js","ystad":"./ystad/ystad.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
