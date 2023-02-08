import { writable } from 'svelte/store';
// import { browser } from '$app/environment';
// LEARN: when `browser` is required youtube.com/watch?v=gZS-tGD2_VY

export const message = writable(`<p>CWB helps motivate children to keep safe and informed. Escaping persecution in Myanmar, an estimated 700,000 Rohingya people fled to Bangladesh & now live in refugee camps, working with UNICEF we implemented a successful behaviour change programme.</p>
  <p>Alongside UNHCR, we were the only NGO able to enter Hungary's Transit Zones because of our completely unique kind of Humanitarian Aid.</p>
  <p>Oxfam funded workshops in November 2018 to deliver hygiene resources to Rohingya refugee children in Bangladesh, which has been recognised in the Points of Light award.</p>
  <p>Super-typhoon Haiyan is believed to be the strongest storm in recorded history, we started delivering Psychosocial First Aid as soon as it was safe through Plan International in The Philippines.</p>
  <p>Co-ordination with Save The Children provided refugees in crisis an important opportunity to Play, which is a Human Right.</p>`) // usage: {$message}
