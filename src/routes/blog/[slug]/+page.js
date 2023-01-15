import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  if (params.slug === 'chapter-1-the-night-it-all-began') {
    return {
      image: '/chapter_1.png',
      title: 'Surviving Ourselves: A Work of Human-Directed AI Generated Fiction of Two Brothers Fighting for Survival on the Run in 2000s Austin',
      subtitle: "Chapter 1: The Night It All Began",
      content: "<p>It was 2 am, and Alex and Jake trudged down the dimly lit streets of the south side of Austin. The constant growling of their stomachs is a reminder of their dire situation. They were not only on the run from the law due to violating their parole but they were also homeless. They had been kicked out of the government housing where their mother lived, as she was not supposed to have them there while on parole. Now, they were living on the streets, sleeping in abandoned buildings and dope houses with no place to call home.</p><p>As they walked down Ben White, the smell of burgers and fries wafting out of a Jack-n-the-box's drive-thru window, caught their attention. They knew they couldn't afford a meal, but the smell was too tempting to resist. Jake walked up to the drive-thru, trying to look as presentable as possible, and knocked on the window while Alex sat on the curb, taking off his shoes. His feet were swollen and covered in sores, a result of the poor hygiene and living conditions of being on the street. Alex thought to himself, &ldquo;I've been through worse. I've been in the juvenile detention center, I've seen the worst of people, I've been beaten, and I've been hungry, this ain't shit.&rdquo;</p><p>More of a pep talk than the truth.</p><p>As Jake walked back with the food, his pager beeped. He handed Alex the food and walked towards the nearby payphone, leaving Alex alone with his thoughts. Alex took a bite of the burger, savoring the taste, but also aware that this could be the last decent meal they would have for a while.</p><p>As Jake returned from the payphone, his expression was serious. &ldquo;That was our half-brother,&rdquo; he said. &ldquo;He's gotta lick, but we need to find a car.&rdquo; Alex felt a spark of hope. They were desperate, and it seemed like this could be their only chance, but at what cost? They've been through juvenile prison, they&rsquo;re homeless, and they're hardened and ready for whatever comes next, even if it means breaking the law again.</p>",
      date: "01/14/2023"
    };
  }

  throw error(404, 'Not found');
}
