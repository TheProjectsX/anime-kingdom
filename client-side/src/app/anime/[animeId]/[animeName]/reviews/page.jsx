import { Avatar } from "flowbite-react";
import React from "react";

const page = () => {
    const item = {
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
    };

    return (
        <div className="bg-white rounded-md p-3">
            {/* Review Card */}
            <div className=" flex items-center gap-3 border-b-2 pb-2 mb-2">
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
                        <span className="badge badge-accent p-2.5" key={idx}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default page;
