

function insertInfo(val) {

  document.querySelector(".info-char-view").innerHTML = "<h3 class='title-view'>" + val.title + "</h3><h3>Appearence</h3>"+val.Appearence+"<h3>Pesonality</h3>"+val.Pesonality+"<h3>Role</h3>"+val.Role+"<h3>Backstory</h3>"+val.Backstory+"<h3>Trivia</h3>"+val.Trivia;
}

var appChar = new Vue({
  el: '#appCharacter',
  data: {
    char: [{
      'title': 'Allen',
      desc: 'Allen is a young boy with blond hair and blue eyes. He wears a buttoned white long-sleeved shirt with a blue ribbon tie underneath the collar, dark blue shorts with suspenders, a pair of blue-and-white striped stockings, and a pair of blue shoes. Stella notes that he has a pretty face.',
      src: 'assets/img/characters.jpg',
      class: "Allen",
      divType: "img-div",
      Appearence: "<p>Allen is a young boy with blond hair and blue eyes. He wears a buttoned white long-sleeved shirt with a blue ribbon tie underneath the collar, dark blue shorts with suspenders, a pair of blue-and-white striped stockings, and a pair of blue shoes. Stella notes that he has a pretty face.</p>",
      Pesonality:"<p>Allen is a very intelligent boy capable of understanding words above his age group and solving the many puzzles and riddles the World presents him with. Despite this, he seems to be naive in other ways, unaware that the 'strange design' hung on the the walls of Joshua's room, the dining area, and Teacher's World is in fact a map of the world and trying to wear a pair of underpants on his head after Joshua talks about his hat.</p><p>Though he is mostly silent throughout the game, it's implied through Joshua's dialogue that he can have a witty sense of humor though he tends to take jokes seriously perhaps not knowing they were jokes. He's also less inclined towards mischief. Allen is gentle-hearted evidenced by how shaken he is upon returning to the White Rabbit following the demise of one of his peers, crying after exiting Letty's World and his hands shaking when opening Joshua's closet, knowing what lays beyond. The young Teacher in the last World also remarks that Allen is kind after feeling how warm his hands are in contrast to his own. He evidently values his peers enough to risk himself to protect them as with Letty and Chelsy.</p><p>Teacher notes that Allen reminds him of himself when he was younger and Cheshire has also noticed the similarities. They were both precocious children and they're persistent about doing the things they feel they need to do.</p><p>However, according to Stella, Allen feels the least alive out of all the others in the facility (save for Teacher who feels similar), that something about him is different and should Allen answer Cheshire with 'Not sure' for all his questions and go down the hole in the last World, he'll say that Allen is empty, having had XXXX (love) taken from him.</p>",
      Role:"<p>Allen is the main protagonist of the story. He's responsible for finding each of the World Keys which were stolen by Cheshire and finding a way back to his own world with everyone safe and sound. Depending on the choices Allen makes, there are seven different possible endings.</p>",
      Backstory:"<p>'... (age 34) and... (age 32)... living in... Town... were... break-in and murder... The criminal has been... But... The couple's son... outside when the incident occured... claim that... the shock upon returning home... memories... Furthermore... the criminal... a cat... suddenly appeared...'</p><p>Allen had a happy life with his mother and father, showered with warmth and love. One day, Allen decided to go outside to read a book and when he returned, he found his parents murdered with Cheshire hinted to be the one behind it. The shock of returning home to find his parents dead wiped out his memories and he became amnesiac. Allen was then taken to a doctor's office where the doctor called Teacher to take him in.<p>",
      Trivia:"<li>Allen likes to read books and newspapers.</li>\
<li>Allen's story is based off of Alice in the Wonderland.</li>\
<li> Allen's sprite appearance seems similar to <i>Pandora Hearts </i>main character Oz</li>\
<li> According to Fiona, he smells like tears, likely from his experience through each World, thus earning him the nickname, Crybaby.</li>\
<li> Allen's notebook lying open on the desk in the area before Teacher's World has the following written in it: '<i>God made the world in six days. People forgot XXXX, and the world was scattered. Then GOD made the World in two hundred million days.' </i></li>\
<li> Allen was born on a Sunday. According to the nursery rhyme, 'Monday's Child' found in Teacher's World, the child born on the Sabbath day is bonny and blithe and good and gay.</li>\
<li> Upon receiving the ninth Shard of XXXX, Allen regains his memories of his parents.</li>\
<li> The animal drawn at the bottom of his list of rules is a rabbit.</li>\
<li> According to&nbsp;<a rel='nofollow' target='_blank' href='http://miwashiba.tumblr.com/post/81034555582/alice-mare'>this picture</a>&nbsp;on creator's Tumblr, his female counterpart's name is Alice.</li>\
<li> In the novel's ending, Allen sold his soul to the Cheshire Cat to bring teacher back.</li>"
    }, {
      'title': 'Letty',
      desc: 'bbb',
      src: 'assets/img/characters.jpg',
      class: "Letty",
      divType: "img-div",
      Appearence: ["Letty is a young girl with red eyes and long silver and violet hair, the latter of which she braids at the front. The top of her head is decorated with a red rose and black ribbon hair ornament.", "She wears a white buttoned shirt and a tartan skirt under an unbuttoned dark blue dress with white frills, three small red bows along the sleeves, and a larger red bow under her collarr.", "Completing her outfit is a pair of black tights and beige shoes."]
    }, {
      'title': 'Ricky',
      desc: 'bbb',
      src: 'assets/img/characters.jpg',
      class: "Ricky",
      divType: "img-div3",
      Appearence: ["Rick's appearance is similar to Letty's. Rick is a boy with red eyes and long, silver and violet hair the latter of which is kept in a braid. He uses the red rose and black ribbon hair ornament to keep his hair in a ponytail.", "He wears a white long-sleeved button-up shirt under a dark blue vest with a small red jabot around his neck.", "Rick also has on a pair of matching dark blue pants which is rolled up to just below the knees to reveal a tartan pattern with three small bows up the sides. Underneath the pants he wears long black socks and beige shoes."]
    }, {
      'title': 'Chelsy',
      desc: 'ccc',
      src: 'assets/img/characters.jpg',
      class: "Chelsy",
      divType: "img-div",
      Appearence: "Chelsy's appearance is reminiscent to Red Riding Hood. She has long, brown hair tied into pigtails and a pair of light brown eyes. She wears a red hooded capelet, a red dress with a white apron, and a pair of short black boots."
    }, {
      'title': 'Joshua',
      desc: 'ccc',
      src: 'assets/img/characters.jpg',
      class: "Joshua",
      divType: "img-div",
      Appearence: "Joshua has silver hair and dark eyes. He wears a purplish beanie, a long-sleeved black shirt underneath a dark blue outfit with matching pants that go down to mid-calf, and dark blue and black boots. A belt hangs loosely from his left hip."
    }, {
      'title': 'Stella',
      desc: 'ccc',
      src: 'assets/img/characters.jpg',
      class: "Stella",
      divType: "img-div",
      Appearence: ["Stella is a young girl with a long straight black hair that reaches past her waist and a pair of red eyes. She wears a white and black dress in a vaguely a gothic lolita style that reaches her knees as well as long black stockings and black loafers.", "She has a frilly headband on her head attached with ribbons and a broach jabot ."]
    }, {
      'title': 'Teacher',
      desc: 'ccc',
      src: 'assets/img/characters.jpg',
      class: "Teacher",
      divType: "img-div",
      Appearence: ["Teacher is tall with long black hair tied in a ponytail with a red ribbon and black eyes. Stella has said that his hair is unkempt and even longer than hers. He wears a long dark hooded coat thrown over his shoulders with a white long-sleeved shirt underneath and black pants and shoes. He has a locket around his neck and a watch around his left wrist.", "His younger self has shorter hair and a more monotonous look on his face. He wears a purple checkered vest over a long-sleeved white shirt, purple pants rolled up to his knees, and a pair of long dark socks and shoes. He appears to have a pouch attached to his hip with a ring of keys attached to it."]
    }, {
      'title': 'Fiona',
      desc: 'ccc',
      src: 'assets/img/Fiona-bit.png',
      class: "fiona",
      divType: "img-div3",
      Appearence: "Fiona has long black hair and dark eyes. She wears a purple jacket over a white dress and black stockings with fur-lined boots. Allen notes that she resembles Teacher in the locket."
    }, {
      'title': 'White Rabbit',
      desc: 'ccc',
      src: 'assets/img/characters.jpg',
      class: "Rabbit",
      divType: "img-div",
      Appearence: ["White Rabbit has long dark hair which spreads out into tree-like branches down his back, eyes with black sclera and red irises, and grayish off-color skin. A pair of rabbit ears sits on his head with the left one torn out halfway.", "He wears a dark coattail vest with a long-sleeved white shirt underneath, dark pants that reaches mid-calf, long red socks, and black shoes. He has a jabot around his neck and a pocket watch dangling down on his chest."]
    }, {
      'title': 'Cheshire Cat',
      desc: 'ccc',
      src: 'assets/img/characters.jpg',
      class: "Cheshire",
      divType: "img-div2",
      Appearence: "<p>Cheshire hides his face underneath a hood that has cat ears attached with a large safety pin piercing the left ear of his dark purple cloak.</p> <p>He wears a purple outfit with three belts wrapped around his chest. His arms are that of a cat's, both of them striped black and purple ending in three sharp claws and the left one has two nails protruding from the back of his paw. From the waist down, he has the lower body of a black cat complete with a tail.</p><p>His appearance without a hood is a that of a young man with short messy white and purple hair topped with a pair of black cat ears. His left eye has a black sclera and yellowish pupils while his right eye is completely black. Part of the upper right side of his face is also stitched with a red patch of skin.</p>"
    }]


  },
  methods: {
    select: function(index, val) {

      //alert(val.title + " " + val.desc)
      insertInfo(val)

    }
  }
});

