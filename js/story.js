// Story data for Echoes of the Library

const STORY_DATA = {
    // Starting scene: Library entrance
    "entrance": {
        id: "entrance",
        background: "scene-library-detailed", // Changed to use our new detailed scene
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
                text: "Inside, the air is thick with dust and the scent of old books. The library seems unnaturally empty."
            },
            {
                speaker: "You",
                text: "Hello? Is anyone here? I just need somewhere to wait out the storm..."
            },
            {
                speaker: "Narrator",
                text: "Your voice echoes through the vast hall. No response comes, save for the distant rumble of thunder."
            }
        ],
        effects: {
            visual: "flicker" // Removed sound effects
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
        background: "scene-library-detailed", // Changed to match entrance scene
        effects: {
            visual: "flicker" // Removed sound effects
        },
        dialogue: [
            {
                speaker: "Narrator",
                text: "As you turn to leave, a deafening crack of thunder shakes the building. The lights flicker ominously."
            },
            {
                speaker: "Narrator",
                text: "The door you just came through is now... different. Older. Made of dark wood with strange symbols carved into its frame."
            },
            {
                speaker: "You",
                text: "What the...? This isn't the door I came through."
            },
            {
                speaker: "Narrator",
                text: "You try the handle, but it won't budge. It seems you have no choice but to venture deeper into the library."
            }
        ],
        choices: [
            {
                text: "Explore deeper into the library",
                nextScene: "main_hall"
            },
            {
                text: "Check the reception desk",
                nextScene: "reception"
            }
        ]
    },
    
    // Reception desk scene
    "reception": {
        id: "reception",
        background: "scene-reception-desk", // Using CSS scene
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
            }
        ],
        choices: [
            {
                text: "Ring the bell",
                nextScene: "meet_librarian"
            },
            {
                text: "Leave the desk and explore the main hall",
                nextScene: "main_hall"
            },
            {
                text: "Examine the ledger more closely",
                nextScene: "examine_ledger"
            }
        ]
    },
    
    // New scene: Examine Ledger
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
                speaker: "You",
                text: "These dates can't be right... the last entry is from 1973."
            },
            {
                speaker: "Narrator",
                text: "As you flip through the pages, you notice something strange. The names begin to repeat across decades, with identical handwriting."
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
                text: "A chill runs down your spine as you notice your own name written at the bottom of the page, dated today, with a blank space beside it."
            }
        ],
        choices: [
            {
                text: "Close the ledger immediately",
                nextScene: "reception"
            },
            {
                text: "Ring the bell to call the librarian",
                nextScene: "meet_librarian"
            },
            {
                text: "Leave the desk and explore the main hall",
                nextScene: "main_hall"
            }
        ]
    },
    
    // Meet the Librarian scene
    "meet_librarian": {
        id: "meet_librarian",
        background: "reception_desk", 
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
                speaker: "Librarian",
                text: "Welcome to our humble collection. It's been... quite some time since we've had a visitor."
            },
            {
                speaker: "Narrator",
                text: "Her voice is soft but carries a strange resonance. Her eyes seem to look through you rather than at you."
            },
            {
                speaker: "You",
                text: "I'm sorry to intrude. I just needed shelter from the storm. Is it alright if I stay for a while?"
            },
            {
                speaker: "Librarian",
                text: "Of course. The library welcomes all seekers of knowledge. Feel free to browse our... special collection."
            },
            {
                speaker: "Librarian",
                text: "But I must warn you: some books are not meant to be opened. And once you've read certain words, they cannot be unread."
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
    
    // Main hall scene
    "main_hall": {
        id: "main_hall",
        background: "scene-main-hall", // Using CSS scene
        dialogue: [
            {
                speaker: "Narrator",
                text: "The main hall stretches before you, lined with towering bookshelves that seem to reach impossibly high."
            },
            {
                speaker: "Narrator",
                text: "Dust motes dance in beams of light that filter through stained glass windows, depicting scenes you can't quite make out."
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
                text: "And in the distance, you hear what sounds like... whispers."
            }
        ],
        choices: [
            {
                text: "Follow the sound of whispers",
                nextScene: "restricted_section"
            },
            {
                text: "Look for a map or directory",
                nextScene: "find_map"
            },
            {
                text: "Return to the entrance",
                nextScene: "try_leave"
            }
        ]
    },
    
    // Restricted Section 
    "restricted_section": {
        id: "restricted_section",
        background: "scene-restricted-section", // Using CSS scene
        dialogue: [
            {
                speaker: "Narrator",
                text: "The whispers grow louder as you approach a section cordoned off with worn velvet ropes."
            },
            {
                speaker: "Narrator",
                text: "Above the entrance, a faded sign reads: 'Restricted Section - Authorized Personnel Only'."
            },
            {
                speaker: "You",
                text: "I shouldn't be going in there, but..."
            },
            {
                speaker: "Narrator",
                text: "The whispers seem to be calling your name, drawing you in with promises of secrets and forgotten knowledge."
            }
        ],
        choices: [
            {
                text: "Enter the restricted section",
                nextScene: "inside_restricted"
            },
            {
                text: "Return to the main hall",
                nextScene: "main_hall"
            }
        ]
    },
    
    // Inside Restricted Section
    "inside_restricted": {
        id: "inside_restricted",
        background: "scene-restricted-section",
        effects: {
            visual: "pulse" // Removed sound effects
        },
        dialogue: [
            {
                speaker: "Narrator",
                text: "The air grows cold as you step into the restricted section. Rows of ancient tomes line the shelves, many bound in materials you can't identify."
            },
            {
                speaker: "Narrator",
                text: "Strange symbols glow faintly along the spines of some books, pulsing like a heartbeat."
            },
            {
                speaker: "You",
                text: "What are these? I've never seen anything like this before..."
            }
        ],
        choices: [
            {
                text: "Examine an ancient tome with glowing symbols",
                nextScene: "examine_tome"
            },
            {
                text: "Look for a specific book that calls to you",
                nextScene: "follow_whispers"
            },
            {
                text: "Leave immediately",
                nextScene: "main_hall"
            }
        ]
    },
    
    // Examine Ancient Tome scene
    "examine_tome": {
        id: "examine_tome",
        background: "scene-ancient-tome", // Using our new CSS-based scene
        effects: {
            visual: "pulse"
        },
        dialogue: [
            {
                speaker: "Narrator",
                text: "You carefully take one of the books from the shelf. It feels warm to the touch, almost alive."
            },
            {
                speaker: "Narrator",
                text: "The cover is bound in some material that resembles leather, but with an iridescent quality. Strange symbols are etched into its surface, glowing with a soft purple light."
            },
            {
                speaker: "You",
                text: "These symbols... they seem to shift when I'm not looking directly at them."
            },
            {
                speaker: "Narrator",
                text: "As you open the book, the air around you grows thick. The pages are filled with text in a language you've never seen, yet somehow... you begin to understand fragments of it."
            },
            {
                speaker: "Narrator",
                text: "The book appears to be describing doorways between worlds, and rituals to open passages to places that should not exist."
            }
        ],
        choices: [
            {
                text: "Continue reading the mysterious text",
                nextScene: "continue_reading"
            },
            {
                text: "Close the book immediately",
                nextScene: "close_book"
            },
            {
                text: "Look for the librarian to ask about this book",
                nextScene: "seek_librarian"
            }
        ]
    },
    
    // Placeholder for the follow_whispers scene
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
                text: "What is that voice trying to tell me...?"
            }
        ],
        choices: [
            {
                text: "Return to the main hall",
                nextScene: "main_hall"
            },
            {
                text: "Follow the whispers further",
                nextScene: "main_hall" // Placeholder - would need a proper scene
            }
        ]
    },
    
    // Placeholder scenes for examine_tome choices
    "continue_reading": {
        id: "continue_reading",
        background: "scene-ancient-tome",
        dialogue: [
            {
                speaker: "Narrator",
                text: "As you continue to read, the words seem to slither across the page, rearranging themselves before your eyes."
            },
            {
                speaker: "Narrator",
                text: "You feel a strange sensation, as if the book is reading you in return."
            }
        ],
        choices: [
            {
                text: "Put the book back on the shelf",
                nextScene: "inside_restricted"
            }
        ]
    },
    
    "close_book": {
        id: "close_book",
        background: "scene-restricted-section",
        effects: {
            visual: "shake"
        },
        dialogue: [
            {
                speaker: "Narrator",
                text: "You slam the book shut. For a moment, you could swear you heard it whisper in protest."
            },
            {
                speaker: "You",
                text: "I think I've seen enough of that..."
            }
        ],
        choices: [
            {
                text: "Return to browsing the restricted section",
                nextScene: "inside_restricted"
            },
            {
                text: "Leave the restricted section",
                nextScene: "main_hall"
            }
        ]
    },
    
    "seek_librarian": {
        id: "seek_librarian",
        background: "scene-restricted-section",
        dialogue: [
            {
                speaker: "Narrator",
                text: "You decide to find the librarian and ask about this strange book."
            },
            {
                speaker: "You",
                text: "There must be someone who knows what these books really are."
            }
        ],
        choices: [
            {
                text: "Search for the librarian",
                nextScene: "main_hall" // This would lead to a scene where you find the librarian
            }
        ]
    },

    // Add a new scene for "ask_door" that was referenced but not implemented
    "ask_door": {
        id: "ask_door",
        background: "scene-reception-desk",
        character: {
            id: "librarian",
            emotion: "threatening" // This is one variation you could create
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

    // Add special collection scene
    "special_collection": {
        id: "special_collection",
        background: "scene-reception-desk",
        character: {
            id: "librarian",
            emotion: "smiling" // Another variation you might create
        },
        dialogue: [
            {
                speaker: "You",
                text: "You mentioned a 'special collection'. What kind of books are kept there?"
            },
            {
                speaker: "Librarian",
                text: "Books of uncommon knowledge. Texts that contain... perspectives not found in conventional libraries."
            },
            {
                speaker: "Librarian",
                text: "Some visitors come specifically seeking those volumes. They contain answers, but not all questions should be asked."
            },
            {
                speaker: "You",
                text: "Are these rare books? Historical texts?"
            },
            {
                speaker: "Librarian",
                text: "Let's just say they're books that change their readers as much as their readers interpret them. You'll find them if they wish to be found."
            }
        ],
        choices: [
            {
                text: "Ask about the door at the entrance",
                nextScene: "ask_door"
            },
            {
                text: "Thank her and explore on your own",
                nextScene: "main_hall"
            }
        ]
    },
    
    // More scenes would follow...
    
    // This is just a sample to get started
};