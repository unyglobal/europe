// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"kirov-oblast","repository":"europe","path":"russia/kirov-oblast","depth":2,"parent":"russia","children":["kirovo-chepetsk","kotel-nich","omutninsk","slobodskoy","vyatskiye-polyany","yaransk"]});
export const childModules = Object.freeze({"kirovo-chepetsk":"./kirovo-chepetsk/kirovo-chepetsk.js","kotel-nich":"./kotel-nich/kotel-nich.js","omutninsk":"./omutninsk/omutninsk.js","slobodskoy":"./slobodskoy/slobodskoy.js","vyatskiye-polyany":"./vyatskiye-polyany/vyatskiye-polyany.js","yaransk":"./yaransk/yaransk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
