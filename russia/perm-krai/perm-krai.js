// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"perm-krai","repository":"europe","path":"russia/perm-krai","depth":2,"parent":"russia","children":["aleksandrovsk","berezniki","chaykovskiy","chernushka","chusovoy","dobryanka","gubakha","kizel","krasnokamsk","krasnovishersk","kudymkar","kungur","lys-va","nytva","ocher","osa","perm","solikamsk","vereshchagino"]});
export const childModules = Object.freeze({"aleksandrovsk":"./aleksandrovsk/aleksandrovsk.js","berezniki":"./berezniki/berezniki.js","chaykovskiy":"./chaykovskiy/chaykovskiy.js","chernushka":"./chernushka/chernushka.js","chusovoy":"./chusovoy/chusovoy.js","dobryanka":"./dobryanka/dobryanka.js","gubakha":"./gubakha/gubakha.js","kizel":"./kizel/kizel.js","krasnokamsk":"./krasnokamsk/krasnokamsk.js","krasnovishersk":"./krasnovishersk/krasnovishersk.js","kudymkar":"./kudymkar/kudymkar.js","kungur":"./kungur/kungur.js","lys-va":"./lys-va/lys-va.js","nytva":"./nytva/nytva.js","ocher":"./ocher/ocher.js","osa":"./osa/osa.js","perm":"./perm/perm.js","solikamsk":"./solikamsk/solikamsk.js","vereshchagino":"./vereshchagino/vereshchagino.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
