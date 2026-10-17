// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"khmelnytskyi","repository":"europe","path":"ukraine/khmelnytskyi","depth":2,"parent":"ukraine","children":["dunayivtsi","iziaslav","kamyanets-podilskyi","krasyliv","netishyn","polonne","rakove","shepetivka","slavuta","starokostyantyniv","volochysk"]});
export const childModules = Object.freeze({"dunayivtsi":"./dunayivtsi/dunayivtsi.js","iziaslav":"./iziaslav/iziaslav.js","kamyanets-podilskyi":"./kamyanets-podilskyi/kamyanets-podilskyi.js","krasyliv":"./krasyliv/krasyliv.js","netishyn":"./netishyn/netishyn.js","polonne":"./polonne/polonne.js","rakove":"./rakove/rakove.js","shepetivka":"./shepetivka/shepetivka.js","slavuta":"./slavuta/slavuta.js","starokostyantyniv":"./starokostyantyniv/starokostyantyniv.js","volochysk":"./volochysk/volochysk.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