var allen = {
      'title': 'Allen',
      desc: 'Allen is a young boy with blond hair and blue eyes. He wears a buttoned white long-sleeved shirt with a blue ribbon tie underneath the collar, dark blue shorts with suspenders, a pair of blue-and-white striped stockings, and a pair of blue shoes. Stella notes that he has a pretty face.',
      src: 'assets/img/characters.jpg',
      class: "Allen",
      divType: "img-div",
      Appearence: "<p>Allen is a young boy with blond hair and blue eyes. He wears a buttoned white long-sleeved shirt with a blue ribbon tie underneath the collar, dark blue shorts with suspenders, a pair of blue-and-white striped stockings, and a pair of blue shoes. Stella notes that he has a pretty face.</p>",
      Pesonality:"<p>Allen is a very intelligent boy capable of understanding words above his age group and solving the many puzzles and riddles the World presents him with. Despite this, he seems to be naive in other ways, unaware that the 'strange design' hung on the the walls of Joshua's room, the dining area, and Teacher's World is in fact a map of the world and trying to wear a pair of underpants on his head after Joshua talks about his hat.</p><p>Though he is mostly silent throughout the game, it's implied through Joshua's dialogue that he can have a witty sense of humor though he tends to take jokes seriously perhaps not knowing they were jokes. He's also less inclined towards mischief. Allen is gentle-hearted evidenced by how shaken he is upon returning to the White Rabbit following the demise of one of his peers, crying after exiting Letty's World and his hands shaking when opening Joshua's closet, knowing what lays beyond. The young Teacher in the last World also remarks that Allen is kind after feeling how warm his hands are in contrast to his own. He evidently values his peers enough to risk himself to protect them as with Letty and Chelsy.</p><p>Teacher notes that Allen reminds him of himself when he was younger and Cheshire has also noticed the similarities. They were both precocious children and they're persistent about doing the things they feel they need to do.</p><p>However, according to Stella, Allen feels the least alive out of all the others in the facility (save for Teacher who feels similar), that something about him is different and should Allen answer Cheshire with 'Not sure' for all his questions and go down the hole in the last World, he'll say that Allen is empty, having had XXXX (love) taken from him.</p>",
      Role:"<p>Allen is the main protagonist of the story. He's responsible for finding each of the World Keys which were stolen by Cheshire and finding a way back to his own world with everyone safe and sound. Depending on the choices Allen makes, there are seven different possible endings.</p>",
      Backstory:"<p>'... (age 34) and... (age 32)... living in... Town... were... break-in and murder... The criminal has been... But... The couple's son... outside when the incident occured... claim that... the shock upon returning home... memories... Furthermore... the criminal... a cat... suddenly appeared...'</p><p>Allen had a happy life with his mother and father, showered with warmth and love. One day, Allen decided to go outside to read a book and when he returned, he found his parents murdered with Cheshire hinted to be the one behind it. The shock of returning home to find his parents dead wiped out his memories and he became amnesiac. Allen was then taken to a doctor's office where the doctor called Teacher to take him in.<p>",
      Trivia:"<li>Allen likes to read books and newspapers.</li>\
<li>Allen's story is based off of Alice in the Wonderland.</li>\
<li> Allen's sprite appearance seems similar to <i>Pandora Hearts </i>main character Oz</li>\
<li> According to Fiona, he smells like tears, likely from his experience through each World, thus earning him the nickname, Crybaby.</li>\
<li> Allen's notebook lying open on the desk in the area before Teacher's World has the following written in it: '<i>God made the world in six days. People forgot XXXX, and the world was scattered. Then GOD made the World in two hundred million days.' </i></li>\
<li> Allen was born on a Sunday. According to the nursery rhyme, 'Monday's Child' found in Teacher's World, the child born on the Sabbath day is bonny and blithe and good and gay.</li>\
<li> Upon receiving the ninth Shard of XXXX, Allen regains his memories of his parents.</li>\
<li> The animal drawn at the bottom of his list of rules is a rabbit.</li>\
<li> According to&nbsp;<a rel='nofollow' target='_blank' href='http://miwashiba.tumblr.com/post/81034555582/alice-mare'>this picture</a>&nbsp;on creator's Tumblr, his female counterpart's name is Alice.</li>\
<li> In the novel's ending, Allen sold his soul to the Cheshire Cat to bring teacher back.</li>"
    };

/*acript on page load to set Allen auto select*/
document.addEventListener('load',insertInfo(allen));