// Story data for Echoes of the Library
const STORY_DATA = {
    // Starting scene: Library entrance
    "entrance": {
        id: "entrance",
        background: "scene-library-detailed",
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

    // Try to leave scene
    "try_leave": {
        id: "try_leave",
        background: "scene-library-detailed",
        effects: {
            visual: "flicker"
        },
        dialogue: [
            {
                speaker: "Narrator",
                text: "The door you just came through is now... different. Older. Made of dark wood with strange symbols carved into its frame."
            },
            {
                speaker: "Narrator",
                text: "As you turn to leave, a deafening crack of thunder shakes the building. The lights flicker ominously."
            },
            {
                speaker: "You",
                text: "What the...? This isn't the door I came through. And these symbols..."
            },
            {
                speaker: "Narrator",
                text: "You try the handle, but it won't budge. It seems you have no choice but to venture deeper into the library."
            },
            {
                speaker: "Narrator",
                text: "You recognize some of the symbols from your research into ancient languages, but they shouldn't exist together—they span thousands of years and disparate cultures."
            }
        ],
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
                text: "Leave and find somewhere else...",
                nextScene: "try_leave"
            }
        ]
    },

    // Reception desk scene
    "reception": {
        id: "reception",
        background: "scene-reception-desk",
        dialogue: [
            {
                speaker: "Narrator",
                text: "The reception desk is covered in a thin layer of dust. A vintage bell sits on the counter."
            },
            {
                speaker: "Narrator",
                text: "Beside it lies an open ledger, its pages yellowed with age. The last entry date is from over 50 years ago."
            },
            {
                speaker: "You",
                text: "That can't be right... the library couldn't have been closed for that long."
            },
            {
                text: "Examine the symbols on the door more closely",
                nextScene: "examine_door_symbols"
            }
        ],
        choices: [
            {
                text: "Explore deeper into the library and learn more",
                nextScene: "main_hall"
            },
            {
                text: "Check the reception desk for answers",
                nextScene: "reception"
            },
            {
                text: "Ring the bell",
                nextScene: "meet_librarian"
            }
        ]
    },

    // New scene: Examining door symbols
    "examine_door_symbols": {
        id: "examine_door_symbols",
        background: "scene-library-detailed",
        effects: {
            visual: "pulse"
        },
        dialogue: [
            {
                speaker: "Narrator",
                text: "You lean closer to the symbols, tracing their outlines with your fingers. The wood feels unnaturally warm."
            },
            {
                speaker: "Narrator",
                text: "As your fingers trace the final symbol, a jolt of energy runs through your body. For a brief moment, you see flashes of other visitors—dozens of them throughout different eras—all touching these same symbols."
            },
            {
                speaker: "Narrator",
                text: "In each vision, the visitors look increasingly desperate as they return to this door again and again, growing older while the library remains unchanged."
            },
            {
                speaker: "You",
                text: "These dates can't be right... the last entry is from 1973. They were trapped here... just like I might be now."
            },
            {
                speaker: "Narrator",
                text: "As you flip through the pages, you notice something strange. The names begin to repeat across decades, with identical handwriting."
            },
            {
                speaker: "Narrator",
                text: "You notice something etched into the doorframe—a small inscription that reads: 'Knowledge is the only way out.'"
            }
        ],
        choices: [
            {
                text: "Even stranger, some of the borrowers' names have odd notes beside them: 'Never returned,' 'Found only the cover,' or most disturbing: 'Returned different.'",
                nextScene: "main_hall",
                storyFlag: "seeking_history"
            },
            {
                text: "Look for the librarian who might have answers",
                nextScene: "reception"
            },
            {
                text: "Try to find another exit",
                nextScene: "main_hall",
                storyFlag: "seeking_exit"
            }
        ]
    },

    // Reception desk scene - enhanced
    "reception": {
        id: "reception",
        background: "scene-reception-desk",
        dialogue: [
            {
                speaker: "Narrator",
                text: "The reception desk is covered in a thin layer of dust. A vintage brass bell sits on the counter."
            },
            {
                speaker: "Narrator",
                text: "Beside it lies an open ledger, its pages yellowed with age. The last entry date is from over 50 years ago."
            },
            {
                speaker: "You",
                text: "That can't be right... the library couldn't have been closed for that long. This building would be condemned."
            },
            {
                speaker: "Narrator",
                text: "You notice a small framed photograph on the desk. It shows the library's exterior, but the surrounding buildings look different—like a snapshot from another era."
            },
            {
                speaker: "You",
                text: "Ring the bell to call the librarian"
            }
        ],
        choices: [
            {
                text: "Ring the bell",
                nextScene: "meet_librarian"
            },
            {
                text: "Examine the ledger more closely",
                nextScene: "examine_ledger"
            },
            {
                text: "Read the newspaper clipping",
                nextScene: "newspaper_clipping"
            }
        ]
    },

    // New scene: Newspaper clipping
    "newspaper_clipping": {
        id: "newspaper_clipping",
        background: "scene-reception-desk",
        effects: {
            visual: "zoom"
        },
        dialogue: [
            {
                speaker: "Narrator",
                text: "You pick up the newspaper clipping and read the article carefully."
            },
            {
                speaker: "Narrator",
                text: "'The Aeternum Library celebrates an unprecedented 300 years of continuous operation this week. Founded in 1723, the library has survived fires, wars, and economic downturns without ever closing its doors.'"
            },
            {
                speaker: "Narrator",
                text: "'Perhaps most remarkable is the library's unique collection of rare texts and its unusual architecture, which locals describe as 'larger on the inside than outside.'''"
            },
            {
                speaker: "Narrator",
                text: "'Current head librarian, Ms. E. Blackwood, who has overseen the collection for 'longer than anyone can remember,' credits the library's success to its 'devoted readers.''"
            }
        ],
        choices: [
            {
                text: "Longer than anyone can remember? That can't be literally true...",
                nextScene: "main_hall"
            },
            {
                text: "You flip over the clipping and notice handwriting on the back: 'They always return. The library calls them back.'",
                nextScene: "main_hall"
            }
        ]
    },

    // Enhanced ledger examination scene
    "examine_ledger": {
        id: "examine_ledger",
        background: "scene-reception-desk",
        effects: {
            visual: "flicker"
        },
        dialogue: [
            {
                speaker: "Narrator",
                text: "You lean closer to examine the ancient ledger. The yellowed pages are filled with elegant handwriting, recording names and dates."
            },
            {
                speaker: "Narrator",
                text: "These dates can't be right... the entries span centuries, but the handwriting is identical throughout."
            },
            {
                speaker: "Narrator",
                text: "As you flip through the pages, you notice something strange. The names begin to repeat across decades, with visitors returning multiple times throughout their lives."
            },
            {
                speaker: "Narrator",
                text: "Even stranger, some of the borrowers' names have odd notes beside them: 'Never returned,' 'Found only the cover,' or most disturbing: 'Returned different.'"
            },
            {
                speaker: "You",
                text: "What kind of library is this...?"
            },
            {
                speaker: "Narrator",
                text: "A chill runs down your spine as you notice your own name written at the bottom of the page, dated today, with a blank space beside it waiting to be filled."
            },
            {
                speaker: "Narrator",
                text: "The whispers grow louder as you approach a section cordoned off with worn velvet ropes."
            },
            {
                speaker: "Narrator",
                text: "Above the entrance, a faded sign reads: 'Restricted Section - Authorized Personnel Only'."
            }
        ],
        choices: [
            {
                text: "Enter the restricted section",
                nextScene: "inside_restricted"
            },
            {
                text: "Look for your name in earlier entries",
                nextScene: "find_your_history",
                storyFlag: "saw_your_name"
            },
            {
                text: "Ring the bell to confront the librarian",
                nextScene: "meet_librarian_confrontation",
                storyFlag: "saw_your_name"
            }
        ]
    },

    // Scene for finding your history
    "find_your_history": {
        id: "find_your_history",
        background: "scene-reception-desk",
        effects: {
            visual: "flashback"
        },
        dialogue: [
            {
                speaker: "Narrator",
                text: "Strange symbols glow faintly along the spines of some books, pulsing like a heartbeat."
            },
            {
                speaker: "Narrator",
                text: "With trembling fingers, you flip back through the ledger, scanning for your name in earlier entries."
            },
            {
                speaker: "Narrator",
                text: "There—five years ago. Your name appears with the note: 'Borrowed: Cartography of Dreams. Returned: On time.'"
            },
            {
                speaker: "Narrator",
                text: "Ten years before that, another entry: 'Borrowed: Principles of Memory Manipulation. Returned: Reader claimed pages were blank.'"
            },
            {
                speaker: "Narrator",
                text: "And earliest of all, thirty years ago—before you were even born: 'Borrowed: The Architecture of Time. Note: Reader promised to return.'"
            },
            {
                speaker: "You",
                text: "This is impossible. I would remember coming here. Unless..."
            }
        ],
        choices: [
            {
                text: "Examine an ancient tome with glowing symbols",
                nextScene: "examine_tome"
            },
            {
                speaker: "You",
                text: "Follow the sound of whispers",
                nextScene: "follow_whispers"
            }
        ]
    },

    // Scene for examining an ancient tome
    "examine_tome": {
        id: "examine_tome",
        background: "scene-reception-desk",
        effects: {
            visual: "zoom"
        },
        dialogue: [
            {
                speaker: "Narrator",
                text: "Suddenly, fragments of memory resurface—sitting at these same tables, walking these same aisles, but with different clothes, different hairstyles... throughout different decades."
            },
            {
                speaker: "You",
                text: "I've been trapped in some kind of loop. Coming back here again and again, forgetting each time."
            },
            {
                speaker: "Narrator",
                text: "You carefully take one of the books from the shelf. It feels warm to the touch, almost alive."
            }
        ],
        choices: [
            {
                text: "Ring the bell to confront the librarian about your past visits",
                nextScene: "meet_librarian_confrontation",
                storyFlag: "remembered_past_visits"
            },
            {
                text: "Search for 'The Architecture of Time' book",
                nextScene: "main_hall",
                storyFlag: "seeking_architecture_book"
            },
            {
                text: "Look for notes you might have left yourself in previous visits",
                nextScene: "find_notes",
                storyFlag: "seeking_past_self"
            }
        ]
    },

    // New scene: Finding your notes
    "find_notes": {
        id: "find_notes",
        background: "scene-reception-desk",
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
        background: "scene-restricted-section",
        dialogue: [
            {
                speaker: "Narrator",
                text: "The whispers grow louder as you move deeper into the restricted section, guiding you toward something hidden."
            },
            {
                speaker: "You",
                text: "I wrote this... but I don't remember. I need to find that book."
            },
            {
                speaker: "Narrator",
                text: "At the bottom is a hastily scrawled message: 'BEWARE THE LIBRARIAN. She is not what she seems. She is the Library.'"
            }
        ],
        choices: [
            {
                text: "Return to the main hall",
                nextScene: "main_hall",
                storyFlag: "found_note"
            },
            {
                text: "Hide and observe who's coming",
                nextScene: "observe_librarian",
                storyFlag: "found_note"
            },
            {
                text: "Pretend you found nothing and ring the bell",
                nextScene: "meet_librarian",
                storyFlag: "found_note"
            },
            {
                text: "Quickly head to the restricted section to find the book",
                nextScene: "main_hall",
                storyFlag: "seeking_unwritten_book"
            }
        ]
    },

    // Enhanced Meet the Librarian scene
    "meet_librarian": {
        id: "meet_librarian",
        background: "scene-reception-desk",
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
        background: "scene-reception-desk",
        character: {
            id: "librarian",
            emotion: "neutral"
        },
        dialogue: [
            {
                speaker: "You",
                text: "I noticed something strange about the entrance door. It seems... different from when I came in."
            },
            {
                speaker: "Librarian",
                text: "The library tends to... adapt to its visitors. Sometimes doors appear where there were none before, and sometimes they vanish entirely."
            },
            {
                speaker: "You",
                text: "That's impossible. Buildings don't change on their own."
            },
            {
                speaker: "Librarian",
                text: "This is no ordinary library. The architecture responds to knowledge and intent. The more you seek, the more passages will reveal themselves to you."
            },
            {
                speaker: "Narrator",
                text: "Her eyes seem to glint with an unnatural light as she speaks, and you can't shake the feeling that she's not telling you everything."
            }
        ],
        choices: [
            {
                text: "Ask about the special collection",
                nextScene: "special_collection"
            },
            {
                text: "Thank her and explore on your own",
                nextScene: "main_hall"
            }
        ]
    },

    // New scene for confronting librarian
    "meet_librarian_confrontation": {
        id: "meet_librarian_confrontation",
        background: "scene-reception-desk",
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
        background: "scene-main-hall",
        dialogue: [
            {
                speaker: "Narrator",
                text: "The main hall stretches before you, lined with towering bookshelves that seem to reach impossibly high."
            },
            {
                speaker: "Narrator",
                text: "Dust motes dance in beams of light that filter through stained glass windows, depicting scenes of readers throughout history."
            },
            {
                speaker: "You",
                text: "I've never seen a library like this before... it's enormous."
            },
            {
                speaker: "Narrator",
                text: "As you walk further in, you notice the layout seems... wrong. Corridors twist in ways that defy the building's exterior dimensions."
            },
            {
                speaker: "Narrator",
                text: "And in the distance, you hear what sounds like... whispers. Not just any whispers—they seem to know your name."
            },
            {
                speaker: "Narrator",
                text: "You spot an unusual section of the library ahead with a faded sign reading 'Restricted Section,' and a large wooden directory map on the wall."
            }
        ],
        choices: [
            {
                text: "Follow the sound of whispers",
                nextScene: "restricted_section"
            },
            {
                text: "Examine the directory map",
                nextScene: "examine_map"
            },
            {
                text: "Look for 'The Architecture of Time' book",
                nextScene: "seek_architecture_book",
                condition: "seeking_architecture_book"
            },
            {
                text: "Head directly to the restricted section",
                nextScene: "restricted_section",
                condition: "seeking_unwritten_book"
            },
            {
                text: "Return to the entrance",
                nextScene: "try_leave"
            }
        ]
    },

    // New scene for examining the map
    "examine_map": {
        id: "examine_map",
        background: "scene-map",
        effects: {
            visual: "zoom"
        },
        dialogue: [
            {
                speaker: "Narrator",
                text: "You approach the ornate wooden directory map mounted on the wall. It shows the library's layout, but something is very wrong with its design."
            },
            {
                speaker: "Narrator",
                text: "Sections overlap in impossible ways. Rooms appear to exist in multiple places at once. And strangest of all, the map seems to shift slightly when you're not looking directly at it."
            },
            {
                speaker: "You",
                text: "This can't be architecturally possible... unless the building itself is changing."
            },
            {
                speaker: "Narrator",
                text: "You notice one section labeled 'The Archive of Visitors' and another called 'The Nexus of Endings' deep within the restricted section."
            },
            {
                speaker: "Narrator",
                text: "As you lean closer to examine the details, you notice tiny handwritten notes in the margins of the map—similar to your own handwriting."
            },
            {
                speaker: "Narrator",
                text: "One note points to the restricted section: 'The Unwritten End is here. The true exit.'"
            }
        ],
        choices: [
            {
                text: "Head to the Archive of Visitors to learn more about past visitors",
                nextScene: "archive_of_visitors",
                storyFlag: "knows_about_archive"
            },
            {
                text: "Go directly to the restricted section to find The Unwritten End",
                nextScene: "restricted_section",
                storyFlag: "seeking_unwritten_book"
            },
            {
                text: "Return to exploring the main hall",
                nextScene: "main_hall",
                storyFlag: "saw_map"
            }
        ]
    },

    // Add multiple endings based on player choices throughout the game
    "ending_escape": {
        id: "ending_escape",
        background: "scene-library-exit",
        effects: {
            visual: "bright_flash"
        },
        dialogue: [
            {
                speaker: "Narrator",
                text: "As you read the final page of The Unwritten End, the words begin to glow with golden light."
            },
            {
                speaker: "Narrator",
                text: "The library around you trembles, as if protesting your imminent departure."
            },
            {
                speaker: "Librarian",
                text: "So, you've found it at last. The true exit. After all these cycles..."
            },
            {
                speaker: "You",
                text: "This ends now. I'm breaking the loop."
            },
            {
                speaker: "Narrator",
                text: "Light pours from the book, enveloping you. For a moment, you see the countless versions of yourself who have walked these halls before—and they all smile in relief."
            },
            {
                speaker: "Narrator",
                text: "The light fades, and you find yourself standing outside in the rain. The storm has passed, and the building behind you is just an ordinary, abandoned library."
            },
            {
                speaker: "Narrator",
                text: "You have broken free from the cycle, but a part of you will always remember the endless shelves and the secrets they contained."
            },
            {
                speaker: "Narrator",
                text: "THE END - You escaped the library's grasp"
            }
        ],
        choices: [
            {
                text: "Play Again",
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
                speaker: "Narrator",
                text: "You make your choice—knowledge over freedom. Some secrets are worth any price."
            },
            {
                speaker: "Librarian",
                text: "Few choose this path willingly. But the library always recognizes true seekers of knowledge."
            },
            {
                speaker: "You",
                text: "I want to understand everything. No matter the cost."
            },
            {
                speaker: "Narrator",
                text: "You feel your body growing lighter, your consciousness expanding. The boundaries between you and the library begin to blur."
            },
            {
                speaker: "Narrator",
                text: "Your memories stretch backward through centuries—you have always been here, and always will be."
            },
            {
                speaker: "Narrator",
                text: "As your physical form fades, you realize you're not disappearing—you're becoming something greater. Your consciousness merges with the library itself."
            },
            {
                speaker: "Narrator",
                text: "Now you'll welcome new visitors, guide new seekers through the endless shelves. A new custodian of forbidden knowledge."
            },
            {
                speaker: "Narrator",
                text: "THE END - You became one with the library"
            }
        ],
        choices: [
            {
                text: "Play Again",
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
                speaker: "Narrator",
                text: "With the final piece of the puzzle in place, you understand the nature of the library at last—and how to free it."
            },
            {
                speaker: "You",
                text: "It was never meant to trap people. It was meant to preserve knowledge, but something corrupted its purpose."
            },
            {
                speaker: "Librarian",
                text: "For centuries, I've waited for someone who would understand. Who would see the prison for what it is."
            },
            {
                speaker: "Narrator",
                text: "The librarian's form flickers, revealing her true nature—a guardian spirit bound to the library against her will."
            },
            {
                speaker: "Librarian",
                text: "Break the cycle. Free us all."
            },
            {
                speaker: "Narrator",
                text: "You place The Architect's Key in the ancient lock hidden behind the reception desk. With a turn, reality itself seems to sigh with relief."
            },
            {
                speaker: "Narrator",
                text: "The library's walls become transparent, revealing thousands of trapped souls—former visitors now freed from their literary prison."
            },
            {
                speaker: "Narrator",
                text: "As the building crumbles around you, the librarian takes your hand and leads you to safety."
            },
            {
                speaker: "Narrator",
                text: "THE END - You liberated the library and its prisoners"
            }
        ],
        choices: [
            {
                text: "Play Again",
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

    // Many more scenes would be implemented to complete the story...

    // Ensure all referenced scenes have at least placeholder implementations
};