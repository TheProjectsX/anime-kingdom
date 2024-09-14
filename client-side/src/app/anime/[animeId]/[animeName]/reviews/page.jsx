"use client";

import { Avatar, Tooltip } from "flowbite-react";
import React from "react";

const page = () => {
    // const item = {
    //     id: 532488,
    //     type: "anime",
    //     reactions: {
    //         overall: 225,
    //         nice: 57,
    //         love_it: 124,
    //         funny: 24,
    //         confusing: 11,
    //         informative: 6,
    //         well_written: 3,
    //         creative: 0,
    //     },
    //     date: "2024-07-29T06:44:00+00:00",
    //     review: "PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK CINEMA. This show is SO flawless, stainless steel got nothing on this absolutely stain-less of an anime. This show got EVERYTHING done right, so in this review I will only cover what it mostly shines from and highlight the super good of this show. Recommend for: *Romance, *Directing, *Production Quality, Character, Pacing, and script FULL REVIEW: First and most of all is the directing. I feel like I've been transported to the era where A-1 pictures peak as a studio again, with \"Your lie in April\". A-1 truly struckgold with this story, and they fully pull out all the stops to make this story the best it could be. The directing is VERY good, as I will discuss on why in details for each aspect later in this review. This have the same quality, if I may say, as the comix films anime movies, which is very captivating and stunning just to experience. [10*+/10]\n\nFirstly is the production quality. I'm not a production quality / animation Andy that much per se, I normally doesn't care much, but HOLY this show have some absolutely STUNNING visuals, as well as some absolutely angelic OST. If I could mute other sounds, and just look at the scenery in this show, with these beautiful sound mixing, editing, and gorgeous OST, I would for hours, just like a documentary. Though I wouldn't because the character, story, and script in this show is also very good. [10/10]\n\nThe character in this show is also what make this show good. Everyone truly feels like have their own life, own story. There's BARELY any stereotyping in this show, at most mixed stereotyping with the characters, which I really like. For example, the dude that's the president of the Literature club, could be seen as your typical handsome dependable president, but he's also like weeb stuff, and don't shy about it, which holy BASED ASF. [10/10]\n\nNext is the pacing, this go in very well with the first point I just mentioned (the production quality). We got some good old comedy, that come in snippets, have some good pause to admire the atmosphere of the circumstance its in, then cut. Which is hardly done to this level of perfection. The story is also not too fast, and not too slow, and always keep e laughing at the edge of my seat every time I watch it. [10/10]\n\nLastly is the romance script. This arguably is the best (on par with directing and production quality). The romance in this show is VERY real and good. By that I mean there's little to none inner dialogue, nor overly excessive sound effects or animations to signify stuff. Sure there's some comedic animation like derp face etc etc. , but most of the time they let it play out with the atmosphere, which make it feel very real. Also with this mentioned, this make the romance on a whole another level, some may thinks it will take too long to progress in the romance department with the show dont excessively and obviously show us, but I would argue otherwise. \n\nThis make the romance develops very real. There's no love at first sight here, there's no love just because he's good, love takes time to develop in this show subtly without the show just blaring at us with their inner head dialogue of \"OUUUU I love him so much omg\" or something like that. Thus make this very real and very interesting and a good time.\n\nIn conclusion, I think this show have no flaws. The production quality with the directing already make this show realllly good, but also with the script and pacing and character that's really real, along with the romance that's very subtle and not blaring, make this even more stand out and the best. There's some point I would be cautious about, that is how fast would the romance develop in the future, but I think it will be good from what we've seen this past 3 episode.\n\nMy rating as a rom-com anime: 10/10\nMy rating as an anime overall: 9.98/10",
    //     score: 10,
    //     tags: ["Recommended", "Preliminary"],
    //     is_spoiler: false,
    //     is_preliminary: true,
    //     episodes_watched: null,
    //     user: {
    //         username: "OrkusReOrca",
    //         image: "https://cdn.myanimelist.net/s/common/userimages/04e884a8-af67-4a79-8b8b-b2a493af1a07_42x62_i?s=14cbebbf283d0d28eefcde45498aa7a6",
    //     },
    // };

    const animeReviewData = [
        {
            id: 532488,
            type: "anime",
            reactions: {
                overall: 225,
                nice: 57,
                love_it: 124,
                funny: 24,
                confusing: 11,
                informative: 6,
                well_written: 3,
                creative: 0,
            },
            date: "2024-07-29T06:44:00+00:00",
            review: "PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK PEAK CINEMA. This show is SO flawless, stainless steel got nothing on this absolutely stain-less of an anime. This show got EVERYTHING done right, so in this review I will only cover what it mostly shines from and highlight the super good of this show. Recommend for: *Romance, *Directing, *Production Quality, Character, Pacing, and script FULL REVIEW: First and most of all is the directing. I feel like I've been transported to the era where A-1 pictures peak as a studio again, with \"Your lie in April\". A-1 truly struckgold with this story, and they fully pull out all the stops to make this story the best it could be. The directing is VERY good, as I will discuss on why in details for each aspect later in this review. This have the same quality, if I may say, as the comix films anime movies, which is very captivating and stunning just to experience. [10*+/10]\n\nFirstly is the production quality. I'm not a production quality / animation Andy that much per se, I normally doesn't care much, but HOLY this show have some absolutely STUNNING visuals, as well as some absolutely angelic OST. If I could mute other sounds, and just look at the scenery in this show, with these beautiful sound mixing, editing, and gorgeous OST, I would for hours, just like a documentary. Though I wouldn't because the character, story, and script in this show is also very good. [10/10]\n\nThe character in this show is also what make this show good. Everyone truly feels like have their own life, own story. There's BARELY any stereotyping in this show, at most mixed stereotyping with the characters, which I really like. For example, the dude that's the president of the Literature club, could be seen as your typical handsome dependable president, but he's also like weeb stuff, and don't shy about it, which holy BASED ASF. [10/10]\n\nNext is the pacing, this go in very well with the first point I just mentioned (the production quality). We got some good old comedy, that come in snippets, have some good pause to admire the atmosphere of the circumstance its in, then cut. Which is hardly done to this level of perfection. The story is also not too fast, and not too slow, and always keep e laughing at the edge of my seat every time I watch it. [10/10]\n\nLastly is the romance script. This arguably is the best (on par with directing and production quality). The romance in this show is VERY real and good. By that I mean there's little to none inner dialogue, nor overly excessive sound effects or animations to signify stuff. Sure there's some comedic animation like derp face etc etc. , but most of the time they let it play out with the atmosphere, which make it feel very real. Also with this mentioned, this make the romance on a whole another level, some may thinks it will take too long to progress in the romance department with the show dont excessively and obviously show us, but I would argue otherwise. \n\nThis make the romance develops very real. There's no love at first sight here, there's no love just because he's good, love takes time to develop in this show subtly without the show just blaring at us with their inner head dialogue of \"OUUUU I love him so much omg\" or something like that. Thus make this very real and very interesting and a good time.\n\nIn conclusion, I think this show have no flaws. The production quality with the directing already make this show realllly good, but also with the script and pacing and character that's really real, along with the romance that's very subtle and not blaring, make this even more stand out and the best. There's some point I would be cautious about, that is how fast would the romance develop in the future, but I think it will be good from what we've seen this past 3 episode.\n\nMy rating as a rom-com anime: 10/10\nMy rating as an anime overall: 9.98/10",
            score: 10,
            tags: ["Recommended", "Preliminary"],
            is_spoiler: false,
            is_preliminary: true,
            episodes_watched: null,
            user: {
                username: "OrkusReOrca",
                image: "https://cdn.myanimelist.net/s/common/userimages/04e884a8-af67-4a79-8b8b-b2a493af1a07_42x62_i?s=14cbebbf283d0d28eefcde45498aa7a6",
            },
        },
        {
            id: 532315,
            type: "anime",
            reactions: {
                overall: 30,
                nice: 19,
                love_it: 8,
                funny: 0,
                confusing: 1,
                informative: 0,
                well_written: 2,
                creative: 0,
            },
            date: "2024-07-27T14:39:00+00:00",
            review: "Give this show a chance! I'm begging you! This might be my favorite anime of the season thus far. Make Heroine ga Oosugiru is an anime all about the \"secondary love interests\" that are found in most romance anime. These girls are the \"other women\" as pop culture would put it, having been friend zoned by their respective love interests. Each of these girls meets Kazuhiko, our protagonist and stand-in for the audience. Kazuhiko is boring, yes, but he's not a bad protagonist. If anything, his mundane nature balances well with the eccentric or over-the-top personalities of the main girls. The artin this show is very well-drawn. The characters have neat and visually appealing designs, and the animation is extremely well done. Even the scenes where there isn't much going on have incredible attention to detail. The background art and the overall scenery is probably my favorite, it's beautifully drawn. \n\n The characters' personalities play well off of each other, which is great, because this is a character-driven story. This leads to engaging episodes, and some funny moments here and there. I\"m usually unamused by most anime, as Japanese jokes don't typically land well for Western audiences, but even I found myself giggling at a few funny bits.\n\nGiven there are only three episodes out right now, it's hard to say for sure if this anime will continue to be as great as it is now. But, so far, Make Heroine ga Oosugiru is worth the watch.",
            score: 8,
            tags: ["Recommended", "Preliminary"],
            is_spoiler: false,
            is_preliminary: true,
            episodes_watched: null,
            user: {
                username: "marmiest",
                image: "https://cdn.myanimelist.net/s/common/userimages/908fae0e-8167-4d15-8a02-b492f2928f6b_225w?s=f0ccc6df46fba437961cb78f3b7de13b",
            },
        },
        {
            id: 532314,
            type: "anime",
            reactions: {
                overall: 12,
                nice: 0,
                love_it: 9,
                funny: 0,
                confusing: 1,
                informative: 0,
                well_written: 2,
                creative: 0,
            },
            date: "2024-07-27T14:35:00+00:00",
            review: "\"it is said 70% of high school couples breaks up within a year and almost none of them can survive They're toyed with by love.They weep for it.They laugh for it.I don't let my heart waver over such fleeting connection because i have no expectation for reality or myself.It's just sometimes i'd think...what if i were to get to experience that kind of life ? What if there comes a girl who'd cry for me ? What if i were a protagonist to a light novel ? How would i feel ?\" What If? Rem, Kuroneko, Onodera, Nanami, Ichigo, Rei\u2014you name it. What do they all havein common? They didn't end up with their MC. It's funny and a bit sad.\n\nThe same goes for the heroines in this anime. None of them end up with their crushes\u2014they're all dumped. And their crushes? They're just other high schoolers in their school. So, who's our \"lucky\" MC? Kazuhiko, another high schooler in their school. He's got zero friends, zero love experience, and his life is as straight and uneventful as it gets. He's merely an observer of our heroines, the lens through which we view their lives.\n\nKazuhiko is our eyes and ears; he's us. When we see our favorite anime girls losing in the battle of love, we feel sad. \"If I were there, I would choose and date her!\" But would they really fall for us? They don't fall in love with us; they fall for the MC. And in this anime, the heroines don't instantly fall head over heels for Kazuhiko either. Moving on isn't easy. No heart can sail to another place when its sails are still ragged.\n\nBut what if Kazuhiko could use this opportunity to create his own love story? What if he could turn these losing heroines into winning heroines? What if he could actually experience love?\n\nThat's the main plot of this anime, wrapped up in a bittersweet comedy of high school life.\n\nThe animation is breathtaking, like watching a high-budget anime movie. The lighting, the backgrounds, the fluidity of the animation\u2014simply amazing.\n\nThe opening and ending sequences are head-bopping and eye-pleasing, again, simply amazing.\n\nThe characters feel lively and engaging. By the end of each episode, you'll find yourself rooting for them.\n\nAnd Kazuhiko isn't just a soulless self-insert; he has a personality that makes him more than just a placeholder.\n\nOverall, if you're into romcoms and want to try a different take on romance, give this one a try.",
            score: 9,
            tags: ["Recommended", "Preliminary"],
            is_spoiler: false,
            is_preliminary: true,
            episodes_watched: null,
            user: {
                username: "Neo_Randomz",
                image: "https://cdn.myanimelist.net/s/common/userimages/d906f5c1-fc38-4d51-aa49-d1518a3fe06a_42x62_i?s=c877a1c6f1a596eb753ee2d4d39e9754",
            },
        },
        {
            id: 532713,
            type: "anime",
            reactions: {
                overall: 15,
                nice: 6,
                love_it: 3,
                funny: 0,
                confusing: 1,
                informative: 0,
                well_written: 5,
                creative: 0,
            },
            date: "2024-07-31T11:42:00+00:00",
            review: "Usually, not my forte to write a review for an ongoing seasonal anime, let alone a romance one, let alone just three episodes in! But i just can't help it, the vibes literally took my breath away! And the fact that I'm going out of my way just to write this so y'all won't be left behind, is enough of a guarantee! This is the one anime that's having the most fun with its medium this season! Grabbed me by the throat and flung me back to my adolescent years of watching the same stupid but passionate, high-school romance copy-paste. But this is more thanjust a cheap duplicate! Not sure why, but this feels like it redefines the reason why the genre is so charming in the first place. \n\nJust like they knew that the overly dramatic approach is what bored me to retirement about these archetype, this anime arrives with a fresh take for a tone: optimistic and reckless! Not undermining the seriousness or how heavy the adolescent is, but also did not treat it like it's the end of the world! They viewed everything through the lenses of \"essential growth\", like the way of how proud FLCL is, seeing us make stupid mistakes or wrong choices, but still driven enough to act tough and face the world!\n\nThe depth of an adaptation from a Light Novel is instantly recognizable, like how every portions of characters in this story meticulously woven to not be so self-centered. At first glance, it seems like everybody has their own tropes to obey to. But not for long until the amount of heart each character contained, outweighed their own commercial constraints!\n\nIt's shaping up to be like Monogatari, but more mature and less misogyny. Or the original FLCL, but in a multiplayer setting!",
            score: 8,
            tags: ["Recommended", "Well-written", "Preliminary"],
            is_spoiler: false,
            is_preliminary: true,
            episodes_watched: null,
            user: {
                username: "EmpireDeLuna",
                image: "https://cdn.myanimelist.net/s/common/userimages/2a22b06e-1c32-4cd3-aa39-61e1eeb2965b_42x62_i?s=d4e35c0a2d8a9a0c9c92f492d8c8741b",
            },
        },
        {
            id: 532992,
            type: "anime",
            reactions: {
                overall: 13,
                nice: 2,
                love_it: 9,
                funny: 0,
                confusing: 1,
                informative: 0,
                well_written: 1,
                creative: 0,
            },
            date: "2024-08-03T11:22:00+00:00",
            review: "If you are tired of watching thrashy romance anime and looking for a well written rom com with high production values, good directing, then you might enjoy this one. Reason: Great visuals, Good directing which goes way too hard considering it's a rom com and I'm not joking, watching this feels like I'm watching a shinkai movie with production values of a high budget shonen movie, every charcter in this show has their own charm, like oregairu every character in this show is well written and likeable. And the one thing I like is they have a likeable mc!!! How long has it been sincewe got a mc that we like and it's not edgy, over powered, or some kind of secret genius. He's just a random guy at the school with no particular talent, and that's what I like about him.",
            score: 10,
            tags: ["Recommended", "Preliminary"],
            is_spoiler: false,
            is_preliminary: true,
            episodes_watched: null,
            user: {
                username: "Hickykissy",
                image: "https://cdn.myanimelist.net/s/common/userimages/6d21e0fb-9097-4d5a-8439-773d1513b071_225w?s=933c75dab4f52d8434989b89d27faf97",
            },
        },
        {
            id: 535849,
            type: "anime",
            reactions: {
                overall: 9,
                nice: 0,
                love_it: 8,
                funny: 0,
                confusing: 0,
                informative: 0,
                well_written: 1,
                creative: 0,
            },
            date: "2024-08-31T13:31:00+00:00",
            review: "This is definitely an amazing anime that doesn\u2019t come by every season. The story follows our protagonist through his journey meeting three \u201closing heroines\u201d and help them overcome getting rejected from their crush. Unlike other anime\u2019s they are not attracted to the protagonist and thus it seems genuine. All of the characters are amazing and they portray their characteristics very well. I won\u2019t go in depth and write 3 paragraphs just explaining them all but all of them are just out of this world. Apart from the characters, the production is also very good. Just within the first few seconds you can see that aninsane amount of passion went into this. The opening animation is just so lovely, the art style, the animations the music, they all make it feel so alive and it\u2019s beautiful. The same can be said for the three different outros, the animations (did I tell that they all have unique animations?) all follow the characteristics of the girls while having some banger music that I haven\u2019t listened to in an anime for a while. \n\nIt\u2019s not just the intros and the outros. The whole anime is amazingly animated and it all feels alive. It\u2019s not too overwhelming to the point where you can\u2019t focus, while also being beautiful and captivating you into the world of the story. Especially in some of the emotional scenes, it makes you shiver with just the animation. Even if you don\u2019t know the context at all, and if you have just seen that randomly on the internet, even if you didn\u2019t hear anything, the animation alone makes the scene feel emotional and sad. Now imagine it with the context. \n\nEven though I have spoken about the animation for the past 2 paragraphs, it\u2019s not my favorite aspect of it. I\u2019m not the type to like an anime just for its animations, animations are just the cherry on top, without the actual \u201ccake\u201d it won\u2019t matter how good the animations are. And I\u2019m happy to say that the story, the characters and all that jazz leave the already perfect animations and the art style in the dust. As I said, I don\u2019t think it\u2019s useful for me to write 5 paragraphs about the story and how well it is. It\u2019s a waste of time for both me and you, but all you need to know is that it\u2019s amazing and it will definitely blow you away.\n\nOverall, I am really found of this anime. Usually I am a picky watcher, I don\u2019t say an anime is amazing that often. It\u2019s rare for me to say an anime is amazing let alone saying it\u2019s a masterpiece. But for this anime I can easily say that it\u2019s a masterpiece. It has all the things you want in an anime, the characters, the art style, it\u2019s not unrealistic where all the girls simp for the protagonist, not a lot of cringe moments, and a story that feels genuine. I would recommend this anime to anyone who wants to watch an anime. It\u2019s a must watch, and I just can\u2019t put my feelings to words, you have to watch it to understand it. And trust me, a few episodes in you will thank me for it.",
            score: 10,
            tags: ["Recommended", "Preliminary"],
            is_spoiler: false,
            is_preliminary: true,
            episodes_watched: null,
            user: {
                username: "Anonymousanime47",
                image: "https://cdn.myanimelist.net/s/common/userimages/c4337e5d-6a70-4830-8256-ffaf68ecf1b5_42x62_i?s=dff93c37a262ccfba9f92acd688aa760",
            },
        },
        {
            id: 535341,
            type: "anime",
            reactions: {
                overall: 9,
                nice: 1,
                love_it: 6,
                funny: 0,
                confusing: 0,
                informative: 0,
                well_written: 2,
                creative: 0,
            },
            date: "2024-08-26T02:45:00+00:00",
            review: "Animation and art: Extremely well done. Some absolutely gorgeous shots, with subtle character animations being used to really breath life into everything. I love when a lot of love is given to something that would be a few frames or an afterthought in another show, especially when used to help emphasize a character trait and build out the world a bit. A lot of lens flare, soft glow and other tricks to help elevate the atmosphere, but all used pretty tastefully and it mostly manages to compliment the gorgeous character animation. A lot of intentionality behind the shots. Makingthe school feel a bit rundown is also a very nice touch to give a sense of place and grounding to everything.  It's poetic that a show about imperfect people with broken hearts would have an imperfect school.  None of it is revolutionary or mind-blowing but there's a level of craftsmanship and care here that suggests a really strong animation crew giving it their best and a competent director at the helm who really knows their craft.  \n\nPlot and characters: the hook is nice, but the actual plot itself is mostly just a collection of short vingettes about each of the girls.  What I really love are the little character details and the unique dynamics between the different characters.  Everyone feels like a real person, or at least the anime equivalent of a real person.  No character is completely two dimensional, and everyone acts as though they are considering things from multiple angles (aside from a couple of characters who are made to be a little more dense).  This is amplified by small character moments that feel pretty organic amidst otherwise unremarkable dialogue scenes, which help elevate some scenes that would feel a bit mundane into something more. \n\nOne point of contention I've seen is that the MC is boring or just exists as a shoulder to cry on, etc.  I think the MC is actually pretty strong.  Unlike many other generic, awkward harem protags who feel like blank sheets of paper, this guy seems like a regular, awkward dude.  He's a pretty considerate and insightful person, he's insecure, he has an arrogant streak, and he has aspirations he doesn't even want to admit to himself.  He isn't overly boring, he isn't overly weird, he's just insecure and he's trying to break out of his insecurity and denial a little bit at a time, that's his arc.  Again, he feels like a \"real\" person by anime standards (esp. harem anime), and I appreciate the show letting him develop without needing to instantly build romantic tension.  I also think his relationship with blue-hair is very cute and well done.  \n\nI will say I don't love the the fan-service shots that just feel completely unnecessary and gratuitous.  I'm not wholely against fan-service, and I know that most of it is pretty tame if we put this in the harem genre, but it feels like it just cheapens some pretty strong material and really takes me out of it.  I'd prefer a show with this level of craft to be more accessible to people outside of the hardcore weeb and degen camps.",
            score: 9,
            tags: ["Recommended", "Preliminary"],
            is_spoiler: false,
            is_preliminary: true,
            episodes_watched: null,
            user: {
                username: "TakoTaco1",
                image: "https://cdn.myanimelist.net/images/kaomoji_mal_white.png",
            },
        },
        {
            id: 535406,
            type: "anime",
            reactions: {
                overall: 7,
                nice: 1,
                love_it: 6,
                funny: 0,
                confusing: 0,
                informative: 0,
                well_written: 0,
                creative: 0,
            },
            date: "2024-08-26T19:15:00+00:00",
            review: "DID A1 JUST MAKE A MOVIE BUT THEY RELEASE IT AS ANIME INSTEAD? BRO WHAT IS THIS? WHAT IS THIS ART. well im talking about the art of this anime. they daNG so beautiful... uhm.. alright this is few of my romcom genre list that goes straight 10/10, why? because this is god dang masterpiece. i can guarantee you everything is perfect here. im glad found this anime from facebooks reels. thanks to random dude who post clipped anime everywhere. alright. this is ma farewell. btw they have Takagi here the one who had shining forehead, she is white haired guy girlfriend.(idk his name)",
            score: 10,
            tags: ["Recommended", "Preliminary"],
            is_spoiler: false,
            is_preliminary: true,
            episodes_watched: null,
            user: {
                username: "Ryzm",
                image: "https://cdn.myanimelist.net/s/common/userimages/b56f413e-2a6b-4a9e-9bb7-d414963bc29b_225w?s=c9cf52faa5d58ba3464858f396c2deb3",
            },
        },
        {
            id: 533039,
            type: "anime",
            reactions: {
                overall: 14,
                nice: 5,
                love_it: 3,
                funny: 1,
                confusing: 3,
                informative: 0,
                well_written: 2,
                creative: 0,
            },
            date: "2024-08-03T22:27:00+00:00",
            review: "The first time I saw this show\u2019s poster I expected it to be another generic and cringe LN romcom with crappy moeblobs, but as it turns out, there's a fair chance it might end up being the best show to have come out this season. The production quality of the show is high and the faces are quite expressive (keep track of the eyes). There\u2019s the wonderfully executed punchy photographic rotoscope for character models that make them pop out of the screen, which works for its kind of physical comedy. Also, the show\u2019s stylised limited animation approach for exaggerated physical comedy (staccato effect) pairs incrediblywell with the exaggerated deformed facial expressions, which then combine with whoosh sfx-es for the motion. The blobbier faces are more of a plus than a minus here with this approach considering how expressive they get. The same thing that almost put me off from picking it up in the first place.\n\nTalking about the male protagonist (the most important part of any harem/romcom) he has really expressive eyes, like the other charas, which deform into taremes and then into complete tunnel entrances with white walls in certain scenes for example, and then there\u2019s expressive, desperate, and worked-up dialogues of his reactions to the antics of the heroines and the unfolding events (quoted example in paragraph after next) or straight man comebacks lacking in condescension. All of these along with the exaggerated physical comedy and sound effects set him apart from the more workable MCs in more generic comedy harems or even a lot of the good harems where the reaction dialogue voice and tone is smugger. The Mc is made to be a good reactor, which is also the case for all the characters. \n\nWhen you combine all that with the general conduct of the MC, the reaction dialogue and retorts as well as judgmental monologues relating to the heroine truly feels empathetic throughout the comedy segments of these couple episodes and puts Mc on the same level as the people he is reacting to in the reaction scenes. This works so much better here considering the show presents the MC with losing heroine scenarios and their failed attempts at wooing their loved ones, which he has to react to as an observer. You just feel much more empathy and much less condescension. \n\nThe show's comedy is brilliantly executed and directed with great comedic timing and exaggerated physical comedy, with the very first episode setting the tone perfectly. In an early scene, the protagonist finds himself in a cafe where he sees one of the heroines and our protagonist\u2019s classmate, Yanami, getting rejected by her childhood friend after she encourages him to chase after the transfer student who had been with them for a month and was about to leave abroad again. After she's left alone in the cafe, she sees the cup with the chewed-out straw that belonged to her childhood friend and slowly starts bringing it to her mouth and eventually takes a sip, with the MC reacting with the \u201cAh no, Yanami-san, just don\u2019t please, that is too desperate to chew that straw, nooo!\u201d  with suspenseful music and elements of physical comedy involved, which completely expresses his second hand embarrassment. The Mc looks down in the middle of this, with hands over his face, and then looks up across the room to see her now noticing him with big dead eyes. Another scene has the protagonist\u2019s sister is shown making the same dead eyes out of concern as the camera abruptly shifts from the protagonist to his sister as he tells her he actually talked to 5 people today in response to her concern that he has no friends.\n\nThe comedy is also quite witty in how it deconstructs the rejection scenarios of the harem/romcom heroines, of which the above is an an example but there\u2019s much better scenes down the line. A different scene details the struggle of the heroine as he tells our MC that her and her crush's families are friends and they're concerned about them not hanging out as much as they organise a party to have them together, a funny and awkward moment delivered with creepy music. Another example of its wit is how it sets up a long scene with the MC and one other heroine visiting a water fountain a bit away from the main class building with the heroine asking him what he\u2019s doing there as it\u2019s strange, which leads to them having a verbal showdown regarding who is more knowledgeable about the water taps in school, with the heroine finally arguing after a good few volleys that the x floor tap during the afternoon is better despite the excess chlorine as it makes one used to it, following which the MC deduces she eats her lunch in the bathroom. Much better executed than I can express in a few words, as the direction plays a big part. \n\nFinally, perhaps the last and the qualifying element that enhances the show is that while it was in just a glimpse in the second episode, it showed it knows how to nail big moments, be they bittersweet or life affirming or heartwarming. Another heroine in the work, who is an athlete, ponders upon how she has been running in circles all this time. Later in the episode she is rejected and is cheered up by the protag and the straw heroine with the whole part being wholesome and comedic. Following this the next scene has the school nurse guessing and doodling a relationship chart of the students at night as her hobby and she hears sounds from the track ground, which she goes to check and finds the heroine there. They have a brief convo, and at the end the heroine asks the teacher if she can run one more lap: \u201cYou want to run some more?\u201d \u201cI feel like I can finally get somewhere.\u201d Then the scene cuts to a snap of the diary which shows the relationship chart with a question mark over an arrow between the heroine and the protagonist, portending things to come.\n\nPS: did I mention how well the ed suits the show?",
            score: 9,
            tags: ["Recommended", "Preliminary"],
            is_spoiler: false,
            is_preliminary: true,
            episodes_watched: null,
            user: {
                username: "ChouunShiryuu",
                image: "https://cdn.myanimelist.net/s/common/userimages/a3b120c2-da57-41df-9f80-1d7a5cace092_225w?s=f4b347ff6530399a3e19d3043fa1b843",
            },
        },
        {
            id: 533935,
            type: "anime",
            reactions: {
                overall: 6,
                nice: 1,
                love_it: 4,
                funny: 0,
                confusing: 0,
                informative: 0,
                well_written: 1,
                creative: 0,
            },
            date: "2024-08-12T04:48:00+00:00",
            review: "I am not someone who writes recommendations often, however, I was convinced by the joke in the closing shot of the 5th episode to write something, BRILLIANT! I enjoyed the story from the LN, but man is the anime amazingly produced, the art style, the music, the opening, the voice acting, the jokes. Everything seems perfect. A1 Pictures is back!! The production values of the show are just stunning and beautiful, you can see and feel the amount of passion put into this art piece. The OP and ED are just so well made, I almost never skip them and just rewatch them while waiting for thenext episode. They're so colorful, fun to watch and will surely bring one to a better mood. The Voice Acting is also beautiful, giving another layer to the characters they're playing. Take Chika for example, when she usually talks, she stutters, adding depth to her character.\n\nStory wise, the characters are all very distinct, Nukumizu, the MC seems dense, but he does have his own personality and worldviews, he just has a hard time making friends because he is shy and holds the status of \"Friend\" at a very high standard, which does hit close to home when I was in high school.\n\nThe other characters are also very distinct, Yanami seems obnoxious, loud and very selfish, the total opposite of Nukumizu, but she is fun, very caring and determined to pay off the debt she has to Nukumizu, as well as making him get out of his shell. \nLemon is very careless girl who is a running fanatic and is also very expressive in her own way. Chika is an introverted book worm, who is also cute and starts expressing herself more.\nThe main cast are all very distinct and far from possible stereotyping, making them very memorable and fun.\n\nAfter them you have the supporting cast, such as the hot nurse, the history teacher who forgets about Nukumizu, the Nukumizu's dearest little sister who is searching friends for Nukumizu and so many more.\n\nThis anime has it all, the production value is perfect and beautiful and the story is unique and fun. \n\nTl;Dr: This show is peak, A1 Pictures is back and change where you drink tap water based on the time of the day o7",
            score: 10,
            tags: ["Recommended", "Preliminary"],
            is_spoiler: false,
            is_preliminary: true,
            episodes_watched: null,
            user: {
                username: "DaBest159",
                image: "https://cdn.myanimelist.net/images/kaomoji_mal_white.png",
            },
        },
        {
            id: 534947,
            type: "anime",
            reactions: {
                overall: 7,
                nice: 2,
                love_it: 5,
                funny: 0,
                confusing: 0,
                informative: 0,
                well_written: 0,
                creative: 0,
            },
            date: "2024-08-21T21:32:00+00:00",
            review: "Unless something changes drastically this is the best produced anime for television ever made. And it's not even close. Direction, storyboard, script, voice acting, sound design, key frames, animation. You can usually pick two of these and say that they are exceptionally well done in one of the hottest animes each season and they are indeed great, no questions asked. But Makeine decided to do everything on that list to an absurdly high level. It's really hard talking more about it because it would be me gushing about it for 10 pages or containing myself and going for 1 paragraph and saying 'it's great\", just howI'm doing it now soooo let's talk about the elephant in the room: the story.\n\nThe story of Makeine is the bad derivative type, really it could've been anything else and would hardly make a difference, but sometimes is kinda hard to remember that an anime is not a book. A story is indeed really important but it should not make or break an anime (considering that nothing ridiculously offensive is happening), specially when such anime, that has indeed such a weak story, compensates this by building their characters layer by layer using the wealth of production quality that is available to itself.\nIt really feels and shows how they 20+ minutes of the anime are concerned in fleshing out the characters, through all the tools available possibly but considering what's best for the moment. It sometimes can be the voice acting, in other times a slight movement of hands (not with a zoom of the hands, just they moving with the character in view), but really what is amazing is that the things are not happening only when they are happening.\nUsually on animes you have pivotal moments where they focus one of the body parts and you can write pages about the feelings of the characters in that moment. Makeine is like that but through a bunch of times and having the characters still present as a whole.\nIt's hard to explain but the anime doesn't direct your view, it gives this job to the spectator and it bountifully rewards those paying attention. I don't know how many times I was watching and went back 5 seconds just to rewatch and get a bigger glimpse of a character's personality through some physical expression, and all this while maintaining it's anime roots (it doesn't feel like actors while having the same amount of care put into physical expression).\n\nI will rewrite this eventually but what I want you to know is: what a fucking time to be alive and like anime.",
            score: 10,
            tags: ["Recommended", "Preliminary"],
            is_spoiler: false,
            is_preliminary: true,
            episodes_watched: null,
            user: {
                username: "mutosui",
                image: "https://cdn.myanimelist.net/s/common/userimages/fb0a4873-e017-43dd-abc7-39dd295ff305_225w?s=1536ab1a83d6a4ed95b6586529398fa1",
            },
        },
        {
            id: 536089,
            type: "anime",
            reactions: {
                overall: 8,
                nice: 1,
                love_it: 6,
                funny: 0,
                confusing: 1,
                informative: 0,
                well_written: 0,
                creative: 0,
            },
            date: "2024-09-02T21:57:00+00:00",
            review: "\u2022the story is very good and unique,I really like this anime.... \u2022The anime's visuals are great, and the art style is very beautiful \u2022The characters in this anime feel alive, the friendships and interactions are very lively \u2022when they solve their problems it is very real, the expressions and interactions, I'm not a fan of Romcom anime but for some reason this anime is very interesting, the character interactions are very lively, I like Nukumizu... it's very rare to have an MC who has a mindset as interesting as Nukumizu. \u2022I highly recommend this anime...I like it where all the heroines don't have feelings for the MC,I prefer a platonic relationship between the heroine and the MC as they slowly develop their feelings for the MC. \nI really like anime like this, thank you A1 for making this good School Life anime....",
            score: 10,
            tags: ["Recommended", "Preliminary"],
            is_spoiler: false,
            is_preliminary: true,
            episodes_watched: null,
            user: {
                username: "Jexxxxxx",
                image: "https://cdn.myanimelist.net/images/kaomoji_mal_white.png",
            },
        },
        {
            id: 532350,
            type: "anime",
            reactions: {
                overall: 9,
                nice: 1,
                love_it: 4,
                funny: 1,
                confusing: 2,
                informative: 1,
                well_written: 0,
                creative: 0,
            },
            date: "2024-07-27T22:37:00+00:00",
            review: 'Stunning visuals, quirky yet likeable characters, and heart-catchingly humorous dynamics, the show is a chef\'s kiss, a wondrously crafted masterpiece for any beholder out there. As someone who has been watching comedy and romance anime for years, I daresay this one takes one of the top spots. The story is interesting, the pacing is steady, and the comedy hits the sweet spot where you can cringe a tad bit but not question the surreal absurdity of the punchline. The story is, in a sense, unique. Instead of one, the story features three main "losing heroines," which is an interesting take, considering the complexity of writing each character.The characters have varied personalities, which only adds spices and flair to the story, and creates chemistry that most people will enjoy.\n\nAll in all, I this anime receives my full support in recommending it.',
            score: 10,
            tags: ["Recommended", "Preliminary"],
            is_spoiler: false,
            is_preliminary: true,
            episodes_watched: null,
            user: {
                username: "DeaconHo",
                image: "https://cdn.myanimelist.net/images/kaomoji_mal_white.png",
            },
        },
        {
            id: 532312,
            type: "anime",
            reactions: {
                overall: 10,
                nice: 5,
                love_it: 4,
                funny: 0,
                confusing: 1,
                informative: 0,
                well_written: 0,
                creative: 0,
            },
            date: "2024-07-27T14:17:00+00:00",
            review: "I've been seeing slander upon Make Heroine ga Oosugiru! I went into this show blind and after just three episodes I can see again. To the hungry it is bread, to the depressed it is hope, and to anime fans everywhere it is undoubtedly peak. People are sleeping on this season but I assure you shows like this one make me believe this is one of the best seasons yet. You've probably read the synopsis but it's about a story of a male protag navigating life with three female protagonists whose crush already all have a love interest. What follows is a bittersweet comedy thatmakes you laugh a lot, cry a little, and have a great time all around. \n\nThe anime focuses on a male protagonist who has an actual personality and is bearable, an immediate plus. Then each of the three female leads are all distinct but human. Even though some might embody tropes, you will find out by the end of episode three that the show is willing to break through tropes and make the characters unique. You are rooting for everyone in this show, and hating none. \n\nPlease give this show a chance, the soundtrack and ending sequence makes me jump out of my chair every single time and I think that the only people losing in this anime, are the people who don't watch it!",
            score: 10,
            tags: ["Recommended", "Preliminary"],
            is_spoiler: false,
            is_preliminary: true,
            episodes_watched: null,
            user: {
                username: "PlainCasual",
                image: "https://cdn.myanimelist.net/images/kaomoji_mal_white.png",
            },
        },
        {
            id: 536078,
            type: "anime",
            reactions: {
                overall: 6,
                nice: 0,
                love_it: 4,
                funny: 0,
                confusing: 1,
                informative: 0,
                well_written: 1,
                creative: 0,
            },
            date: "2024-09-02T19:06:00+00:00",
            review: "Is this series worth watching? Yes now watch it! Why? Tomboy bozangaz baby Besides that we got a good cast with a fun premise where the Mc is the overlooked side character who never gets girls. The male Mc is more than just a blank slate with no humor. Even the side character guys are cool bros instead of mindless blobs. Is this a harem? Depends on your definition. The Mc does not have any girl directly state romantic feelings for him. It does center around multiple girls though.Are you sure?\nTOMBOY BOZANGAS and BEACH EPISODE\nPeak is achieved\nWatch it now!!!!",
            score: 10,
            tags: ["Recommended", "Preliminary"],
            is_spoiler: false,
            is_preliminary: true,
            episodes_watched: null,
            user: {
                username: "rohan121",
                image: "https://cdn.myanimelist.net/s/common/userimages/36f2b296-c101-4c00-9087-7cc91ba75d1d_225w?s=c5643db6012993354aa9471b4c903f11",
            },
        },
        {
            id: 534544,
            type: "anime",
            reactions: {
                overall: 9,
                nice: 5,
                love_it: 2,
                funny: 0,
                confusing: 1,
                informative: 0,
                well_written: 1,
                creative: 0,
            },
            date: "2024-08-18T02:37:00+00:00",
            review: "I have never writen a review so i apologise if this is scuffed. To me this anime is simply spectacular, i have been off anime for about 2 years, the last anime i was watching weekly was Bocchi The Rock (take that however you wish). Each time i tried a new anime i always got tired and felt like i was forcing myself to watch it. JJK S2. Oshi No Ko, Konosuba S3, Tomozaki kun. All anime i tried and left after a while despite having read the original source material for some of them. What is it about this anime that makes it different? that ilook at the episodes remaining and curse myself for being unable to watch more? I coudn't really tell you but i can try.\n\nThe characters in the way they talk and act, choices they make and the dynamics between them are simply amazing, i haven't seen an anime with such good character writing in a while. The animation is also incredible with A1 putting in tons of work, i figure they need a new anime to pour that unique love to after Kaguya-Sama wrapped up. the world feels lived in more than ever and small details add tons to it. Moments are treated with the seriousness they deserve and the characters get their quiet moments without anything interrupting. Equally i see very little fanservice which is always pleasant. In many ways weirdly it reminded me of Oregairu and the main heroine could very much be inspired by Yui\n\nAh the story yes, it's simple. Daily lives of the girls that lost to the love triangle, think Rem, Yui Yuigahama, Onodera Kosaki and all the others. This show gives us 3 main loser girls to follow as they try to deal with their heartbreak, while also giving the winner girls some time to shine. and not be just parodies of anime heroines,\n\nI highly reccomend this anime in the sense that it's not thought provoking, not deep, not even that special in the grand scheme. But damn if it made me feel happy watching it like i haven't felt in many years.\n\n\nAKA. ANIME IS SAVED PRAY TO THE NEW ANIME JESUS YANAMI ANNA AND LET THE IDIOTS PRAISE THAT DUMB FUCKING RUSSIAN WHORE WITH THE NICE LEGS",
            score: 9,
            tags: ["Recommended", "Preliminary"],
            is_spoiler: false,
            is_preliminary: true,
            episodes_watched: null,
            user: {
                username: "Niycaionic",
                image: "https://cdn.myanimelist.net/s/common/userimages/43bc63c5-8a0a-4eb8-83bd-ea967d678b90_42x62_i?s=d49d0d4ff437c88e80a2e7925b7223ef",
            },
        },
        {
            id: 534133,
            type: "anime",
            reactions: {
                overall: 9,
                nice: 7,
                love_it: 2,
                funny: 0,
                confusing: 0,
                informative: 0,
                well_written: 0,
                creative: 0,
            },
            date: "2024-08-13T23:19:00+00:00",
            review: "Really beautiful artwork and animation. The story is realistically paced and the characters feel very human and not exaggerated as might be expected in romcom anime series. Watching how the main guy interact with his friends and develop should be a treat, maybe if they potentially progress to something further than just friends. Hopefully it doesn\u2019t just turn into a straight up harem though; I would be disappointed by that. I found the first girl, Anna, annoying at the beginning, but some of her actions are actually charming and sweet. I believe this show will be one of the gems of the season.",
            score: 9,
            tags: ["Recommended", "Preliminary"],
            is_spoiler: false,
            is_preliminary: true,
            episodes_watched: null,
            user: {
                username: "shazampow",
                image: "https://cdn.myanimelist.net/s/common/userimages/973558f1-c280-4dd3-8def-d4fcd7be927c_42x62_i?s=518c25da4868fc073ae1ed5e8f2c9317",
            },
        },
        {
            id: 533073,
            type: "anime",
            reactions: {
                overall: 11,
                nice: 11,
                love_it: 0,
                funny: 0,
                confusing: 0,
                informative: 0,
                well_written: 0,
                creative: 0,
            },
            date: "2024-08-04T07:31:00+00:00",
            review: "First review ever on MAL just because I love this anime so much. I'm a makeine manga reader (not that there's much to read) and read a bit of the LN too. The anime has surpassed my expectation by a mile and I think this just might be the best rom-com I've ever watched. The characters are actually fairly generic, but they have enough of a twist to feel incredibly fresh. I also haven't laughed quite this much while watching anime in a while. I love the art style and I love the OP and the ED. Overall, I'm very grateful for the amountof budget dedicated towards this anime.\n\n10/10, although I'd recommend this to a more seasoned anime watcher rather than a newbie.",
            score: 10,
            tags: ["Recommended", "Preliminary"],
            is_spoiler: false,
            is_preliminary: true,
            episodes_watched: null,
            user: {
                username: "Kanekkki",
                image: "https://cdn.myanimelist.net/s/common/userimages/87185787-d7bf-4598-82a2-a9e347a3148e_225w?s=29e80ca3c3562b995950477a08d05f86",
            },
        },
        {
            id: 535766,
            type: "anime",
            reactions: {
                overall: 33,
                nice: 5,
                love_it: 0,
                funny: 11,
                confusing: 14,
                informative: 0,
                well_written: 3,
                creative: 0,
            },
            date: "2024-08-30T13:05:00+00:00",
            review: 'So after having watched 7 episodes of this show I found myself becoming bored with it and I didn\u00b4t know why until I asked myself "What does the characters in this show want?" And for the life of me I could not answer. After getting rejected by their love interest it seems that there are no motivations for the girls in the cast and the male mc never had any motivation, beyond living a peaceful high school life. This means that there is nothing to look forward to while watching this series. The cast in this show simply just is, but with none of thecharm of a slice of life show. The novelty of the premise has worn off and just like the characters of this show I have lost all motivation.\nFrom a technical point of view you can say it has good animation, sound, voice acting and so on, but to me it is all window dressing, there is nothing behind it. To sum it up; I found the show endearing to begin with, now I just find it boring, not bad from a technical point of view, just boring.',
            score: 4,
            tags: ["Mixed Feelings", "Funny", "Preliminary"],
            is_spoiler: false,
            is_preliminary: true,
            episodes_watched: null,
            user: {
                username: "Hbarca",
                image: "https://cdn.myanimelist.net/images/kaomoji_mal_white.png",
            },
        },
        {
            id: 533318,
            type: "anime",
            reactions: {
                overall: 9,
                nice: 6,
                love_it: 2,
                funny: 0,
                confusing: 1,
                informative: 0,
                well_written: 0,
                creative: 0,
            },
            date: "2024-08-06T11:07:00+00:00",
            review: "For all the losing/tragic heroine fans out there, this one is for you, we finally have our hero. ~~~~~ Story/Plot 8/10 ~~~~~ * The flow of the story from episode to episode is magnificent, it meshes everything together with no filler episodes. * Unique in its own right, we don't get a lot of animes where the 2nd female lead becomes the star of the show. * Although a little bit melodramatic and predictable in some parts, it's not boring.* I love how the romance side of this is not rushed. Slowly but surely is the only way.\n\n* The comedy is refreshing and fun to watch, it's not forced or anything.\n\n* The troupes are there, like ecchi/fan services and awkward moments, but it's not overly done to a point where it gets absurd and boring, it's close to a high school reality setting, where everyone is just being young and stupid, figuring and sorting their feelings. It's quite relatable for young minds such as myself. \ud83e\udd2d\n\n* This is a well-thought-out story that you might enjoy to the end.\n\n* Though not possible, hopefully, this won't end up in a harem situation, because that would be disappointing.\n\n~~~~~ Art/Animation 8/10 ~~~~~\n\n* Style is likable, not too cartoonish, a good balance between 2D and reality, simple and not overly realistic.\n\n* The Author and the studio who made this did a good job, although the design is not quite memorable, it's good, but not the type that will linger in your dreams.\n\n* You'll know what kind of character each and everyone has by the design alone, they did a good job of showing it and they don't look all the same, even the background characters, they have their unique features, which is quite rare nowadays.\n\n* For a rom-com, the art fits quite perfectly for the story.\n\n* The art is maintained quite well throughout the episodes, they have quite the budget.\n\n* As for the background, it's picturesque, hopefully, they do more scenes with beautiful scenery, and not just the school alone.\n\n~~~~~ Sound/OST/OP&amp;ED 8/10 ~~~~~\n\n* The VAs for this anime did a good job of giving life to the characters they portray.\n\n* The background music fits every scene, which helps to capture the moment, making it more dramatic.\n\n* OST/OP&amp;EDs are quite good, it's jolly, upbeat and fun, and they bring out the essence of the whole anime.\n\n~~~~~ Characters 8/10~~~~~\n\n* Not gonna spoil much.\n\n* MC gives off Hachiman vibes at first, but he's not that kind of person.\n\n* All characters are loveable and maybe  relatable for some of you.\n\n* Would've been better if there were antagonists/third parties mixed in to make things spicy, but none so far.\n\n* FMC is eye-catching, to say the least.\n\n* That's all for now.\n\n~~~~~ Enjoyment 7/10 ~~~~~\n\n* Personally speaking, I didn't quite relate, so it's not gonna be a memorable experience for me, because I'm not the anime's target audience which is for teens and young adults. I'm not young or in high school, I'm quite the uncle so I don't get that tingling feeling anymore like I used to, watching romcoms back then. \n\nRight now I'm more into heavy stuff like; mystery/drama/action/gore/horror/adult/18+/etc., categories. My taste buds changed over time which is quite sad.\n\nBut don't worry, I know a good romcom anime when I see one. Hehe. So I know you'll enjoy this and hopefully, you'll give this one a try.",
            score: 8,
            tags: ["Recommended", "Preliminary"],
            is_spoiler: false,
            is_preliminary: true,
            episodes_watched: null,
            user: {
                username: "Wasakanene",
                image: "https://cdn.myanimelist.net/s/common/userimages/25b788ca-edd8-4525-b2df-c23b10f2aeed_225w?s=955ef4488efb2d8cc78bcb357fcc96b8",
            },
        },
    ];

    const formatDate = (dateString) => {
        if (!dateString) return "Unknown";

        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.toLocaleString("en-US", { month: "short" });
        const year = date.getFullYear();

        return `${day} ${month}, ${year}`;
    };

    return (
        <div>
            <h4 className="text-3xl font-semibold font-suse text-gray-600 mb-3">
                Reviews:
            </h4>

            {/* Review Cards Wrapper */}
            <div className="space-y-5">
                {animeReviewData.map((item) => (
                    <article
                        key={item.id}
                        className="bg-white rounded-md p-3 shadow-md"
                    >
                        {/* Header Items - User name, image, review tags */}
                        <header className="flex justify-between border-b-2 pb-2 mb-2">
                            <div className="flex items-center gap-3">
                                <Avatar
                                    rounded
                                    size="sm"
                                    img={item.user?.image}
                                    alt={item.user?.username}
                                />
                                <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                                    {item.user?.username}
                                </cite>
                                <div className="divider divider-horizontal m-0"></div>
                                <div className="space-x-2">
                                    {item.tags?.map((tag, idx) => (
                                        <span
                                            className="badge badge-accent p-2.5"
                                            key={idx}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>{formatDate(item.date)}</div>
                        </header>

                        {/* Review Body */}
                        <div>
                            <p className="=">
                                <span className="text-sm text-slate-600 review-text whitespace-pre-line">
                                    {item.review.length > 625
                                        ? `${item.review.slice(0, 625)}...`
                                        : item.review}
                                </span>
                                <span
                                    className="px-4 text-blue-600 cursor-pointer text-sm hover:underline underline-offset-2"
                                    onClick={(e) => {
                                        if (
                                            e.target.innerText === "Read More"
                                        ) {
                                            e.target.parentElement.querySelector(
                                                ".review-text"
                                            ).innerText = item.review;
                                            e.target.innerText = "Read Less";
                                        } else {
                                            e.target.parentElement.querySelector(
                                                ".review-text"
                                            ).innerText = `${item.review.slice(
                                                0,
                                                625
                                            )}...`;
                                            e.target.innerText = "Read More";
                                        }
                                    }}
                                >
                                    Read More
                                </span>
                            </p>
                            <div className="divider my-2"></div>
                            <div className="flex gap-2 items-end">
                                <p className="font-semibold text-gray-800 pr-2 text-lg">
                                    Reactions:
                                </p>

                                <p className="text-sm flex gap-1">
                                    <span>All:</span>
                                    <span className="badge badge-info">
                                        {item.reactions.overall}
                                    </span>
                                </p>
                                <p className="text-sm flex gap-1">
                                    <span>Nice:</span>
                                    <span className="badge badge-accent">
                                        {item.reactions.nice}
                                    </span>
                                </p>
                                <p className="text-sm flex gap-1">
                                    <span>Loved:</span>
                                    <span className="badge badge-secondary">
                                        {item.reactions.love_it}
                                    </span>
                                </p>
                                <p className="text-sm flex gap-1">
                                    <span>Funny:</span>
                                    <span className="badge badge-primary">
                                        {item.reactions.funny}
                                    </span>
                                </p>

                                <Tooltip
                                    content={
                                        <div className="p-1">
                                            <p>Funny: {item.reactions.funny}</p>
                                            <p>
                                                Confusing:{" "}
                                                {item.reactions.confusing}
                                            </p>
                                            <p>
                                                Informative:{" "}
                                                {item.reactions.informative}
                                            </p>
                                            <p>
                                                Well Written:{" "}
                                                {item.reactions.well_written}
                                            </p>
                                            <p>
                                                Creative:{" "}
                                                {item.reactions.creative}
                                            </p>
                                        </div>
                                    }
                                    placement="right"
                                >
                                    <p className="cursor-pointer pl-2 text-sm underline underline-offset-2">
                                        + More
                                    </p>
                                </Tooltip>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default page;
