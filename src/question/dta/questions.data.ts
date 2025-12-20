import { Dimension } from 'src/common/enum/dimensions.enum';
import { Question } from '../interface/question.interface';

export const QUESTIONS: Question[] = [
  // --- SECTION 1: PONGAL PREP (The Engineering Way) ---
  {
    id: 1,
    text: '🧹 Mom says "Clean the house for Bhogi". Your strategy?',
    options: {
      A: {
        text: 'Move everything to one room and close the door (Quick Fix)',
        mapsTo: [Dimension.TECH],
      },
      B: {
        text: 'Organize items by size, color, and usage (Database)',
        mapsTo: [Dimension.DATA],
      },
      C: {
        text: 'Repair the broken fans and lights while cleaning',
        mapsTo: [Dimension.CORE, Dimension.IOT],
      },
      D: {
        text: 'Delegate tasks to younger siblings (Management)',
        mapsTo: [Dimension.MGMT],
      },
    },
  },
  {
    id: 2,
    text: '🎋 Buying Sugarcane at the market. You pick based on:',
    options: {
      A: {
        text: 'Structural integrity (Tall & Straight)',
        mapsTo: [Dimension.CORE],
      },
      B: {
        text: 'Cost-to-height ratio (Value for money)',
        mapsTo: [Dimension.BIZ],
      },
      C: {
        text: 'How good it will look in the Instagram story',
        mapsTo: [Dimension.DESIGN],
      },
      D: {
        text: 'I bargain with the seller (Negotiation skills)',
        mapsTo: [Dimension.SOCIAL, Dimension.MGMT],
      },
    },
  },
  {
    id: 3,
    text: '🎨 Drawing the Kolam at the college entrance:',
    options: {
      A: {
        text: 'I use a grid system for perfect symmetry',
        mapsTo: [Dimension.TECH, Dimension.DATA],
      },
      B: {
        text: 'I freehand a complex floral design',
        mapsTo: [Dimension.DESIGN],
      },
      C: {
        text: 'I manage the crowd so no one steps on it',
        mapsTo: [Dimension.MGMT],
      },
      D: {
        text: 'I mix the color powders (Chemical Engineering)',
        mapsTo: [Dimension.CORE],
      },
    },
  },
  {
    id: 4,
    text: '🔥 Building the traditional Mud Stove (Aduppu):',
    options: {
      A: {
        text: 'Calculate air-flow for maximum fire efficiency',
        mapsTo: [Dimension.CORE],
      },
      B: {
        text: 'Decorate the pot with Turmeric/Kumkum first',
        mapsTo: [Dimension.DESIGN],
      },
      C: {
        text: 'Gather the wood and cow dung cakes',
        mapsTo: [Dimension.SOCIAL],
      },
      D: {
        text: 'Find a way to light it using a battery/lighter',
        mapsTo: [Dimension.TECH],
      },
    },
  },
  {
    id: 5,
    text: '🪵 Bhogi Fire. You have old lab records to burn. You:',
    options: {
      A: { text: 'Burn them. The past is past.', mapsTo: [Dimension.CORE] },
      B: {
        text: 'Scan them to PDF first, then burn (Backup)',
        mapsTo: [Dimension.DATA, Dimension.TECH],
      },
      C: {
        text: 'Feel emotional about the handwriting',
        mapsTo: [Dimension.LANG],
      },
      D: {
        text: 'Check if juniors need them first (Resource sharing)',
        mapsTo: [Dimension.MGMT, Dimension.SOCIAL],
      },
    },
  },

  // --- SECTION 2: THE COOKING & FOOD (Process Optimization) ---
  {
    id: 6,
    text: '🌾 The Pongal Pot is taking too long to boil. You:',
    options: {
      A: {
        text: 'Blow air into the fire (Thermodynamics)',
        mapsTo: [Dimension.CORE],
      },
      B: {
        text: 'Calculate estimated time based on water volume',
        mapsTo: [Dimension.DATA],
      },
      C: {
        text: 'Start singing "Pongalo Pongal" to manifest it',
        mapsTo: [Dimension.LANG, Dimension.SOCIAL],
      },
      D: { text: 'Distract everyone with snacks', mapsTo: [Dimension.MGMT] },
    },
  },
  {
    id: 7,
    text: '🍚 Distribution Time. 100 students, 1 pot of Pongal.',
    options: {
      A: {
        text: 'Form a single line queue (FIFO algorithm)',
        mapsTo: [Dimension.TECH, Dimension.DATA],
      },
      B: {
        text: 'Scoop carefully so everyone gets cashews',
        mapsTo: [Dimension.SOCIAL],
      },
      C: {
        text: 'Design eco-friendly banana leaf cups',
        mapsTo: [Dimension.DESIGN, Dimension.CORE],
      },
      D: {
        text: 'Ensure the Principal gets served first',
        mapsTo: [Dimension.MGMT],
      },
    },
  },
  {
    id: 8,
    text: '🦈 Eating Sugarcane. It’s hard to bite. You:',
    options: {
      A: {
        text: 'Use sheer jaw strength (Mechanical Force)',
        mapsTo: [Dimension.CORE],
      },
      B: {
        text: 'Use a knife to peel it perfectly (Tools)',
        mapsTo: [Dimension.TECH],
      },
      C: {
        text: 'Pick the smallest, softest piece (Optimization)',
        mapsTo: [Dimension.DATA],
      },
      D: {
        text: 'Just drink the juice from a stall instead',
        mapsTo: [Dimension.BIZ],
      },
    },
  },
  {
    id: 9,
    text: '🥥 Breaking the Coconut. It must split perfectly.',
    options: {
      A: { text: 'Aim for the center of gravity', mapsTo: [Dimension.CORE] },
      B: { text: 'Pray before smashing it', mapsTo: [Dimension.LANG] },
      C: {
        text: 'Check if the floor is hard enough',
        mapsTo: [Dimension.DATA],
      },
      D: { text: 'Film it in slow motion', mapsTo: [Dimension.DESIGN] },
    },
  },
  {
    id: 10,
    text: '🥜 The Cashew Nut Dilemma. Your friend stole your cashews.',
    options: {
      A: {
        text: 'Analyze who was sitting closest (Forensics)',
        mapsTo: [Dimension.DATA, Dimension.TECH],
      },
      B: {
        text: 'Steal theirs back (Hack/Counter-attack)',
        mapsTo: [Dimension.CYBER, Dimension.TECH],
      },
      C: {
        text: 'Let it go, it’s a festival (Social Welfare)',
        mapsTo: [Dimension.SOCIAL],
      },
      D: { text: 'Negotiate a trade for their Vadai', mapsTo: [Dimension.BIZ] },
    },
  },

  // --- SECTION 3: COLLEGE EVENTS & ETHNIC DAY ---
  {
    id: 11,
    text: '👔 Ethnic Day: Wearing a Veshti/Dhoti to class.',
    options: {
      A: {
        text: 'Double knot it for safety (Security)',
        mapsTo: [Dimension.CORE],
      },
      B: {
        text: 'Checking if it matches my shirt (UI/UX)',
        mapsTo: [Dimension.DESIGN],
      },
      C: {
        text: 'Worried about it falling down while walking',
        mapsTo: [Dimension.DATA],
      },
      D: {
        text: 'Walking with "Gethu" (Confidence/Leadership)',
        mapsTo: [Dimension.MGMT, Dimension.LANG],
      },
    },
  },
  {
    id: 12,
    text: '💃 Group Dance Practice for the Culturals.',
    options: {
      A: {
        text: 'I memorize the steps like a flowchart',
        mapsTo: [Dimension.TECH, Dimension.DATA],
      },
      B: { text: 'I focus on the rhythm and beats', mapsTo: [Dimension.LANG] },
      C: { text: 'I design the matching costumes', mapsTo: [Dimension.DESIGN] },
      D: {
        text: 'I coordinate the practice timings',
        mapsTo: [Dimension.MGMT],
      },
    },
  },
  {
    id: 13,
    text: '📸 The "Group Photo" Struggle.',
    options: {
      A: {
        text: 'I adjust the camera ISO and shutter speed',
        mapsTo: [Dimension.CORE, Dimension.DESIGN],
      },
      B: {
        text: 'I tell people where to stand (Sorting)',
        mapsTo: [Dimension.DATA, Dimension.MGMT],
      },
      C: { text: 'I jump in at the last second', mapsTo: [Dimension.SOCIAL] },
      D: {
        text: 'I edit the photo later to remove photobombers',
        mapsTo: [Dimension.TECH, Dimension.DESIGN],
      },
    },
  },
  {
    id: 14,
    text: '🎤 Uri Adithal (Pot Breaking) Competition. You are blindfolded.',
    options: {
      A: {
        text: 'Calculate the angle based on crowd noise',
        mapsTo: [Dimension.DATA, Dimension.TECH],
      },
      B: {
        text: 'Swing the stick with maximum power',
        mapsTo: [Dimension.CORE],
      },
      C: {
        text: 'Listen to my friend’s voice instructions',
        mapsTo: [Dimension.SOCIAL, Dimension.LANG],
      },
      D: {
        text: 'Just swing randomly and hope for the best',
        mapsTo: [Dimension.BIZ],
      },
    },
  },
  {
    id: 15,
    text: '🚜 Tractor Ride / Bullock Cart Ride on Campus.',
    options: {
      A: { text: 'Examine the wheel mechanism', mapsTo: [Dimension.CORE] },
      B: { text: 'Enjoy the view and breeze', mapsTo: [Dimension.DESIGN] },
      C: {
        text: 'Calculate the horsepower of the bull vs tractor',
        mapsTo: [Dimension.DATA],
      },
      D: {
        text: 'Organize a race between departments',
        mapsTo: [Dimension.MGMT, Dimension.BIZ],
      },
    },
  },

  // --- SECTION 4: VACATION & TRAVEL (The struggle is real) ---
  {
    id: 16,
    text: '🚌 Booking a bus ticket home for Pongal holidays.',
    options: {
      A: {
        text: 'I wrote a script to auto-book when sales open',
        mapsTo: [Dimension.TECH, Dimension.CYBER],
      },
      B: {
        text: 'I compare prices across 5 apps',
        mapsTo: [Dimension.DATA, Dimension.BIZ],
      },
      C: {
        text: 'I coordinate a van for the whole gang',
        mapsTo: [Dimension.MGMT, Dimension.SOCIAL],
      },
      D: {
        text: 'I decide to ride my bike home (Endurance)',
        mapsTo: [Dimension.CORE],
      },
    },
  },
  {
    id: 17,
    text: '🎒 Packing your bag for the holidays.',
    options: {
      A: {
        text: 'Pack only essentials (Minimalist/Clean Code)',
        mapsTo: [Dimension.TECH],
      },
      B: {
        text: 'Pack outfits for every possible occasion',
        mapsTo: [Dimension.DESIGN],
      },
      C: {
        text: 'Pack my laptop "just in case"',
        mapsTo: [Dimension.WORKAHOLIC, Dimension.TECH],
      }, // Map WORKAHOLIC to TECH/CORE
      D: {
        text: 'Stuff everything in and zip it by force',
        mapsTo: [Dimension.CORE],
      },
    },
  },
  {
    id: 18,
    text: '📺 Watching "Patti Mandram" (Debate Show) on TV.',
    options: {
      A: {
        text: 'Analyze the logic of the arguments',
        mapsTo: [Dimension.DATA, Dimension.LANG],
      },
      B: {
        text: 'Laugh at the jokes and wordplay',
        mapsTo: [Dimension.LANG, Dimension.SOCIAL],
      },
      C: { text: 'Critique the stage decoration', mapsTo: [Dimension.DESIGN] },
      D: {
        text: 'Explain to grandma why the judge is wrong',
        mapsTo: [Dimension.MGMT],
      },
    },
  },
  {
    id: 19,
    text: '📱 No WiFi in the village/hometown.',
    options: {
      A: {
        text: 'Climb the roof to find signal (Antenna logic)',
        mapsTo: [Dimension.CORE, Dimension.IOT],
      },
      B: {
        text: 'Finally talk to real humans',
        mapsTo: [Dimension.SOCIAL, Dimension.LANG],
      },
      C: {
        text: 'Play offline games I downloaded earlier',
        mapsTo: [Dimension.TECH],
      },
      D: { text: 'Take photos of nature', mapsTo: [Dimension.DESIGN] },
    },
  },
  {
    id: 20,
    text: '🐂 Jallikattu is on TV. You focus on:',
    options: {
      A: { text: "The physics of the bull's jump", mapsTo: [Dimension.CORE] },
      B: {
        text: 'The strategy of the tamer grabbing the hump',
        mapsTo: [Dimension.BIZ, Dimension.MGMT],
      },
      C: {
        text: 'The cultural history and pride',
        mapsTo: [Dimension.LANG, Dimension.SOCIAL],
      },
      D: {
        text: 'The safety barricade engineering',
        mapsTo: [Dimension.CORE, Dimension.TECH],
      },
    },
  },

  // --- SECTION 5: TECH MEETS TRADITION (Hypothetical) ---
  {
    id: 21,
    text: '🤖 You have to build a "Tech-Pongal" Project.',
    options: {
      A: {
        text: 'Automated Sugarcane Peeler',
        mapsTo: [Dimension.CORE, Dimension.IOT],
      },
      B: {
        text: 'AI App to translate "Thirukkural"',
        mapsTo: [Dimension.TECH, Dimension.DATA],
      },
      C: {
        text: 'VR Experience of a Village Festival',
        mapsTo: [Dimension.DESIGN, Dimension.TECH],
      },
      D: {
        text: 'Crowdfunding platform for farmers',
        mapsTo: [Dimension.BIZ, Dimension.SOCIAL],
      },
    },
  },
  {
    id: 22,
    text: '🐄 Mattu Pongal: Decorating the Cow.',
    options: {
      A: {
        text: 'Painting the horns with patterns',
        mapsTo: [Dimension.DESIGN],
      },
      B: {
        text: 'Tying the bells securely (Mechanical)',
        mapsTo: [Dimension.CORE],
      },
      C: {
        text: 'Feeding it the right mix of food',
        mapsTo: [Dimension.DATA, Dimension.SOCIAL],
      },
      D: { text: 'Taking a selfie with the cow', mapsTo: [Dimension.SOCIAL] },
    },
  },
  {
    id: 23,
    text: '🎆 Fireworks? (Environment Check).',
    options: {
      A: { text: 'I prefer silent, visual lights', mapsTo: [Dimension.DESIGN] },
      B: { text: 'I check the chemical composition', mapsTo: [Dimension.CORE] },
      C: {
        text: 'I avoid them (Pollution awareness)',
        mapsTo: [Dimension.SOCIAL, Dimension.DATA],
      },
      D: {
        text: 'I coordinate the timing for the show',
        mapsTo: [Dimension.MGMT],
      },
    },
  },
  {
    id: 24,
    text: '🪁 Flying Kites (Kaatradi).',
    options: {
      A: { text: 'Aerodynamics and lift', mapsTo: [Dimension.CORE] },
      B: {
        text: "Cutting the opponent's string (Competition)",
        mapsTo: [Dimension.BIZ],
      },
      C: {
        text: 'Designing a cool tail for the kite',
        mapsTo: [Dimension.DESIGN],
      },
      D: {
        text: 'Holding the spool (Support role)',
        mapsTo: [Dimension.SOCIAL],
      },
    },
  },
  {
    id: 25,
    text: '🌞 Greeting the Sun God (Surya Pongal).',
    options: {
      A: {
        text: 'Solar Energy is the future',
        mapsTo: [Dimension.CORE, Dimension.TECH],
      },
      B: { text: 'Wake up early? Impossible.', mapsTo: [Dimension.TECH] }, // Developer sleep cycle
      C: { text: 'Appreciate the light/lighting', mapsTo: [Dimension.DESIGN] },
      D: {
        text: 'Gratitude for nature (Philosophy)',
        mapsTo: [Dimension.LANG, Dimension.SOCIAL],
      },
    },
  },

  // --- SECTION 6: GENERAL STUDENT LIFE (With a Tamil Twist) ---
  {
    id: 26,
    text: '🚍 College Bus Route. The "Window Seat".',
    options: {
      A: {
        text: 'Calculated which side has less sun',
        mapsTo: [Dimension.DATA, Dimension.CORE],
      },
      B: { text: 'Reserved it with a handkerchief', mapsTo: [Dimension.MGMT] },
      C: {
        text: 'I need it for fresh air (Ventilation)',
        mapsTo: [Dimension.CORE],
      },
      D: { text: 'I let my friend sit there', mapsTo: [Dimension.SOCIAL] },
    },
  },
  {
    id: 27,
    text: '🍛 Canteen "Vada Sambar".',
    options: {
      A: {
        text: 'Soak the Vada perfectly (Fluid dynamics)',
        mapsTo: [Dimension.CORE],
      },
      B: { text: 'Eat it quickly before next class', mapsTo: [Dimension.MGMT] },
      C: {
        text: 'Post a food review',
        mapsTo: [Dimension.DESIGN, Dimension.SOCIAL],
      },
      D: { text: 'Calculate the calories', mapsTo: [Dimension.DATA] },
    },
  },
  {
    id: 28,
    text: '📝 Writing "Records" (Lab Manuals).',
    options: {
      A: {
        text: "Copy blindly from the senior's record",
        mapsTo: [Dimension.BIZ],
      }, // Efficiency
      B: {
        text: 'Draw the diagrams perfectly with a stencil',
        mapsTo: [Dimension.DESIGN, Dimension.CORE],
      },
      C: {
        text: 'Understand the code while writing',
        mapsTo: [Dimension.TECH],
      },
      D: {
        text: 'Outsource it to a friend (Delegation)',
        mapsTo: [Dimension.MGMT],
      },
    },
  },
  {
    id: 29,
    text: '🚧 Industrial Visit (IV) Trip.',
    options: {
      A: {
        text: 'I want to see the machines working',
        mapsTo: [Dimension.CORE, Dimension.IOT],
      },
      B: {
        text: 'I want to ask the CEO questions',
        mapsTo: [Dimension.BIZ, Dimension.MGMT],
      },
      C: {
        text: 'I am here for the DJ night on the bus',
        mapsTo: [Dimension.SOCIAL, Dimension.DESIGN],
      },
      D: {
        text: 'I want to understand the company workflow',
        mapsTo: [Dimension.DATA],
      },
    },
  },
  {
    id: 30,
    text: '🤐 "Viva Voce" (Oral Exam). External asks a tough question.',
    options: {
      A: {
        text: 'Attempt to derive the answer logically',
        mapsTo: [Dimension.TECH, Dimension.DATA],
      },
      B: {
        text: 'Confidently speak nonsense (Social Engineering)',
        mapsTo: [Dimension.BIZ, Dimension.LANG],
      },
      C: {
        text: 'Draw a diagram to explain',
        mapsTo: [Dimension.DESIGN, Dimension.CORE],
      },
      D: {
        text: 'Smile and say "I studied the other unit sir"',
        mapsTo: [Dimension.SOCIAL],
      },
    },
  },
  {
    id: 31,
    text: '💤 8:00 AM Lecture. You are sleepy.',
    options: {
      A: { text: 'Sleep with eyes open (Skill)', mapsTo: [Dimension.SOCIAL] },
      B: {
        text: 'Sit under the fan for max cooling',
        mapsTo: [Dimension.CORE],
      },
      C: {
        text: 'Record the audio to listen later',
        mapsTo: [Dimension.TECH, Dimension.DATA],
      },
      D: { text: 'Doodle/Draw in the notebook', mapsTo: [Dimension.DESIGN] },
    },
  },
  {
    id: 32,
    text: '🏏 Hostel Cricket Match.',
    options: {
      A: { text: 'I keep the score (Stats)', mapsTo: [Dimension.DATA] },
      B: {
        text: 'I am the captain (Strategy)',
        mapsTo: [Dimension.MGMT, Dimension.BIZ],
      },
      C: {
        text: 'I repair the broken bat with tape',
        mapsTo: [Dimension.CORE],
      },
      D: {
        text: 'I provide the commentary',
        mapsTo: [Dimension.LANG, Dimension.SOCIAL],
      },
    },
  },
  {
    id: 33,
    text: '🍵 Tea Kadai (Tea Shop) Discussions.',
    options: {
      A: {
        text: 'Politics and Society',
        mapsTo: [Dimension.SOCIAL, Dimension.LANG],
      },
      B: {
        text: 'Startup Ideas / Business',
        mapsTo: [Dimension.BIZ, Dimension.MGMT],
      },
      C: { text: 'New Tech / AI trends', mapsTo: [Dimension.TECH] },
      D: {
        text: 'Cinema / Movies',
        mapsTo: [Dimension.DESIGN, Dimension.LANG],
      },
    },
  },
  {
    id: 34,
    text: '🎬 Movie release (FDFS - First Day First Show).',
    options: {
      A: {
        text: 'Booking tickets for the whole class',
        mapsTo: [Dimension.MGMT],
      },
      B: {
        text: 'Whistling and dancing near the screen',
        mapsTo: [Dimension.SOCIAL, Dimension.LANG],
      },
      C: {
        text: 'Creating meme content from the movie',
        mapsTo: [Dimension.DESIGN],
      },
      D: { text: 'Analyzing the VFX breakdown', mapsTo: [Dimension.TECH] },
    },
  },
  {
    id: 35,
    text: '💡 Power Cut in the Hostel.',
    options: {
      A: {
        text: 'Fix the fuse box (Illegal but effective)',
        mapsTo: [Dimension.CORE, Dimension.IOT],
      },
      B: {
        text: 'Tell ghost stories',
        mapsTo: [Dimension.LANG, Dimension.SOCIAL],
      },
      C: { text: 'Use phone flashlight to study', mapsTo: [Dimension.DATA] },
      D: { text: 'Create shadow puppets', mapsTo: [Dimension.DESIGN] },
    },
  },
  {
    id: 36,
    text: '🛠️ Hackathon is in 24 hours.',
    options: {
      A: {
        text: "I'll build the backend API",
        mapsTo: [Dimension.TECH, Dimension.DATA],
      },
      B: {
        text: "I'll solder the sensors",
        mapsTo: [Dimension.CORE, Dimension.IOT],
      },
      C: {
        text: "I'll make the Pitch Deck (PPT)",
        mapsTo: [Dimension.BIZ, Dimension.DESIGN],
      },
      D: {
        text: "I'll order food and keep morale high",
        mapsTo: [Dimension.MGMT, Dimension.SOCIAL],
      },
    },
  },
  {
    id: 37,
    text: '🍌 Banana Leaf Meal. How do you fold it?',
    options: {
      A: {
        text: 'Fold inwards (I enjoyed it)',
        mapsTo: [Dimension.LANG, Dimension.SOCIAL],
      },
      B: { text: 'Fold carefully so nothing leaks', mapsTo: [Dimension.CORE] },
      C: { text: 'Too full to move hands', mapsTo: [Dimension.DATA] }, // Buffer full
      D: { text: 'Take a photo before folding', mapsTo: [Dimension.DESIGN] },
    },
  },
  {
    id: 38,
    text: '🦁 "Singam" (Lion) Attitude. When do you show it?',
    options: {
      A: {
        text: 'When debugging code works first try',
        mapsTo: [Dimension.TECH],
      },
      B: {
        text: 'When presenting on stage',
        mapsTo: [Dimension.LANG, Dimension.BIZ],
      },
      C: {
        text: 'When lifting heavy weights/objects',
        mapsTo: [Dimension.CORE],
      },
      D: { text: 'When defending a friend', mapsTo: [Dimension.SOCIAL] },
    },
  },
  {
    id: 39,
    text: '🎼 Chennai "Gana" Song plays. You:',
    options: {
      A: { text: 'Analyze the beat pattern', mapsTo: [Dimension.DATA] },
      B: {
        text: 'Start dancing (Vibe check)',
        mapsTo: [Dimension.SOCIAL, Dimension.DESIGN],
      },
      C: { text: 'Memorize the local slang lyrics', mapsTo: [Dimension.LANG] },
      D: {
        text: 'Wonder how loud the speakers can go',
        mapsTo: [Dimension.CORE],
      },
    },
  },
  {
    id: 40,
    text: '🥥 Tender Coconut (Elaneer).',
    options: {
      A: {
        text: 'Drink it for electrolytes (Bio-hacking)',
        mapsTo: [Dimension.DATA, Dimension.TECH],
      },
      B: {
        text: 'Use the shell for a craft project',
        mapsTo: [Dimension.DESIGN],
      },
      C: {
        text: 'Scoop the "Vazhukkai" (flesh) perfectly',
        mapsTo: [Dimension.CORE],
      },
      D: { text: 'Buy for everyone', mapsTo: [Dimension.SOCIAL] },
    },
  },
  {
    id: 41,
    text: '🐂 Jallikattu Protest / Student Rally.',
    options: {
      A: { text: 'Organize the gathering location', mapsTo: [Dimension.MGMT] },
      B: {
        text: 'Design the posters and hashtags',
        mapsTo: [Dimension.DESIGN, Dimension.TECH],
      },
      C: {
        text: 'Lead the chants',
        mapsTo: [Dimension.LANG, Dimension.SOCIAL],
      },
      D: {
        text: 'Ensure water supply for protesters',
        mapsTo: [Dimension.CORE, Dimension.BIZ],
      },
    },
  },
  {
    id: 42,
    text: '🌧️ Chennai Floods (Monsoon).',
    options: {
      A: {
        text: 'Map the flooded streets (Data Vis)',
        mapsTo: [Dimension.DATA, Dimension.TECH],
      },
      B: {
        text: 'Volunteer for rescue boats',
        mapsTo: [Dimension.SOCIAL, Dimension.CORE],
      },
      C: {
        text: 'Build a floating raft from waste',
        mapsTo: [Dimension.CORE, Dimension.DESIGN],
      },
      D: {
        text: 'Coordinate relief materials',
        mapsTo: [Dimension.MGMT, Dimension.BIZ],
      },
    },
  },
  {
    id: 43,
    text: "🛺 Auto Rickshaw Meter. It's not working.",
    options: {
      A: {
        text: 'Estimate distance and calculate fair price',
        mapsTo: [Dimension.DATA, Dimension.TECH],
      },
      B: {
        text: 'Bargain in Tamil slang',
        mapsTo: [Dimension.LANG, Dimension.BIZ],
      },
      C: {
        text: "Fix the meter (I'm an engineer)",
        mapsTo: [Dimension.CORE, Dimension.IOT],
      },
      D: { text: 'Book a Rapido/Uber instead', mapsTo: [Dimension.TECH] },
    },
  },
  {
    id: 44,
    text: '🍛 Amma’s Sambar vs Hostel Sambar.',
    options: {
      A: {
        text: 'Amma’s has better chemical balance (Taste)',
        mapsTo: [Dimension.CORE],
      },
      B: {
        text: 'Hostel Sambar is just hot yellow water',
        mapsTo: [Dimension.DATA],
      }, // Analysis
      C: {
        text: 'I miss the love in home food',
        mapsTo: [Dimension.SOCIAL, Dimension.LANG],
      },
      D: { text: 'I order Swiggy anyway', mapsTo: [Dimension.BIZ] },
    },
  },
  {
    id: 45,
    text: '🎮 "Pubg" / Gaming Tournament.',
    options: {
      A: { text: 'I am the Sniper (Precision)', mapsTo: [Dimension.TECH] },
      B: {
        text: 'I am the Squad Leader (Tactics)',
        mapsTo: [Dimension.MGMT, Dimension.BIZ],
      },
      C: { text: 'I am the Medic/Reviver', mapsTo: [Dimension.SOCIAL] },
      D: { text: 'I drive the car (Physics)', mapsTo: [Dimension.CORE] },
    },
  },
  {
    id: 46,
    text: '📅 Exam Timetable released.',
    options: {
      A: {
        text: 'Create a study schedule algorithm',
        mapsTo: [Dimension.DATA, Dimension.MGMT],
      },
      B: { text: 'Panic instantly', mapsTo: [Dimension.SOCIAL] },
      C: {
        text: 'Check if there are enough holidays between papers',
        mapsTo: [Dimension.BIZ],
      },
      D: {
        text: 'Start gathering notes from toppers',
        mapsTo: [Dimension.TECH],
      }, // Information retrieval
    },
  },
  {
    id: 47,
    text: '🖊️ Pen stops writing in exam.',
    options: {
      A: {
        text: 'Shake it violently (Centrifugal force)',
        mapsTo: [Dimension.CORE],
      },
      B: {
        text: 'Borrow one from neighbor (Networking)',
        mapsTo: [Dimension.SOCIAL],
      },
      C: {
        text: 'I always carry 3 backups (Redundancy)',
        mapsTo: [Dimension.TECH, Dimension.MGMT],
      },
      D: {
        text: 'Use a pencil and call it "artistic"',
        mapsTo: [Dimension.DESIGN],
      },
    },
  },
  {
    id: 48,
    text: '👗 Saree Draping / Veshti Folding (Engineering).',
    options: {
      A: {
        text: "It's all about friction and tension",
        mapsTo: [Dimension.CORE],
      },
      B: { text: 'It needs to look elegant', mapsTo: [Dimension.DESIGN] },
      C: {
        text: 'I watch a YouTube tutorial',
        mapsTo: [Dimension.TECH, Dimension.DATA],
      },
      D: { text: 'I ask my mom for help', mapsTo: [Dimension.SOCIAL] },
    },
  },
  {
    id: 49,
    text: '🎋 Kaanum Pongal (Sightseeing).',
    options: {
      A: {
        text: 'Beach (Marina/Bessy)',
        mapsTo: [Dimension.SOCIAL, Dimension.DESIGN],
      },
      B: { text: 'Mall (Air Conditioning)', mapsTo: [Dimension.TECH] },
      C: { text: 'Temple (Tradition)', mapsTo: [Dimension.LANG] },
      D: {
        text: 'Home (Sleep is best)',
        mapsTo: [Dimension.CORE, Dimension.DATA],
      },
    },
  },
  {
    id: 50,
    text: '🎓 End of College Goal.',
    options: {
      A: {
        text: 'Placement in a top MNC',
        mapsTo: [Dimension.TECH, Dimension.DATA],
      },
      B: {
        text: 'Start my own company',
        mapsTo: [Dimension.BIZ, Dimension.MGMT],
      },
      C: { text: 'Masters abroad', mapsTo: [Dimension.CORE] },
      D: {
        text: 'Become a YouTuber/Influencer',
        mapsTo: [Dimension.DESIGN, Dimension.LANG],
      },
    },
  },
];
