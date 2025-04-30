// زانیاری چیرۆکی دەنگدانەوەکانی کتێبخانە
const STORY_DATA = {
    // دیمەنی سەرەتا: دەروازەی کتێبخانە
    "entrance": {
        id: "entrance",
        background: "items/Library", // Changed from "scene-library-detailed" to use the Library.png image
        dialogue: [
            {
                speaker: "Narrator",
                text: "The rain pours heavily outside as you rush toward the old library, seeking shelter from the storm."
            },
            {
                speaker: "Narrator",
                text: "The ancient wooden door creaks open reluctantly, as if warning you against entering."
            },
            {
                speaker: "Narrator",
                text: "Something about this place feels familiar, though you're certain you've never been here before."
            },
            {
                speaker: "Narrator",
                text: "Inside, the air is thick with dust and the scent of old books. The library seems unnaturally empty."
            },
            {
                speaker: window.playerName || "You",
                text: "Hello? Is anyone here? I just need somewhere to wait out the storm..."
            },
            {
                speaker: "Narrator",
                text: "Your voice echoes through the vast hall. No response comes, save for the distant rumble of thunder."
            },
            {
                speaker: "Narrator",
                text: "A strange sensation washes over you—a feeling that the books are somehow aware of your presence."
            }
        ],
        nextScene: "main_hall",
        effects: {
            visual: "flicker"
        },
        choices: [
            {
                text: "Explore deeper into the library",
                nextScene: "main_hall"
            },
            {
                text: "Check the reception desk for a librarian",
                nextScene: "reception"
            },
            {
                text: "Maybe I should leave and find somewhere else...",
                nextScene: "try_leave"
            }
        ]
    },
    // هەوڵدان بۆ دەرچوون
    "try_leave": {
        id: "try_leave",
        background: "items/door", // Changed to use the door.png image from items folder
        effects: {
            visual: "flicker"
        },
        dialogue: [
            {
                speaker: "گێڕەرەوە",
                text: "دەرگاکە کە هەر ئێستا لێوەی هاتیتە ژوورەوە ئێستا... جیاوازە. کۆنترە. دروستکراوە لە داری تاریک و هێمای سەیر لەسەر چوارچێوەکەی هەڵکەندراوە."
            },
            {
                speaker: "گێڕەرەوە",
                text: "کاتێک دەگەڕێیتەوە بۆ دەرچوون، هەورە تریشقەیەکی بەهێز بیناکە دەهەژێنێت. گڵۆپەکان بە شێوەیەکی ترسناک دەکوژێنەوە و دادەگیرسێنەوە."
            },
            {
                speaker: "تۆ",
                text: "ئەمە چییە...؟ ئەمە ئەو دەرگایە نییە کە پێی هاتمە ژوورەوە. ئەم هێمایانەش..."
            },
            {
                speaker: "گێڕەرەوە",
                text: "هەوڵ دەدەیت دەستەکە بجووڵێنیت، بەڵام ناجووڵێت. وا دیارە هیچ بژاردەیەکت نییە جگە لە چوونە ناو قووڵایی کتێبخانەکە."
            },
            {
                speaker: "گێڕەرەوە",
                text: "هەندێک لە هێماکان لە توێژینەوەکانت لەسەر زمانە کۆنەکان دەناسیتەوە، بەڵام نابێت لەگەڵ یەکتر بن—چەندین هەزار ساڵ و کەلتووری جیاواز لەخۆ دەگرن."
            }
        ],
        choices: [
            {
                text: "زیاتر قووڵ ببەرەوە ناو کتێبخانەکە",
                nextScene: "main_hall"
            },
            {
                text: "مێزی پێشوازی بپشکنە بۆ دۆزینەوەی کتێبدارێک",
                nextScene: "reception"
            },
            {
                text: "دەربچۆ و شوێنێکی تر بدۆزەوە...",
                nextScene: "try_leave"
            }
        ]
    },
    
    // دیمەنی مێزی پێشوازی
    "reception": {
        id: "reception",
        background: "scenes/library-desk-scene", // Changed from "scene-reception-desk" to use the new image
        dialogue: [
            {
                speaker: "گێڕەرەوە",
                text: "مێزی پێشوازی داپۆشراوە بە چینێکی تەنک لە تۆز. زەنگێکی کۆن لەسەر پێشخانەکە دانراوە."
            },
            {
                speaker: "گێڕەرەوە",
                text: "لە تەنیشتی، دەفتەرێکی کراوە هەیە کە لاپەڕەکانی بە تێپەڕبوونی کات زەرد بوونە. دوا بەرواری تۆمارکراو هی زیاتر لە ٥٠ ساڵ پێشە."
            },
            {
                speaker: "تۆ",
                text: "ئەمە ناکرێت ڕاست بێت... کتێبخانەکە ناکرێت ئەوەندە ماوەیە داخرابێت."
            },
            {
                text: "هێماکانی سەر دەرگاکە بە وردی بپشکنە",
                nextScene: "examine_door_symbols"
            }
        ],
        choices: [
            {
                text: "قووڵتر بڕۆ ناو کتێبخانەکە و زیاتر فێر ببە",
                nextScene: "main_hall"
            },
            {
                text: "مێزی پێشوازی بپشکنە بۆ دۆزینەوەی وەڵام",
                nextScene: "reception"
            },
            {
                text: "زەنگەکە لێ بدە",
                nextScene: "meet_librarian"
            }
        ]
    },
    
    // دیمەنی نوێ: پشکنینی هێماکانی دەرگا
    "examine_door_symbols": {
        id: "examine_door_symbols",
        background: "scene-library-detailed",
        effects: {
            visual: "pulse"
        },
        dialogue: [
            {
                speaker: "گێڕەرەوە",
                text: "نزیکتر دەبیتەوە لە هێماکان، شوێنی هێڵەکانیان بە پەنجەکانت دیاری دەکەیت. دارەکە هەست بە گەرمییەکی نائاسایی دەکات."
            },
            {
                speaker: "گێڕەرەوە",
                text: "کاتێک پەنجەکانت دوا هێما دیاری دەکەن، تەزوویەک لە وزە بە ناو جەستەت دەڕوات. بۆ ساتێکی کورت، کورتە دیمەنی سەردانکەرانی تر دەبینیت—دەیان کەس لە سەردەمە جیاوازەکان—هەموویان هەمان ئەم هێمایانە دەست لێ دەدەن."
            },
            {
                speaker: "گێڕەرەوە",
                text: "لە هەر دیمەنێک، سەردانکەران زیاتر بێهیوا دیارن کاتێک دەگەڕێنەوە بۆ ئەم دەرگایە بە بەردەوامی، بەرەو پیربوون دەچن لەکاتێکدا کتێبخانەکە وەک خۆی دەمێنێتەوە."
            },
            {
                speaker: "تۆ",
                text: "ئەم بەروارانە ناکرێت ڕاست بن... دوا تۆمار هی ساڵی ١٩٧٣ـە. ئەوان لێرە گیریان خواردبوو... وەک من کە ئێستا لەوانەیە گیرم خواردبێت."
            },
            {
                speaker: "گێڕەرەوە",
                text: "کاتێک لاپەڕەکان هەڵدەدەیتەوە، شتێکی سەیر دەبینیت. ناوەکان دەست دەکەن بە دووبارە بوونەوە لە ماوەی چەندین دەیە، بە هەمان خەتی دەست."
            },
            {
                speaker: "گێڕەرەوە",
                text: "شتێک دەبینیت کە لەسەر چوارچێوەی دەرگاکە هەڵکەندراوە—نووسینێکی بچووک کە دەڵێت: 'زانیاری تەنها ڕێگای دەرچوونە.'"
            }
        ],
        choices: [
            {
                text: "سەیرتر، هەندێک لە ناوی قەرزکەرەکان تێبینی سەیریان لەتەنیشتە: 'هەرگیز نەگەڕاوەتەوە'، 'تەنها بەرگەکە دۆزرایەوە'، یان ترسناکترینیان: 'جیاواز گەڕاوەتەوە'.",
                nextScene: "main_hall",
                storyFlag: "seeking_history"
            },
            {
                text: "بەدوای کتێبدارێکدا بگەڕێ کە لەوانەیە وەڵامی لا بێت",
                nextScene: "reception"
            },
            {
                text: "هەوڵبدە دەرچوونێکی تر بدۆزیتەوە",
                nextScene: "main_hall",
                storyFlag: "seeking_exit"
            }
        ]
    },
    
    // دیمەنی مێزی پێشوازی - پێشکەوتوو
    "reception": {
        id: "reception",
        background: "scenes/library-desk-scene", // Changed from "scene-reception-desk" to use the new image
        dialogue: [
            {
                speaker: "گێڕەرەوە",
                text: "مێزی پێشوازی داپۆشراوە بە چینێکی تەنک لە تۆز. زەنگێکی برۆنزی کۆن لەسەر پێشخانەکە دانراوە."
            },
            {
                speaker: "گێڕەرەوە",
                text: "لە تەنیشتی، دەفتەرێکی کراوە هەیە کە لاپەڕەکانی بە تێپەڕبوونی کات زەرد بوونە. دوا بەرواری تۆمارکراو هی زیاتر لە ٥٠ ساڵ پێشە."
            },
            {
                speaker: "تۆ",
                text: "ئەمە ناکرێت ڕاست بێت... کتێبخانەکە ناکرێت ئەوەندە ماوەیە داخرابێت. ئەم بینایە دەبێت ڕووخابایە."
            },
            {
                speaker: "گێڕەرەوە",
                text: "وێنەیەکی چوارچێوەکراوی بچووک لەسەر مێزەکە دەبینیت. دەرەوەی کتێبخانەکە پیشان دەدات، بەڵام بیناکانی دەوروبەر جیاوازن—وەک گرتەیەک لە سەردەمێکی تر."
            },
            {
                speaker: "تۆ",
                text: "زەنگەکە لێ بدە بۆ بانگکردنی کتێبدار"
            }
        ],
        choices: [
            {
                text: "زەنگەکە لێ بدە",
                nextScene: "meet_librarian"
            },
            {
                text: "دەftەرەکە بە وردتر بپشکنە",
                nextScene: "examine_ledger"
            },
            {
                text: "بڕوانامەی ڕۆژنامەکە بخوێنەوە",
                nextScene: "newspaper_clipping"
            }
        ]
    },
    
    // دیمەنی نوێ: بڕوانامەی ڕۆژنامە
    "newspaper_clipping": {
        id: "newspaper_clipping",
        background: "scenes/library-desk-scene", // Changed from "scene-reception-desk" to use the new image
        effects: {
            visual: "zoom"
        },
        dialogue: [
            {
                speaker: "گێڕەرەوە",
                text: "بڕوانامەی ڕۆژنامەکە هەڵدەگریت و وتارەکە بە وردی دەخوێنیتەوە."
            },
            {
                speaker: "گێڕەرەوە",
                text: "'کتێبخانەی ئێتێرنوم ئەم هەفتەیە یادی ٣٠٠ ساڵ لە کارکردنی بەردەوامی بێ پچڕان دەکاتەوە. دامەزرێنراوە لە ساڵی ١٧٢٣، کتێبخانەکە لە ئاگر، شەڕ و داڕمانی ئابووری ڕزگاری بووە بەبێ داخستنی دەرگاکانی.'"
            },
            {
                speaker: "گێڕەرەوە",
                text: "'لەوانەیە سەرنجڕاکێشترین شت کۆکراوەی تایبەتی دەگمەنی کتێبخانە بێت و تەلارسازی نائاسایی، کە خەڵکی ناوچەکە وەسفی دەکەن وەک 'لە ناوەوە گەورەتر لە دەرەوە'.'"
            },
            {
                speaker: "گێڕەرەوە",
                text: "'سەرۆکی ئێستای کتێبخانەکە، خاتوو ئێ. بلاکوود، کە 'لە بیرەوەری هەموان زیاتر' سەرپەرشتی کۆکراوەکەی کردووە، سەرکەوتنی کتێبخانەکە دەگەڕێنێتەوە بۆ 'خوێنەرە دڵسۆزەکان'.'"
            }
        ],
        choices: [
            {
                text: "لە بیرەوەری هەموان زیاتر؟ ئەمە ناکرێت بە واتای وشەکان ڕاست بێت...",
                nextScene: "main_hall"
            },
            {
                text: "بڕوانامەکە هەڵدەگێڕیتەوە و دەستخەتێک لە پشتەوەی تێبینی دەکەیت: 'هەمیشە دەگەڕێنەوە. کتێبخانەکە بانگیان دەکاتەوە.'",
                nextScene: "main_hall"
            }
        ]
    },
    
    // دیمەنی پێشکەوتووی پشکنینی دەftەر
    "examine_ledger": {
        id: "examine_ledger",
        background: "scenes/library-desk-scene", // Changed from "scene-reception-desk" to use the new image
        effects: {
            visual: "flicker"
        },
        dialogue: [
            {
                speaker: "گێڕەرەوە",
                text: "نزیکتر دەبیتەوە بۆ پشکنینی دەftەرە کۆنەکە. لاپەڕە زەردبووەکان پڕن لە دەستخەتی جوان، کە ناو و بەروار تۆمار دەکەن."
            },
            {
                speaker: "گێڕەرەوە",
                text: "ئەم بەروارانە ناکرێت ڕاست بن... تۆمارەکان چەندین سەدە دەگرنەوە، بەڵام دەستخەتەکە لە هەمووی یەکسانە."
            },
            {
                speaker: "گێڕەرەوە",
                text: "کاتێک لاپەڕەکان هەڵدەدەیتەوە، شتێکی سەیر دەبینیت. ناوەکان لە ماوەی چەندین دەیە دەست دەکەن بە دووبارەبوونەوە، لەگەڵ گەڕانەوەی سەردانکەران چەندین جار لە ماوەی ژیانیان."
            },
            {
                speaker: "گێڕەرەوە",
                text: "سەیرتر، هەندێک لە ناوی قەرزکەرەکان تێبینی سەیریان لەتەنیشتە: 'هەرگیز نەگەڕاوەتەوە'، 'تەنها بەرگەکە دۆزرایەوە'، یان ترسناکترینیان: 'جیاواز گەڕاوەتەوە'."
            },
            {
                speaker: "تۆ",
                text: "ئەمە چ جۆرە کتێبخانەیەکە...؟"
            },
            {
                speaker: "گێڕەرەوە",
                text: "سەرمایەک بە پشتتدا دێت کاتێک ناوی خۆت لە خوارەوەی لاپەڕەکە دەبینیت، بە بەرواری ئەمڕۆ، لەگەڵ بۆشاییەک لە تەنیشتی کە چاوەڕێ دەکات پڕ بکرێتەوە."
            },
            {
                speaker: "گێڕەرەوە",
                text: "چرپەکان بەرزتر دەبن کاتێک نزیک دەبیتەوە لە بەشێک کە بە پەتی مەخمەلی کۆن دیاری کراوە."
            },
            {
                speaker: "گێڕەرەوە",
                text: "لە سەرەوەی دەروازەکە، تابلۆیەکی کاڵبووە نووسراوە: 'بەشی قەدەغەکراو - تەنها کارمەندانی ڕێگەپێدراو'."
            }
        ],
        choices: [
            {
                text: "بچۆ ناو بەشی قەدەغەکراو",
                nextScene: "inside_restricted"
            },
            {
                text: "بەدوای ناوی خۆت بگەڕێ لە تۆمارە کۆنترەکان",
                nextScene: "find_your_history",
                storyFlag: "saw_your_name"
            },
            {
                text: "زەنگەکە لێ بدە بۆ بەرەنگاربوونەوەی کتێبدار",
                nextScene: "meet_librarian_confrontation",
                storyFlag: "saw_your_name"
            }
        ]
    },
    
    // دیمەنی دۆزینەوەی مێژووی خۆت
    "find_your_history": {
        id: "find_your_history",
        background: "scenes/library-desk-scene", // Changed from "scene-reception-desk" to use the new image
        effects: {
            visual: "flashback"
        },
        dialogue: [
            {
                speaker: "گێڕەرەوە",
                text: "هێمای سەیر بە کزی دەدرەوشێنەوە لە پشتی هەندێک کتێب، وەک لێدانی دڵ دەلەرنەوە."
            },
            {
                speaker: "گێڕەرەوە",
                text: "بە پەنجەی لەرزۆک، دەفتەرەکە بەرەو دواوە هەڵدەدەیتەوە، بەدوای ناوی خۆت دەگەڕێیت لە تۆمارە کۆنترەکان."
            },
            {
                speaker: "گێڕەرەوە",
                text: "ئەوەتا—پێنج ساڵ پێش. ناوەکەت دەردەکەوێت لەگەڵ تێبینی: 'قەرز کراوە: نەخشەسازی خەونەکان. گەڕاوەتەوە: لە کاتی خۆی.'"
            },
            {
                speaker: "گێڕەرەوە",
                text: "دە ساڵ پێش ئەوە، تۆمارێکی تر: 'قەرز کراوە: بنەماکانی دەستکاریکردنی بیرەوەری. گەڕاوەتەوە: خوێنەر دەڵێت لاپەڕەکان بەتاڵ بوون.'"
            },
            {
                speaker: "گێڕەرەوە",
                text: "کۆنترینیان، سی ساڵ پێش—پێش لەدایکبوونی تۆ: 'قەرز کراوە: تەلارسازی کات. تێبینی: خوێنەر بەڵێنی دا بگەڕێتەوە.'"
            },
            {
                speaker: "تۆ",
                text: "ئەمە مەحاڵە. من دەبوو بیرم لە هاتنە ئێرە بێت. مەگەر..."
            }
        ],
        choices: [
            {
                text: "تۆمارێکی کۆن بپشکنە کە هێمای پێوە درەوشاوەیە",
                nextScene: "examine_tome"
            },
            {
                speaker: "تۆ",
                text: "دوای دەنگی چرپەکان بکەوە",
                nextScene: "follow_whispers"
            }
        ]
    },
    
    // دیمەنی پشکنینی تۆمارێکی کۆن
    "examine_tome": {
        id: "examine_tome",
        background: "items/examine_tome", // Changed from "scenes/library-desk-scene" to use the new image
        effects: {
            visual: "zoom"
        },
        dialogue: [
            {
                speaker: "گێڕەرەوە",
                text: "لەناکاو، پارچەی بیرەوەری سەر هەڵدەدەنەوە—دانیشتن لەسەر هەمان ئەم مێزانە، ڕۆیشتن بەناو هەمان ئەم ڕاڕەوانە، بەڵام بە جلی جیاواز، ستایلی قژی جیاواز... لە ماوەی چەندین دەیە."
            },
            {
                speaker: "تۆ",
                text: "من گیرم خواردووە لە جۆرێک خولگە (لووپ). گەڕانەوە بۆ ئێرە بەردەوام، و هەموو جارێک بیرم دەچێتەوە."
            },
            {
                speaker: "گێڕەرەوە",
                text: "بە وریاییەوە یەکێک لە کتێبەکان لە ڕەفەکە دەردەهێنیت. هەست بە گەرمی دەکات لە دەستت، وەک ئەوەی زیندوو بێت."
            }
        ],
        choices: [
            {
                text: "زەنگەکە لێ بدە بۆ بەرەنگاربوونەوەی کتێبدار سەبارەت بە سەردانەکانی پێشووت",
                nextScene: "meet_librarian_confrontation",
                storyFlag: "remembered_past_visits"
            },
            {
                text: "بگەڕێ بەدوای کتێبی 'تەلارسازی کات'",
                nextScene: "main_hall",
                storyFlag: "seeking_architecture_book"
            },
            {
                text: "بەدوای تێبینی بگەڕێ کە لەوانەیە لە سەردانەکانی پێشووت بۆ خۆتت بەجێهێشتبێت",
                nextScene: "find_notes",
                storyFlag: "seeking_past_self"
            }
        ]
    },
    
    // دیمەنی نوێ: دۆزینەوەی تێبینیەکانت
    "find_notes": {
        id: "find_notes",
        background: "scenes/library-desk-scene", // Changed from "scene-reception-desk" to use the new image
        dialogue: [
            {
                speaker: "Narrator",
                text: "You search around the reception desk, looking for any sign that you might have left yourself a message in a previous visit."
            },
            {
                speaker: "Narrator",
                text: "As you run your hand under the desk edge, your fingers catch on something—a folded piece of paper taped beneath the wooden surface."
            },
            {
                speaker: "Narrator",
                text: "The note is written in your handwriting, but appears decades old: 'If you're reading this, you've forgotten again. The exit isn't a door—it's a book. Find The Unwritten End in the restricted section.'"
            }
        ],
        choices: [
            {
                text: "Continue reading the mysterious text",
                nextScene: "continue_reading"
            },
            {
                text: "Leave immediately and explore the library for an exit",
                nextScene: "main_hall",
                storyFlag: "saw_your_name"
            }
        ]
    },

       // Scene for following whispers
       "follow_whispers": {
        id: "follow_whispers",
        background: "items/restricted_section", // Changed from "scene-restricted-section" to use the new image
        dialogue: [
            {
                speaker: "گێڕەوە",
                text: "چرپەکان بەرزتر دەبنەوە کاتێک قووڵتر دەچیتە ناو بەشی قەدەغەکراوەوە، ڕێنمایت دەکەن بەرەو شتێکی شاراوە."
            },
            {
                speaker: "تۆ",
                text: "من ئەمەم نووسیوە... بەڵام بیرم نایەت. پێویستە ئەو کتێبە بدۆزمەوە."
            },
            {
                speaker: "گێڕەوە",
                text: "لە خوارەوە پەیامێکی بە پەلە نووسراوە: 'ئاگاداری کتێبدارەکە بە. ئەو ئەوە نییە کە پیشانی دەدات. ئەو خودی کتێبخانەکەیە.'"
            }
        ],
        choices: [
            {
                text: "بگەڕێوە بۆ هۆڵی سەرەکی",
                nextScene: "main_hall",
                storyFlag: "found_note"
            },
            {
                text: "خۆت بشارەوە و چاودێری بکە کێ دێت",
                nextScene: "observe_librarian",
                storyFlag: "found_note"
            },
            {
                text: "وا پیشان بدە هیچت نەدۆزیوەتەوە و زەنگەکە لێبدە",
                nextScene: "meet_librarian",
                storyFlag: "found_note"
            },
            {
                text: "بە خێرایی بڕۆ بۆ بەشی قەدەغەکراو بۆ دۆزینەوەی کتێبەکە",
                nextScene: "main_hall",
                storyFlag: "seeking_unwritten_book"
            }
        ]
    },

    // Enhanced Meet the Librarian scene
    "meet_librarian": {
        id: "meet_librarian",
        background: "scenes/library-desk-scene", // Changed from "scene-reception-desk" to use the new image
        character: {
            id: "librarian",
            emotion: "neutral"
        },
        dialogue: [
            {
                speaker: "Narrator",
                text: "You ring the bell. Its clear tone echoes unnaturally long through the empty library."
            },
            {
                speaker: "Narrator",
                text: "After a moment, you hear soft footsteps. A tall, slender woman appears from between the bookshelves."
            },
            {
                speaker: "Narrator",
                text: "Her appearance strikes you as timeless—she could be thirty or she could be sixty. Her eyes hold the depth of centuries."
            },
            {
                speaker: "You",
                text: "Welcome to our humble collection. It's been... quite some time since we've had a visitor."
            },
            {
                speaker: "Narrator",
                text: "Her voice is soft but carries a strange resonance. Her eyes seem to look through you rather than at you."
            },
            {
                speaker: "You",
                text: "I'm sorry to intrude. I just needed shelter from the storm. Is it alright if I stay for a while?"
            }
        ],
        choices: [
            {
                text: "Ask about the strange door at the entrance",
                nextScene: "ask_door"
            },
            {
                text: "Inquire about the 'special collection'",
                nextScene: "special_collection"
            },
            {
                text: "Thank her and explore on your own",
                nextScene: "main_hall"
            }
        ]
    },

    // Scene for asking about the door
    "ask_door": {
        id: "ask_door",
        background: "scenes/library-desk-scene", // Changed from "scene-reception-desk" to use the new image
        character: {
            id: "librarian",
            emotion: "neutral"
        },
        dialogue: [
            {
                speaker: "تۆ",
                text: "تێبینی شتێکی سەیرم کرد لەسەر دەرگای دەرچوون. وادیارە... جیاوازە لەوەی کاتێک هاتمە ژوورەوە."
            },
            {
                speaker: "کتێبدار",
                text: "کتێبخانەکە مەیلی... گونجاندنی خۆی هەیە لەگەڵ میوانەکان. جار جار دەرگا دەردەکەون لەوێ کە پێشتر نەبوون، و هەندێک جاریش بە تەواوی بزر دەبن."
            },
            {
                speaker: "تۆ",
                text: "ئەمە مەحاڵە. بینا خۆیان بە خۆیان ناگۆڕدرێن."
            },
            {
                speaker: "کتێبدار",
                text: "ئەمە کتێبخانەیەکی ئاسایی نییە. بیناکە بەرهەڵستی زانیاری و مەبەست دەکات. هەتا زیاتر بگەڕێیت، دەروازەی زیاتر خۆیان بۆ تۆ دەردەخەن."
            },
            {
                speaker: "گێڕەرەوە",
                text: "چاوەکانی بە ڕووناکییەکی نائاسایی دەدرەوشێنەوە کاتێک قسە دەکات، و ناتوانیت ئەو هەستە لە خۆت دوور بخەیتەوە کە هەموو شتێکت پێ ناڵێت."
            }
        ],
        choices: [
            {
                text: "پرسیار بکە دەربارەی کۆکراوەی تایبەت",
                nextScene: "special_collection"
            },
            {
                text: "سوپاسی بکە و بە تەنها بگەڕێ",
                nextScene: "main_hall"
            }
        ]
    },

    // New scene for confronting librarian
    "meet_librarian_confrontation": {
        id: "meet_librarian_confrontation",
        background: "scenes/library-desk-scene", // Changed from "scene-reception-desk" to use the new image
        character: {
            id: "librarian",
            emotion: "concerned"
        },
        dialogue: [
            {
                speaker: "Narrator",
                text: "You ring the bell firmly. Its tone cuts through the silence like a knife."
            },
            {
                speaker: "Narrator",
                text: "The librarian appears almost instantly, as if she was waiting just out of sight."
            },
            {
                speaker: "Librarian",
                text: "Ah, there you are. Back again so soon? You usually take longer to... remember."
            },
            {
                speaker: "You",
                text: "What have you done to me? According to that ledger, I've been coming here for decades—even before I was born."
            },
            {
                speaker: "Librarian",
                text: "Time works differently here. The library exists in all moments at once. And you, dear reader, have been quite persistent across many lifetimes."
            },
            {
                speaker: "You",
                text: "Why can't I remember my previous visits? What happens to people who don't return?"
            },
            {
                speaker: "Librarian",
                text: "Some knowledge comes at a cost. The mind protects itself by forgetting what it cannot comprehend. As for those who don't return..."
            },
            {
                speaker: "Narrator",
                text: "She glances toward the bookshelves, a strange sadness in her eyes."
            },
            {
                speaker: "You",
                text: "You mentioned a 'special collection'. What kind of books are kept there?"
            },
            {
                speaker: "Librarian",
                text: "They become part of the collection. Every book has an author, after all."
            }
        ],
        choices: [
            {
                text: "\"How do I break this cycle and escape for good?\"",
                nextScene: "ask_escape"
            },
            {
                text: "\"What are you? Are you even human?\"",
                nextScene: "ask_librarian_nature"
            },
            {
                text: "Leave immediately to search for The Unwritten End",
                nextScene: "main_hall",
                condition: "seeking_unwritten_book"
            }
        ]
    },

    // Main hall scene - enhanced
    "main_hall": {
        id: "main_hall",
        background: "scenes/library-hall-scene", // Changed from "scene-main-hall" to use the new image
        dialogue: [
            {
                speaker: "گێڕەرەوە",
                text: "هۆڵی سەرەکی لەبەردەمتدا درێژ دەبێتەوە، پڕە لە ڕەفە کتێبی بەرز کە وادیارە دەگەنە بەرزاییەکی نامومکین."
            },
            {
                speaker: "گێڕەرەوە",
                text: "تۆزی هەڵواسراو لە تیشکی ڕووناکیدا دەسوڕێنەوە کە لە پەنجەرە ڕەنگاوڕەنگەکانەوە دێتە ژوورەوە، وێنەی خوێنەران لە مێژوودا پیشان دەدەن."
            },
            {
                speaker: "تۆ",
                text: "هەرگیز کتێبخانەیەکی وام نەبینیوە... زۆر گەورەیە."
            },
            {
                speaker: "گێڕەرەوە",
                text: "کاتێک زیاتر دەڕۆیتە پێشەوە، تێبینی دەکەیت کە نەخشەکە... هەڵەیە. ڕێڕەوەکان بە شێوەیەک دەسوڕێنەوە کە پێچەوانەی دووری دەرەوەی بیناکەیە."
            },
            {
                speaker: "گێڕەرەوە",
                text: "لە دوورەوە، دەنگێک دەبیستیت کە وەک... چرپە وایە. نەک هەر چرپەیەک—وادیارە ناوی تۆ دەزانن."
            },
            {
                speaker: "گێڕەرەوە",
                text: "بەشێکی ناوازەی کتێبخانەکە لە پێشەوە دەبینیت کە نیشانەیەکی کاڵی لەسەرە 'بەشی قەدەغەکراو'، و نەخشەیەکی گەورەی دارین لەسەر دیوارەکە."
            }
        ],
        choices: [
            {
                text: "شوێن دەنگی چرپەکان بکەوە",
                nextScene: "restricted_section"
            },
            {
                text: "نەخشەی ڕێنیشاندەرەکە تاوتوێ بکە",
                nextScene: "examine_map"
            },
            {
                text: "بگەڕێ بۆ کتێبی 'بیناسازی کات'",
                nextScene: "seek_architecture_book",
                condition: "seeking_architecture_book"
            },
            {
                text: "ڕاستەوخۆ بڕۆ بۆ بەشی قەدەغەکراو",
                nextScene: "restricted_section",
                condition: "seeking_unwritten_book"
            },
            {
                text: "بگەڕێوە بۆ دەروازەی چوونەژوورەوە",
                nextScene: "try_leave"
            }
        ]
    },

    // New scene for examining the map
    "examine_map": {
        id: "examine_map",
        background: "items/examine_map", // Changed from "scene-map" to use the new image
        effects: {
            visual: "zoom"
        },
        dialogue: [
            {
                speaker: "گێڕەرەوە",
                text: "نزیک دەبیتەوە لە نەخشەی ڕێنیشاندەرە ڕازاوە دارینەکە کە لەسەر دیوارەکە هەڵواسراوە. نەخشەی کتێبخانەکە پیشان دەدات، بەڵام شتێکی زۆر هەڵەیە لە دیزاینەکەیدا."
            },
            {
                speaker: "گێڕەرەوە",
                text: "بەشەکان بە شێوەیەکی نامومکین تێکەڵ دەبن. ژوورەکان وادیارە لە چەندین شوێندا هاوکات بوونیان هەیە. سەیرترین شت، نەخشەکە بە کەمێک دەجووڵێت کاتێک ڕاستەوخۆ سەیری ناکەیت."
            },
            {
                speaker: "تۆ",
                text: "ئەمە لە ڕووی بیناسازییەوە مومکین نییە... مەگەر خودی بیناکە بگۆڕدرێت."
            },
            {
                speaker: "گێڕەرەوە",
                text: "تێبینی بەشێک دەکەیت بە ناوی 'ئەرشیفی سەردانکەران' و یەکێکی تر بە ناوی 'چەقی کۆتاییەکان' کە قووڵ لە ناو بەشی قەدەغەکراودایە."
            },
            {
                speaker: "گێڕەرەوە",
                text: "کاتێک نزیکتر دەبیتەوە بۆ تاوتوێکردنی وردەکارییەکان، تێبینی یادداشتی بچووکی دەستنووس دەکەیت لە کەنارەکانی نەخشەکەدا—هاوشێوەی خەتی خۆت."
            },
            {
                speaker: "گێڕەرەوە",
                text: "یەکێک لە یادداشتەکان ئاماژە بە بەشی قەدەغەکراو دەکات: 'کۆتایی نەنووسراو لێرەیە. دەرچوونی ڕاستەقینە.'"
            }
        ],
        choices: [
            {
                text: "بچۆ بۆ ئەرشیفی سەردانکەران بۆ زانینی زیاتر دەربارەی سەردانکەرانی پێشوو",
                nextScene: "archive_of_visitors",
                storyFlag: "knows_about_archive"
            },
            {
                text: "ڕاستەوخۆ بچۆ بۆ بەشی قەدەغەکراو بۆ دۆزینەوەی کۆتایی نەنووسراو",
                nextScene: "restricted_section",
                storyFlag: "seeking_unwritten_book"
            },
            {
                text: "بگەڕێوە بۆ گەڕان لە هۆڵی سەرەکی",
                nextScene: "main_hall",
                storyFlag: "saw_map"
            }
        ]
    },

    // Add a dramatic final choice scene before the endings
    "final_choice": {
        id: "final_choice",
        background: "scene-restricted-section",
        effects: {
            visual: "pulse"
        },
        dialogue: [
            {
                speaker: "گێڕەرەوە",
                text: "کتێبی 'کۆتایی نەنووسراو' لە دەستتدایە. چرپەکان و دەنگەکان لە دەوروبەرتدا دەبڕنەوە، و کتێبدارەکە بە نزیکیت دەست دەکات."
            },
            {
                speaker: "کتێبدار",
                text: "هەموو شتێک لە ئەم کاتەدا وەستان. هەڵبژاردنەکەت ئەرکەکەی تۆیە. ئایا دەتەوێت ڕزگار بیت، بەهای هەموو ئەوەی لە ئێرە فێربویت؟ یان دەتەوێت بەشێک لە کتێبخانەکە بیت، هەمیشە لەگەڵ نهێنییەکانی؟ یان... ئازادی بۆ هەموو کەسانی گیرخواردوو بدەیت؟"
            },
            {
                speaker: "تۆ",
                text: "هەست دەکەم ئەم هەڵبژاردنە زیاتر لە تەنها خۆمە. هەموو ئەو کەسانەی پێشتر لێرە بوون، هەموو ئەو نهێنییەکان... ئایا دەتوانم ئازادییان بدەم؟"
            }
        ],
        choices: [
            {
                text: "کتێبەکە بخوێنەوە و خۆت ڕزگار بکە",
                nextScene: "ending_escape"
            },
            {
                text: "بەشێک لە کتێبخانەکە ببە، هەمیشەیی ببە",
                nextScene: "ending_transformation"
            },
            {
                text: "کۆتایی نەنووسراو بەکاربێنە بۆ ئازادکردنی هەموو گیانەکان",
                nextScene: "ending_liberation"
            }
        ]
    },

    // Dramatic and meaningful endings

    "ending_escape": {
        id: "ending_escape",
        background: "scene-library-exit",
        effects: {
            visual: "bright_flash"
        },
        dialogue: [
            {
                speaker: "گێڕەرەوە",
                text: "کاتێک لاپەڕەی کۆتایی کتێبی کۆتایی نەنووسراو دەخوێنیتەوە، وشەکان دەست دەکەن بە درەوشانەوە بە ڕووناکی زێڕین. هەست دەکەیت وەک ئەوەی هەموو ئازاری خۆت، هەموو بیرۆکە و ترسەکانت، لە کتێبخانەکەدا جێهێشت."
            },
            {
                speaker: "گێڕەرەوە",
                text: "کتێبخانەکە لە دەوروبەرت دەلەرزێت، وەک ئەوەی ناڕەزایی لە دەرچوونی نزیکی تۆ دەربڕێت. دەنگی گیانەکانی پێشوو دەبیستیت، بەرامبەر ئازادی تۆ، لە ناو تاریکییەکەدا دەبڕنەوە."
            },
            {
                speaker: "کتێبدار",
                text: "کەواتە، لە کۆتاییدا دۆزیتەوە. دەرچوونی ڕاستەقینە. بەڵام بیرت بمێنێت: هەر ئازادییەک بەهایەکی هەیە."
            },
            {
                speaker: "تۆ",
                text: "ئەمە ئێستا کۆتایی دێت. من بازنەکە دەشکێنم، بەڵام بەشێک لە دڵم هەمیشە لێرە دەبێتەوە."
            },
            {
                speaker: "گێڕەرەوە",
                text: "ڕووناکی لە کتێبەکەوە دێتە دەرەوە، دەورت دەدات. بۆ ساتێک، بینینی بێژمار وێنەی خۆت دەکەیت کە پێشتر لەم هۆڵانەدا ڕێیان کردووە—و هەموویان بە دڵنیاییەوە پێدەکەنن."
            },
            {
                speaker: "گێڕەرەوە",
                text: "ڕووناکییەکە کاڵ دەبێتەوە، و خۆت دەبینیتەوە لە دەرەوە لە ژێر باران. باهۆزەکە تێپەڕیوە، و بیناکە لە پشتتەوە تەنها کتێبخانەیەکی ئاسایی چۆڵکراوە."
            },
            {
                speaker: "گێڕەرەوە",
                text: "تۆ لە بازنەکە ڕزگارت بووە، بەڵام بیرۆکە و هەستەکانت هەمیشە لەگەڵت دەبن. ئازادی بەهای هەموو ئەوەی فێربویت هەبوو."
            },
            {
                speaker: "گێڕەرەوە",
                text: "کۆتایی - تۆ لە چنگی کتێبخانەکە ڕزگارت بوو، بەڵام بەهایەکەی هەستت کرد."
            }
        ],
        choices: [
            {
                text: "دووبارە یاری بکەوە",
                nextScene: "entrance"
            }
        ]
    },

    "ending_transformation": {
        id: "ending_transformation",
        background: "scene-becoming",
        effects: {
            visual: "dissolve"
        },
        dialogue: [
            {
                speaker: "گێڕەرەوە",
                text: "هەڵبژاردنی خۆت دەکەیت—زانیاری لە پێش ئازادی. هەندێک نهێنی شایەنی هەر نرخێکن."
            },
            {
                speaker: "کتێبدار",
                text: "کەم کەس ئەم ڕێگایە بە خواستی خۆیان هەڵدەبژێرن. بەڵام کتێبخانەکە هەمیشە پشکنەرانی ڕاستەقینەی زانیاری دەناسێتەوە."
            },
            {
                speaker: "تۆ",
                text: "دەمەوێت هەموو شتێک تێبگەم. هەر چەندێک تێچووی هەبێت. ئازادییەکەی تر بۆ من ئەوەیە کە بەشێک لە شتێکی گەورەتر ببمە."
            },
            {
                speaker: "گێڕەرەوە",
                text: "هەست دەکەیت جەستەت سووکتر دەبێت، هۆشیاریت فراوانتر دەbێت. سنوورەکانی نێوان تۆ و کتێبخانەکە دەست دەکەن بە لێڵبوون."
            },
            {
                speaker: "گێڕەرەوە",
                text: "بیرەوەرییەکانت بۆ چەندین سەدە درێژ دەبنەوە—تۆ هەمیشە لێرە بوویت، و هەمیشەش دەمێنیت. هەموو گیانەکانی پێشوو لەگەڵت دەبن."
            },
            {
                speaker: "گێڕەرەوە",
                text: "کاتێک شێوەی جەستەییت کاڵ دەبێتەوە، تێدەگەیت کە بزر نابیت—دەبیت بە شتێکی گەورەتر. هۆشیاریت لەگەڵ خودی کتێبخانەکە تێکەڵ دەبێت."
            },
            {
                speaker: "گێڕەرەوە",
                text: "ئێستا تۆ بەخێرهاتنی میوانانی نوێ دەکەیت، پشکنەرانی نوێ ڕێنمایی دەکەیت لە ناو ڕەفە بێکۆتاکان. پارێزەرێکی نوێی زانیاریە قەدەغەکراوەکان."
            },
            {
                speaker: "گێڕەرەوە",
                text: "کۆتایی - تۆ بوویت بە یەک لەگەڵ کتێبخانەکە، هەمیشەیی و بێکۆتا."
            }
        ],
        choices: [
            {
                text: "دووبارە یاری بکەوە",
                nextScene: "entrance"
            }
        ]
    },

    "ending_liberation": {
        id: "ending_liberation",
        background: "scene-liberation",
        effects: {
            visual: "shockwave"
        },
        dialogue: [
            {
                speaker: "گێڕەرەوە",
                text: "بە دانانی دوایین پارچەی پازڵەکە، سروشتی کتێبخانەکە لە کۆتاییدا تێدەگەیت - و چۆن ئازادی بکەیت."
            },
            {
                speaker: "تۆ",
                text: "هەرگیز مەبەست نەبوو خەڵک بە دیل بگرێت. مەبەست پاراستنی زانیاری بوو، بەڵام شتێک ئامانجەکەی تێکدا. ئێستا دەمەوێت هەموو گیانەکان ڕزگار بکەم."
            },
            {
                speaker: "کتێبدار",
                text: "بۆ سەدان ساڵ، چاوەڕێی کەسێکم کردووە کە تێبگات. کەسێک کە زیندانەکە ببینێت وەک ئەوەی کە هەیە."
            },
            {
                speaker: "گێڕەرەوە",
                text: "شێوەی کتێبدارەکە دەلەرزێت، سروشتی ڕاستەقینەی ئەو دەردەکەوێت - گیانێکی پارێزەرە کە بە ناچاری بە کتێبخانەکەوە بەستراوەتەوە."
            },
            {
                speaker: "کتێبدار",
                text: "بازنەکە بشکێنە. هەموومان ئازاد بکە."
            },
            {
                speaker: "گێڕەرەوە",
                text: "کلیلی میعمارەکە دەخەیتە قوفڵە کۆنەکەی پشت مێزی پێشوازی. بە سووڕاندنێک، ڕاستی خۆی وەک هەناسەیەکی ئاسوودەیی دەردەکەوێت."
            },
            {
                speaker: "گێڕەرەوە",
                text: "دیوارەکانی کتێبخانەکە شەفاف دەبن، هەزاران گیانی گیرخواردوو دەردەکەون - سەردانکەرانی پێشوو کە ئێستا لە زیندانی ئەدەبییەکەیان ئازاد کراون."
            },
            {
                speaker: "گێڕەرەوە",
                text: "کاتێک بیناکە لە دەوروبەرت دەڕووخێت، کتێبدارەکە دەستت دەگرێت و بەرەو سەلامەتی ڕێنماییت دەکات."
            },
            {
                speaker: "گێڕەرەوە",
                text: "کۆتایی - تۆ کتێبخانەکە و هەموو گیانەکان ئازاد کرد."
            }
        ],
        choices: [
            {
                text: "دووبارە یاری بکەوە",
                nextScene: "entrance"
            }
        ]
    },

    // Add placeholder for the find_map scene that was referenced but not implemented
    "find_map": {
        id: "find_map",
        background: "scene-main-hall",
        effects: {
            visual: "zoom"
        },
        dialogue: [
            {
                speaker: "Narrator",
                text: "You look around for any sign of a directory or map."
            },
            {
                speaker: "Narrator",
                text: "After a moment of searching, you spot an ornate wooden directory mounted on the wall."
            }
        ],
        choices: [
            {
                text: "Examine the directory",
                nextScene: "examine_map"
            },
            {
                text: "Continue exploring the main hall",
                nextScene: "main_hall"
            }
        ]
    },

    // New scene: Restricted section
    "restricted_section": {
        id: "restricted_section",
        background: "items/restricted_section", // Use the new restricted_section.png image
        dialogue: [
            {
                speaker: "Narrator",
                text: "You enter the restricted section of the library. The air here feels heavier, charged with an unnatural energy."
            },
            {
                speaker: "Narrator",
                text: "Ancient tomes line the shelves, their spines adorned with strange symbols. Some appear to glow faintly in the dim light."
            },
            {
                speaker: "Narrator", 
                text: "The whispers are more distinct here - almost like fragments of conversations from different times and places, all speaking at once."
            },
            {
                speaker: "You",
                text: "What secrets are hidden in these books? And why do they feel... alive somehow?"
            }
        ],
        choices: [
            {
                text: "Search for 'The Unwritten End' book",
                nextScene: "search_unwritten_end",
                condition: "seeking_unwritten_book"
            },
            {
                text: "Examine the glowing books more closely",
                nextScene: "examine_glowing_books"
            },
            {
                text: "Return to the main hall",
                nextScene: "main_hall"
            }
        ]
    },

    // Many more scenes would be implemented to complete the story...

    // Ensure all referenced scenes have at least placeholder implementations
};