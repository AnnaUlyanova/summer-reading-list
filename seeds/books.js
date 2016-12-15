
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('books').insert({
          id:1,
          title: 'Alaska: A Novel',
          author: 'James A. Michener',
          description: 'In this sweeping epic of the northernmost American frontier, James A. Michener guides us through Alaska’s fierce terrain and history, from the long-forgotten past to the bustling present. As his characters struggle for survival, Michener weaves together the exciting high points of Alaska’s story: its brutal origins; the American acquisition; the gold rush; the tremendous growth and exploitation of the salmon industry; the arduous construction of the Alcan Highway, undertaken to defend the territory during World War II. A spellbinding portrait of a human community fighting to establish its place in the world, Alaska traces a bold and majestic saga of the enduring spirit of a land and its people.',
          image: 'https://images-na.ssl-images-amazon.com/images/I/51QAlv66fEL.jpg',
          listed:0}),
        knex('books').insert({
          id:2,
          title: 'Fantastic Beasts and Where to Find Them: The Original Screenplay ',
          author: 'J.K. Rowling',
          description: 'J.K. Rowling\'s screenwriting debut is captured in this exciting hardcover edition of the Fantastic Beasts and Where to Find Them screenplay.When Magizoologist Newt Scamander arrives in New York, he intends his stay to be just a brief stopover. However, when his magical case is misplaced and some of Newt\'s fantastic beasts escape, it spells trouble for everyone…',
          image: 'https://images-na.ssl-images-amazon.com/images/I/61kS08bR-EL._SX311_BO1,204,203,200_.jpg',
          listed:0}),
        knex('books').insert({
          id:3,
          title: 'Sisters One, Two, Three',
          author: 'Nancy Star',
          description: 'After a tragic accident on Martha’s Vineyard, keeping secrets becomes a way of life for the Tangle family. With memories locked away, the sisters take divergent paths. Callie disappears, Mimi keeps so busy she has no time to think, and Ginger develops a lifelong aversion to risk that threatens the relationships she holds most dear. When a whispered comment overheard by her rebellious teenage daughter forces Ginger to reveal a long-held family secret, the Tangles’ carefully constructed web of lies begins to unravel. Upon the death of Glory, the family’s colorful matriarch, and the return of long-estranged Callie, Ginger resolves to return to Martha’s Vineyard and piece together what really happened on that calamitous day when a shadow fell over four sun-kissed siblings playing at the shore. Along with Ginger’s newfound understanding come the keys to reconciliation: with her mother, with her sisters, and with her daughter.',
          image: 'https://images-na.ssl-images-amazon.com/images/I/515TZItXNeL.jpg',
          listed:0}),
        knex('books').insert({
          id:4,
          title: 'Killing the Rising Sun: How America Vanquished World War II Japan',
          author: 'Bill O\'Reilly',
          description: 'Autumn 1944. World War II is nearly over in Europe but is escalating in the Pacific, where American soldiers face an opponent who will go to any length to avoid defeat. The Japanese army follows the samurai code of Bushido, stipulating that surrender is a form of dishonor. Killing the Rising Sun takes readers to the bloody tropical-island battlefields of Peleliu and Iwo Jima and to the embattled Philippines, where General Douglas MacArthur has made a triumphant return and is plotting a full-scale invasion of Japan.',
          image: 'https://images-na.ssl-images-amazon.com/images/I/51x-38avp4L._SX328_BO1,204,203,200_.jpg',
          listed:0}),
        knex('books').insert({
          id:5,
          title: 'Laugh-Out-Loud Jokes for Kids',
          author: 'Rob Elliott ',
          description: 'What happens to race car drivers when they eat too much? They get indy-gestion. Laugh-Out-Loud Jokes for Kids provides children ages 7-10 many hours of fun and laughter. Young readers will have a blast sharing this collection of hundreds of one-liners, knock knock jokes, tongue twisters, and more with their friends and family! This mega-bestselling book will have children rolling on the floor with laughter and is sure to be a great gift idea for any child.',
          image: 'https://images-na.ssl-images-amazon.com/images/I/51i3dHT2YCL._SX301_BO1,204,203,200_.jpg',
          listed:0}),
        knex('books').insert({
          id:6,
          title: 'The Magnolia Story',
          author: 'Chip Gaines ',
          description: 'These famous words are now synonymous with the dynamic husband-and-wife team Chip and Joanna Gaines, stars of HGTV’s Fixer Upper. As this question fills the airwaves with anticipation, their legions of fans continue to multiply and ask a different series of questions, like—Who are these people?What’s the secret to their success? And is Chip actually that funny in real life? By renovating homes in Waco, Texas, and changing lives in such a winsome and engaging way, Chip and Joanna have become more than just the stars of Fixer Upper, they have become America’s new best friends.',
          image: 'https://images-na.ssl-images-amazon.com/images/I/51WIWazu2rL._SX331_BO1,204,203,200_.jpg',
          listed:0}),
        knex('books').insert({
          id:7,
          title: 'Hillbilly Elegy: A Memoir of a Family and Culture in Crisis',
          author: 'J. D. Vance',
          description: 'From a former marine and Yale Law School graduate, a powerful account of growing up in a poor Rust Belt town that offers a broader, probing look at the struggles of America’s white working class Hillbilly Elegy is a passionate and personal analysis of a culture in crisis—that of white working-class Americans. The decline of this group, a demographic of our country that has been slowly disintegrating over forty years, has been reported on with growing frequency and alarm, but has never before been written about as searingly from the inside. J. D. Vance tells the true story of what a social, regional, and class decline feels like when you were born with it hung around your neck.',
          image: 'https://images-na.ssl-images-amazon.com/images/I/51idSm4KvzL._SX329_BO1,204,203,200_.jpg',
          listed:0}),
        knex('books').insert({
          id:8,
          title: 'Hope\'s Peak',
          author: 'Tony Healey',
          description: 'Detective Jane Harper can’t shake the image of the young woman discovered in a field—eyes closed, a crown of woven vines on her head. She expects macabre murders like this in her native San Francisco, not here. Jane and her partner, Stu, vow to catch the killer, but in this town, that’s easier said than done. The police department is in the grips of a wide-reaching scandal that could topple the entire force, and Jane and Stu face a series of dead ends. Until they meet Ida Lane.',
          image: 'https://images-na.ssl-images-amazon.com/images/I/51ZkOhyEoKL.jpg',
          listed:0}),
        knex('books').insert({
          id:9,
          title: 'Born to Run',
          author: 'Bruce Springsteen',
          description: 'In 2009, Bruce Springsteen and the E Street Band performed at the Super Bowl’s halftime show. The experience was so exhilarating that Bruce decided to write about it. That’s how this extraordinary autobiography began.Over the past seven years, Bruce Springsteen has privately devoted himself to writing the story of his life, bringing to these pages the same honesty, humor, and originality found in his songs.He describes growing up Catholic in Freehold, New Jersey, amid the poetry, danger, and darkness that fueled his imagination, leading up to the moment he refers to as “The Big Bang”: seeing Elvis Presley’s debut on The Ed Sullivan Show. He vividly recounts his relentless drive to become a musician, his early days as a bar band king in Asbury Park, and the rise of the E Street Band',
          image: 'https://images-na.ssl-images-amazon.com/images/I/51hnB7FEgcL._SX327_BO1,204,203,200_.jpg',
          listed:0}),
        knex('books').insert({
          id:10,
          title: 'HTML and CSS: Design and Build Websites',
          author: 'Jon Duckett',
          description: 'A full-color introduction to the basics of HTML and CSS from the publishers of Wrox! Every day, more and more people want to learn some HTML and CSS. Joining the professional web designers and programmers are new audiences who need to know a little bit of code at work (update a content management system or e-commerce store) and those who want to make their personal blogs more attractive. Many books teaching HTML and CSS are dry and only written for those who want to become programmers, which is why this book takes an entirely new approach.',
          image: 'https://images-na.ssl-images-amazon.com/images/I/41Z2swEmwaL._SX396_BO1,204,203,200_.jpg',
          listed:0}),
        knex('books').insert({
          id:11,
          title: 'How to Code: A Step-By-Step Guide to Computer Coding',
          author: ' Max Wainewright ',
          description: 'Become a master coder, with these step-by-step instructions and robot helpers too! How to Code teaches you all the basic concepts, including Loops, Variables, and Selection, and then develops your skills further until you can create your own website . . . and more! Learn how to use Logo, build games in Scratch, program projects in Python, experiment with HTML, and make interactive web pages with JavaScript.',
          image: 'https://images-na.ssl-images-amazon.com/images/I/61tO1-J3nyL._SX404_BO1,204,203,200_.jpg',
          listed:0}),
        knex('books').insert({
          id:12,
          title: 'Cooking: 600 Recipes, 1500 Photographs, One Kitchen Education',
          author: 'James Peterson',
          description: 'In an era of outfitted home kitchens and food fascination, it\'s no wonder home cooks who never learned the fundamentals of the kitchen are intimidated. Twenty years ago, James Peterson could relate, and so he taught himself by cooking his way through professional kitchens and stacks of books, logging the lessons of his kitchen education one by one. Now one of the country\'s most revered cooking teachers, Peterson provides the confidence-building instructions home cooks need to teach themselves to cook consistently with ease and success. COOKING is the only all-in-one instructional that details the techniques that cooks really need to master, teaches all the basic recipes, and includes hundreds of photos that illuminate and inspire.',
          image: 'https://images-na.ssl-images-amazon.com/images/I/51-XItbaKRL._SX258_BO1,204,203,200_.jpg',
          listed:0}),
        knex('books').insert({
          id:13,
          title: 'The Contact Episode One',
          author: 'Albert Sartisons',
          description: 'In the 22nd century, mankind has assimilated the Solar System within the orbits of the inner planets, and is gradually moving further out, beyond the asteroid belt, towards the outer planets.The recently discovered technology of remote manipulation has given people the capability of altering the orbit of planetary-size celestial bodies, laying the foundation of a new era for the human race: the terraforming age. The colonisation of space beyond the limits of the Solar System has become only a matter of time.',
          image: 'https://images-na.ssl-images-amazon.com/images/I/51XYvQro6JL.jpg',
          listed:0}),
        knex('books').insert({
          id:14,
          title: 'The Martian',
          author: 'Andy Weir',
          description: 'After a dust storm nearly kills him and forces his crew to evacuate while thinking him dead, Mark finds himself stranded and completely alone with no way to even signal Earth that he’s alive—and even if he could get word out, his supplies would be gone long before a rescue could arrive.Chances are, though, he won\'t have time to starve to death. The damaged machinery, unforgiving environment, or plain-old "human error" are much more likely to kill him first. ',
          image: 'https://images-na.ssl-images-amazon.com/images/I/41DNuJfahyL._SX322_BO1,204,203,200_.jpg',
          listed:0}),
        knex('books').insert({
          id:15,
          title: 'Montessori from the Start: The Child at Home, from Birth to Age Three ',
          author: 'Paula Polk Lillard ',
          description: 'What can parents do to help their youngest children in their task of self-formation? How does the Montessori method of hands-on learning and self-discovery relate to the youngest infants? This authoritative and accessible book answers these and many other questions. Based on Dr. Maria Montessori\'s instructions for raising infants, its comprehensive exploration of the first three years incorporates the furnishings and tools she created for the care and comfort of babies. From the design of the baby\'s bedroom to the child-sized kitchen table, from diet and food preparation to clothing and movement, the authors provide guidance for the establishment of a beautiful and serviceable environment for babies and very young children. They introduce concepts and tasks, taking into account childrens\' sensitive periods for learning such skills as dressing themselves, food preparation, and toilet training. Brimming with anecdote and encouragement, and written in a clear, engaging style, Montessori from the Start is a practical and useful guide to raising',
          image: 'https://images-na.ssl-images-amazon.com/images/I/51bYXJz19GL._SX324_BO1,204,203,200_.jpg',
          listed:0}),
        knex('books').insert({
          id:16,
          title: 'Animal Farm',
          author: 'George Orwell',
          description: 'Manor Farm is like any other English farm, expect for a drunken owner, Mr Jones, incompetent workers and oppressed animals. Fed up with the ignorance of their human masters, the animals rise up in rebellion and take over the farm. Led by intellectually superior pigs like Snowball and Napoleon, the animals how to take charge of their destiny and remove the inequities of their lives. But as time passes, the realize that things aren\'t happening quite as expected. Animal Farm is, one level, a simple story about barnyard animals. On a much deeper level, it is a savage political satire on corrupted ideals, misdirected revolutions and class conflict-themes as valid today as ',
          image: 'https://images-na.ssl-images-amazon.com/images/I/51NLEayNhXL._SX318_BO1,204,203,200_.jpg',
          listed:0}),
        knex('books').insert({
          id:17,
          title: 'The Jungle Book (Disney The Jungle Book)',
          author: 'RH Disney',
          description: 'YOUNG MOWGLI LOVES growing up in the jungle with his animal friends. But what happens when he is told that he must go live in the Man-village? Find out in this Little Golden Book retelling of the classic Disney movie The Jungle Book.',
          image: 'https://images-na.ssl-images-amazon.com/images/I/5113J-FcfXL._SX414_BO1,204,203,200_.jpg',
          listed:0}),
        knex('books').insert({
          id:18,
          title: 'La Symphonie pastorale',
          author: 'Andre Gide',
          description: '"La Symphonie Pastorale" is the tale of a country priest who takes into his home a blind orphan with the purpose of educating her, but develops a deep love for her - with tragic consequences. "Isabelle" explores the nature of a different kind of love - a passion based on pure fantasy.',
          image: 'https://images-na.ssl-images-amazon.com/images/I/51v3ttbnjLL._SX301_BO1,204,203,200_.jpg',
          listed:0}),
        knex('books').insert({
          id:19,
          title: 'Jurassic Park',
          author: 'Michael Crichton',
          description: 'An astonishing technique for recovering and cloning dinosaur DNA has been discovered. Now humankind’s most thrilling fantasies have come true. Creatures extinct for eons roam Jurassic Park with their awesome presence and profound mystery, and all the world can visit them—for a price.',
          image: 'https://images-na.ssl-images-amazon.com/images/I/51adfpFxITL._SX273_BO1,204,203,200_.jpg',
          listed:0}),
        knex('books').insert({
          id:20,
          title: 'Alice\'s Adventures in Wonderland & Through the Looking-Glass',
          author: 'Lewis Carroll',
          description: 'In 1862 Charles Lutwidge Dodgson, a shy Oxford mathematician with a stammer, created a story about a little girl tumbling down a rabbit hole. Thus began the immortal adventures of Alice, perhaps the most popular heroine in English literature. Countless scholars have tried to define the charm of the Alice books–with those wonderfully eccentric characters the Queen of Hearts, Tweedledum, and Tweedledee, the Cheshire Cat, Mock Turtle, the Mad Hatter et al.–by proclaiming that they really comprise a satire on language, a political allegory, a parody of Victorian children’s literature, even a reflection of contemporary ecclesiastical history. Perhaps, as Dodgson might have said, Alice is no more than a dream, a fairy tale about the trials and tribulations of growing up–or down, or all turned round–as seen',
          image: 'https://images-na.ssl-images-amazon.com/images/I/51G1M-2kBoL._SX303_BO1,204,203,200_.jpg',
          listed:0}),
        knex('books').insert({
          id:21,
          title: 'Le Petit Prince',
          author: 'Antoine de Saint-Exupéry',
          description: 'In 2000 Harcourt proudly reissued Antoine de Saint-Exupéry\'s masterpiece, The Little Prince, in a sparkling new format. Newly translated by Pulitzer Prize-winning poet Richard Howard, this timeless classic was embraced by critics and readers across the country for its purity and beauty of expression. And Saint-Exupéry\'s beloved artwork was restored and remastered to present his work in its original and vibrant colors.',
          image: 'https://images-na.ssl-images-amazon.com/images/I/51364NhwLoL._SX329_BO1,204,203,200_.jpg',
          listed:0})
      ]);
    });
};
