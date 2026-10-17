// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"primorye","repository":"europe","path":"russia/primorye","depth":2,"parent":"russia","children":["arsen-yev","artem","bol-soj-kamen","dalnegorsk","dalnerechensk","fokino","kavalerovo","lesozavodsk","luchegorsk","nakhodka","partizansk","spassk-dal-niy","trudovoye","ussuriysk","vladivostok","vrangel"]});
export const childModules = Object.freeze({"arsen-yev":"./arsen-yev/arsen-yev.js","artem":"./artem/artem.js","bol-soj-kamen":"./bol-soj-kamen/bol-soj-kamen.js","dalnegorsk":"./dalnegorsk/dalnegorsk.js","dalnerechensk":"./dalnerechensk/dalnerechensk.js","fokino":"./fokino/fokino.js","kavalerovo":"./kavalerovo/kavalerovo.js","lesozavodsk":"./lesozavodsk/lesozavodsk.js","luchegorsk":"./luchegorsk/luchegorsk.js","nakhodka":"./nakhodka/nakhodka.js","partizansk":"./partizansk/partizansk.js","spassk-dal-niy":"./spassk-dal-niy/spassk-dal-niy.js","trudovoye":"./trudovoye/trudovoye.js","ussuriysk":"./ussuriysk/ussuriysk.js","vladivostok":"./vladivostok/vladivostok.js","vrangel":"./vrangel/vrangel.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
