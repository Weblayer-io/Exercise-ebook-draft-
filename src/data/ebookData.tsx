import React from 'react';

export interface EbookPage {
  id: string;
  section: string;
  title: string;
  content: React.ReactNode;
}

const workoutsData = [
  // PHASE 1: FOUNDATION
  {
    day: 1, title: "Push Foundation", intro: "Build the chest, shoulders, and triceps. Control the weight.",
    exercises: [
      { name: 'Barbell Bench Press', sets: '4', reps: '8-10' },
      { name: 'Overhead Press', sets: '3', reps: '8-10' },
      { name: 'Parallel Bar Dips', sets: '3', reps: '8-12' },
      { name: 'Tricep Rope Pushdowns', sets: '3', reps: '12-15' },
      { name: 'Dumbbell Lateral Raises', sets: '4', reps: '15-20' }
    ],
    proTip: "Focus on the mind-muscle connection. Don't just move the weight, feel the target muscle contracting."
  },
  {
    day: 2, title: "Pull Foundation", intro: "Develop the V-taper. Squeeze the back on every rep.",
    exercises: [
      { name: 'Pull-ups (or Lat Pulldowns)', sets: '4', reps: '6-10' },
      { name: 'Barbell Rows', sets: '4', reps: '8-10' },
      { name: 'Face Pulls', sets: '3', reps: '12-15' },
      { name: 'Dumbbell Bicep Curls', sets: '3', reps: '10-12' },
      { name: 'Hammer Curls', sets: '3', reps: '10-12' }
    ],
    proTip: "When pulling, imagine your hands are just hooks. Pull with your elbows to fully engage the lats."
  },
  {
    day: 3, title: "Legs & Core", intro: "Never skip legs. Build the foundation from the ground up.",
    exercises: [
      { name: 'Barbell Back Squats', sets: '4', reps: '8-10' },
      { name: 'Walking Lunges', sets: '3', reps: '10/leg' },
      { name: 'Romanian Deadlifts (RDLs)', sets: '3', reps: '10-12' },
      { name: 'Standing Calf Raises', sets: '4', reps: '15-20' },
      { name: 'Plank Hold', sets: '3', reps: '60 sec' }
    ],
    proTip: "Push through your heels on squats. Keep your chest up and core braced."
  },
  {
    day: 4, title: "Hybrid Upper", intro: "Combine weights and bodyweight for maximum pump.",
    exercises: [
      { name: 'Weighted Push-ups', sets: '4', reps: '10-12' },
      { name: 'Chin-ups', sets: '4', reps: '8-10' },
      { name: 'Arnold Press', sets: '3', reps: '10-12' },
      { name: 'Skull Crushers', sets: '3', reps: '10-12' },
      { name: 'Hanging Knee Raises', sets: '3', reps: '12-15' }
    ],
    proTip: "For hybrid days, pace yourself. Don't burn out on the weights before hitting the calisthenics."
  },
  {
    day: 5, title: "Hybrid Lower", intro: "Explosive power meets heavy iron.",
    exercises: [
      { name: 'Conventional Deadlifts', sets: '4', reps: '6-8' },
      { name: 'Box Jumps', sets: '3', reps: '8 reps' },
      { name: 'Bulgarian Split Squats', sets: '3', reps: '10/leg' },
      { name: 'Seated Calf Raises', sets: '4', reps: '15' },
      { name: 'Ab Wheel Rollouts', sets: '3', reps: '10-12' }
    ],
    proTip: "Explosive power starts from the ground up. Drive hard and fast on the concentric phase."
  },
  {
    day: 6, title: "Full Body Calisthenics", intro: "Master your own bodyweight. No iron today.",
    exercises: [
      { name: 'Muscle-up Progressions', sets: '4', reps: '5 reps' },
      { name: 'Straight Bar Dips', sets: '3', reps: '10-12' },
      { name: 'Australian Pull-ups (Inverted Rows)', sets: '4', reps: '12-15' },
      { name: 'Pistol Squat Progressions', sets: '3', reps: '8/leg' },
      { name: 'L-Sit Progressions', sets: '4', reps: 'Max Hold' }
    ],
    proTip: "Bodyweight mastery requires tension. Keep your core tight and glutes squeezed during all movements."
  },

  // PHASE 2: POWER (Heavier weights, lower reps)
  {
    day: 7, title: "Push Power", intro: "Time to increase the intensity. Heavier weights, lower reps.",
    exercises: [
      { name: 'Heavy Bench Press', sets: '5', reps: '5' },
      { name: 'Push Press', sets: '4', reps: '6' },
      { name: 'Weighted Dips', sets: '4', reps: '6-8' },
      { name: 'Close Grip Bench Press', sets: '3', reps: '8' },
      { name: 'Heavy Cable Crunches', sets: '3', reps: '12' }
    ],
    proTip: "Power requires speed on the way up, and control on the way down. Explode through the concentric phase."
  },
  {
    day: 8, title: "Pull Power", intro: "Thick back, heavy pulls. Grip it and rip it.",
    exercises: [
      { name: 'Heavy Barbell Rows', sets: '5', reps: '5' },
      { name: 'Weighted Pull-ups', sets: '4', reps: '5-8' },
      { name: 'T-Bar Rows', sets: '3', reps: '8' },
      { name: 'Heavy Hammer Curls', sets: '3', reps: '8' },
      { name: 'Farmer Walks', sets: '3', reps: '45 sec' }
    ],
    proTip: "Don't cheat your pull-ups. Full dead hang at the bottom, chin over the bar at the top."
  },
  {
    day: 9, title: "Leg Power", intro: "Move heavy weight. Build absolute lower body strength.",
    exercises: [
      { name: 'Heavy Back Squats', sets: '5', reps: '5' },
      { name: 'Leg Press', sets: '4', reps: '8' },
      { name: 'Hamstring Curls', sets: '3', reps: '10' },
      { name: 'Heavy Standing Calf Raises', sets: '4', reps: '10' },
      { name: 'Weighted Planks', sets: '3', reps: '45 sec' }
    ],
    proTip: "On leg press, don't lock your knees out completely at the top to keep tension on the quads and protect the joint."
  },
  {
    day: 10, title: "Core & Agility", intro: "Athleticism isn't just about looking good. It's about moving well.",
    exercises: [
      { name: 'Sprints (50 meters)', sets: '5', reps: '1 sprint' },
      { name: 'Broad Jumps', sets: '4', reps: '8 jumps' },
      { name: 'Toes to Bar', sets: '4', reps: '10' },
      { name: 'Russian Twists (Weighted)', sets: '3', reps: '20' },
      { name: 'Jump Rope', sets: '3', reps: '2 mins' }
    ],
    proTip: "Breathe out forcefully when contracting your core. It allows for a tighter squeeze."
  },
  {
    day: 11, title: "Upper Body Pump", intro: "High volume. Chase the pump and flush the muscles with blood.",
    exercises: [
      { name: 'Incline Dumbbell Press', sets: '4', reps: '12' },
      { name: 'Seated Cable Rows', sets: '4', reps: '12' },
      { name: 'Lat Pulldowns', sets: '3', reps: '15' },
      { name: 'Push-ups', sets: '3', reps: 'To Failure' },
      { name: 'Cable Lateral Raises', sets: '4', reps: '15' }
    ],
    proTip: "Chase the pump today. Keep rest periods strict (60s) to maximize blood flow to the muscles."
  },
  {
    day: 12, title: "Lower Body Volume", intro: "High reps. This will burn. Do not quit.",
    exercises: [
      { name: 'High Bar Squats', sets: '4', reps: '12-15' },
      { name: 'Walking Lunges', sets: '3', reps: '20 steps' },
      { name: 'Leg Extensions', sets: '3', reps: '15' },
      { name: 'Glute Bridges', sets: '3', reps: '15' },
      { name: 'Seated Calf Raises', sets: '4', reps: '20' }
    ],
    proTip: "High volume leg days are a mental battle. Take it one rep at a time. Don't quit early."
  },

  // PHASE 3: ADVANCED (Harder variations)
  {
    day: 13, title: "Advanced Push", intro: "Introducing gymnastics rings and advanced pressing.",
    exercises: [
      { name: 'Ring Dips', sets: '4', reps: '8-10' },
      { name: 'Handstand Push-up Negatives', sets: '4', reps: '5' },
      { name: 'Dumbbell Bench Press', sets: '3', reps: '10' },
      { name: 'Cable Flyes', sets: '3', reps: '15' },
      { name: 'Overhead Tricep Extensions', sets: '3', reps: '12' }
    ],
    proTip: "Keep your core braced during all heavy lifts. A tight core prevents energy leaks and protects your spine."
  },
  {
    day: 14, title: "Advanced Pull", intro: "Unilateral strength and advanced bodyweight levers.",
    exercises: [
      { name: 'Front Lever Tucks', sets: '4', reps: '15 sec' },
      { name: 'Archer Pull-ups', sets: '3', reps: '6/arm' },
      { name: 'Single Arm Dumbbell Rows', sets: '3', reps: '10/arm' },
      { name: 'Preacher Curls', sets: '3', reps: '12' },
      { name: 'Reverse Pec Deck (Rear Delts)', sets: '4', reps: '15' }
    ],
    proTip: "If archer pull-ups are too hard, use a resistance band or focus on uneven pull-ups first."
  },
  {
    day: 15, title: "Advanced Legs", intro: "Front-loaded squats and single-leg mastery.",
    exercises: [
      { name: 'Front Squats', sets: '4', reps: '8' },
      { name: 'Pistol Squats (Assisted if needed)', sets: '3', reps: '6/leg' },
      { name: 'Barbell Hip Thrusts', sets: '4', reps: '10' },
      { name: 'Deficit Calf Raises', sets: '4', reps: '15' },
      { name: 'Dragon Flags (or Negatives)', sets: '3', reps: '8' }
    ],
    proTip: "Front squats demand an upright torso. Keep your elbows high and don't let your upper back round."
  },
  {
    day: 16, title: "Gymnastics Rings Intro", intro: "Rings force stabilization. Your muscles will shake. Control it.",
    exercises: [
      { name: 'Ring Support Holds', sets: '4', reps: '20 sec' },
      { name: 'Ring Push-ups', sets: '4', reps: '10' },
      { name: 'Ring Rows', sets: '4', reps: '12' },
      { name: 'Ring Fallouts (Ab Rollouts)', sets: '3', reps: '10' },
      { name: 'Ring Pelican Curls (Light)', sets: '3', reps: '8' }
    ],
    proTip: "Turn the rings outward at the top of your support holds and push-ups for maximum chest and tricep activation."
  },
  {
    day: 17, title: "Heavy Deadlifts & Core", intro: "Raw strength. Pick heavy things up, put them down.",
    exercises: [
      { name: 'Deadlifts', sets: '3', reps: '3-5' },
      { name: 'Heavy Farmer Walks', sets: '4', reps: '45 sec' },
      { name: 'Ab Wheel Rollouts', sets: '3', reps: '12' },
      { name: 'Hyperextensions', sets: '3', reps: '15' },
      { name: 'Hanging Leg Raises', sets: '3', reps: '12' }
    ],
    proTip: "Deadlifts are a push and a pull. Push the floor away with your legs, then pull with your back."
  },
  {
    day: 18, title: "Aesthetic Shoulders & Arms", intro: "The details matter. Cap the shoulders, swell the arms.",
    exercises: [
      { name: 'Upright Rows (Cable or Barbell)', sets: '4', reps: '10' },
      { name: 'Lateral Raises (Drop Set)', sets: '3', reps: '10 + 10' },
      { name: 'Barbell Bicep Curls', sets: '4', reps: '10' },
      { name: 'Tricep Pushdowns', sets: '4', reps: '12' },
      { name: 'Face Pulls', sets: '4', reps: '15' }
    ],
    proTip: "For 3D shoulders, don't neglect the rear delts. They pull your posture back and make your shoulders look wider."
  },

  // PHASE 4: HYPERTROPHY (Muscle Growth Focus)
  {
    day: 19, title: "Hypertrophy Push", intro: "Time under tension. Slow down the reps, feel the burn.",
    exercises: [
      { name: 'Dumbbell Bench Press', sets: '4', reps: '10-12' },
      { name: 'Incline Dumbbell Flyes', sets: '3', reps: '12' },
      { name: 'Lateral Raises', sets: '4', reps: '15' },
      { name: 'Overhead Dumbbell Extension', sets: '3', reps: '12' },
      { name: 'Diamond Push-ups', sets: '3', reps: 'To Failure' }
    ],
    proTip: "Hypertrophy means time under tension. Slow down the eccentric (lowering) phase to 3 seconds per rep."
  },
  {
    day: 20, title: "Hypertrophy Pull", intro: "Stretch and squeeze. Build the wings.",
    exercises: [
      { name: 'Wide Grip Lat Pulldowns', sets: '4', reps: '12' },
      { name: 'Seated Cable Rows', sets: '4', reps: '12' },
      { name: 'Straight Arm Pulldowns', sets: '3', reps: '15' },
      { name: 'Concentration Curls', sets: '3', reps: '12/arm' },
      { name: 'Reverse Curls', sets: '3', reps: '12' }
    ],
    proTip: "On cable rows, let your shoulder blades stretch forward at the bottom, then pinch them together at the top."
  },
  {
    day: 21, title: "Hypertrophy Legs", intro: "Machines and isolation to carve out the leg definition.",
    exercises: [
      { name: 'Hack Squats (or Goblet Squats)', sets: '4', reps: '12' },
      { name: 'Leg Press', sets: '4', reps: '15' },
      { name: 'Leg Extensions', sets: '3', reps: '15' },
      { name: 'Lying Hamstring Curls', sets: '3', reps: '15' },
      { name: 'Calf Raises on Leg Press', sets: '4', reps: '20' }
    ],
    proTip: "Don't rush machine work. Pause for a split second at the peak contraction of your leg extensions and curls."
  },
  {
    day: 22, title: "Calisthenics Flow", intro: "Connecting movements. Strength meets grace.",
    exercises: [
      { name: 'Muscle-ups (or Explosive Pull-ups)', sets: '4', reps: 'Max' },
      { name: 'Typewriter Pull-ups', sets: '3', reps: '8' },
      { name: 'Pseudo Planche Push-ups', sets: '4', reps: '10' },
      { name: 'Dragon Flags', sets: '3', reps: '8' },
      { name: 'L-Sit to Tuck Planche', sets: '3', reps: '5 transitions' }
    ],
    proTip: "Flow requires smooth transitions. Focus on the movement between the exercises, not just the exercises themselves."
  },
  {
    day: 23, title: "Weak Point Training", intro: "Attack the muscles you usually ignore.",
    exercises: [
      { name: 'Rear Delt Machine Flyes', sets: '4', reps: '15' },
      { name: 'Standing Calf Raises (Slow)', sets: '4', reps: '20' },
      { name: 'Forearm Wrist Curls', sets: '3', reps: '15' },
      { name: 'Dumbbell Shrugs', sets: '4', reps: '12' },
      { name: 'Neck Extensions (Plate)', sets: '3', reps: '15' }
    ],
    proTip: "Identify your weakest link and attack it first. Don't hide from the exercises you suck at."
  },
  {
    day: 24, title: "Full Body Conditioning", intro: "Lungs burning, sweat pouring. Pure grit.",
    exercises: [
      { name: 'Burpees', sets: '4', reps: '20' },
      { name: 'Kettlebell Swings', sets: '4', reps: '15' },
      { name: 'Battle Ropes', sets: '4', reps: '30 sec' },
      { name: 'Sled Push (or Treadmill Push)', sets: '4', reps: '20 meters' },
      { name: 'Plank', sets: '3', reps: 'Max Time' }
    ],
    proTip: "Conditioning is about heart rate. If you can hold a conversation, you aren't working hard enough."
  },

  // PHASE 5: THE FINAL STRETCH
  {
    day: 25, title: "The Aesthetic Chest", intro: "Upper chest focus for that armor-plate look.",
    exercises: [
      { name: 'Heavy Incline Barbell Bench', sets: '4', reps: '6' },
      { name: 'Weighted Dips', sets: '4', reps: '8' },
      { name: 'High-to-Low Cable Crossovers', sets: '4', reps: '12' },
      { name: 'Deficit Push-ups (Hands on plates)', sets: '3', reps: 'To Failure' },
      { name: 'Incline Dumbbell Flyes', sets: '3', reps: '12' }
    ],
    proTip: "If you have anything left in the tank after this workout, you didn't train hard enough."
  },
  {
    day: 26, title: "The V-Taper Back", intro: "Wide lats, thick traps. The superhero back.",
    exercises: [
      { name: 'Weighted Pull-ups', sets: '4', reps: '6' },
      { name: 'Heavy Barbell Rows', sets: '4', reps: '8' },
      { name: 'V-Grip Lat Pulldowns', sets: '3', reps: '12' },
      { name: 'Face Pulls', sets: '4', reps: '15' },
      { name: 'Straight Arm Pulldowns', sets: '3', reps: '15' }
    ],
    proTip: "The V-taper is built from wide lats and a tight waist. Stretch the lats fully at the top of every rep."
  },
  {
    day: 27, title: "Tree Trunk Legs", intro: "Heavy, deep, and brutal.",
    exercises: [
      { name: 'Heavy Back Squats', sets: '4', reps: '5' },
      { name: 'Heavy Bulgarian Split Squats', sets: '3', reps: '8/leg' },
      { name: 'Romanian Deadlifts (RDLs)', sets: '4', reps: '8' },
      { name: 'Leg Press', sets: '3', reps: '12' },
      { name: 'Calf Raises', sets: '4', reps: '15' }
    ],
    proTip: "Tree trunk legs require heavy weight and deep ranges of motion. Ass to grass."
  },
  {
    day: 28, title: "3D Shoulders & Arms", intro: "Pump the arms, cap the delts.",
    exercises: [
      { name: 'Overhead Press', sets: '4', reps: '6' },
      { name: 'Lateral Raises', sets: '5', reps: '15' },
      { name: 'Superset: Skullcrushers & Barbell Curls', sets: '4', reps: '10 each' },
      { name: 'Superset: Tricep Pushdowns & Hammer Curls', sets: '3', reps: '12 each' },
      { name: 'Reverse Pec Deck', sets: '4', reps: '15' }
    ],
    proTip: "When doing arm supersets, move immediately from biceps to triceps with zero rest."
  },
  {
    day: 29, title: "The Final Hybrid", intro: "The ultimate blend of iron and gravity.",
    exercises: [
      { name: 'Muscle-ups (or heavy weighted pull-ups)', sets: '4', reps: 'Max' },
      { name: 'Heavy Deadlifts', sets: '4', reps: '5' },
      { name: 'Ring Dips', sets: '4', reps: '10' },
      { name: 'Pistol Squats', sets: '3', reps: '8/leg' },
      { name: 'Hanging Leg Raises', sets: '3', reps: '15' }
    ],
    proTip: "This is the culmination of your hybrid training. Blend the raw strength with the bodyweight control seamlessly."
  },
  {
    day: 30, title: "The Ultimate Test", intro: "Test your 1 Rep Maxes and max bodyweight reps. See how far you've come.",
    exercises: [
      { name: 'Bench Press (1 Rep Max Test)', sets: 'Work up to 1RM', reps: '1' },
      { name: 'Squat (1 Rep Max Test)', sets: 'Work up to 1RM', reps: '1' },
      { name: 'Max Pull-ups (Strict)', sets: '1', reps: 'To Failure' },
      { name: 'Max Push-ups (Strict)', sets: '1', reps: 'To Failure' },
      { name: 'Plank Hold', sets: '1', reps: 'Max Time' }
    ],
    proTip: "The final test. Empty the tank. Prove to yourself that the last 29 days meant something."
  }
];

const restDaysData = [
  {
    title: 'Rest Day 1: The Mindset of Iron',
    content: (
      <>
        <h3 className="text-2xl font-bold text-white">The Mindset of Iron</h3>
        <p className="text-lg text-zinc-300 leading-relaxed">
          A young man once walked into a gym, skinny and insecure. He looked at the massive weights and felt defeated before he even began. An older lifter saw him and said, "The iron doesn't care about your feelings. It only respects effort."
        </p>
        <p className="text-lg text-zinc-300 leading-relaxed">
          That young man realized that his body was merely a reflection of his mind. If his mind was weak, his body would remain weak. He started lifting not just to build muscle, but to forge discipline.
        </p>
        <p className="text-lg text-zinc-300 leading-relaxed font-bold text-white mt-6">
          Today is a rest day for your body, but not your mind. Hydrate, stretch, and prepare for tomorrow. The iron is waiting.
        </p>
      </>
    )
  },
  {
    title: 'Rest Day 2: Embrace the Suck',
    content: (
      <>
        <h3 className="text-2xl font-bold text-white">Embrace the Suck</h3>
        <p className="text-lg text-zinc-300 leading-relaxed">
          By now, you are sore. Your motivation is probably dipping. This is the exact moment where 90% of guys quit. They look for an excuse. "I'm too tired," "I'll go tomorrow."
        </p>
        <p className="text-lg text-zinc-300 leading-relaxed">
          Growth only happens in the zone of discomfort. When you embrace the pain, when you learn to love the soreness because it signifies progress, you become unstoppable.
        </p>
        <p className="text-lg text-zinc-300 leading-relaxed font-bold text-white mt-6">
          Eat your protein. Drink a gallon of water. Stretch your tight muscles. We go to war again tomorrow.
        </p>
      </>
    )
  },
  {
    title: 'Rest Day 3: The Mirror Never Lies',
    content: (
      <>
        <h3 className="text-2xl font-bold text-white">The Mirror Never Lies</h3>
        <p className="text-lg text-zinc-300 leading-relaxed">
          You can lie to your friends. You can lie to your family. You can even lie to yourself on social media. But you cannot lie to the mirror.
        </p>
        <p className="text-lg text-zinc-300 leading-relaxed">
          The mirror reflects exactly what you have put in. Every skipped meal, every missed rep, every compromise shows up. But so does every drop of sweat, every heavy set, and every disciplined choice.
        </p>
        <p className="text-lg text-zinc-300 leading-relaxed font-bold text-white mt-6">
          You are halfway through. Look in the mirror today. Acknowledge the changes. Then demand more from yourself.
        </p>
      </>
    )
  },
  {
    title: 'Rest Day 4: The Separation Season',
    content: (
      <>
        <h3 className="text-2xl font-bold text-white">The Separation Season</h3>
        <p className="text-lg text-zinc-300 leading-relaxed">
          This is where you separate yourself from the pack. The initial excitement is gone. It's just you, the routine, and the daily grind.
        </p>
        <p className="text-lg text-zinc-300 leading-relaxed">
          Champions are not made when the cameras are rolling or when motivation is high. They are made in the dark, early mornings, when no one is watching, and when they'd rather be sleeping.
        </p>
        <p className="text-lg text-zinc-300 leading-relaxed font-bold text-white mt-6">
          Stay focused. The finish line is approaching, but the work is not done.
        </p>
      </>
    )
  },
  {
    title: 'Rest Day 5: The Calm Before The End',
    content: (
      <>
        <h3 className="text-2xl font-bold text-white">The Calm Before The End</h3>
        <p className="text-lg text-zinc-300 leading-relaxed">
          You have survived. Your body is harder, your mind is sharper, and your discipline is forged in iron.
        </p>
        <p className="text-lg text-zinc-300 leading-relaxed">
          Take today to reflect on Day 1. Remember how heavy the weights felt? Remember how quickly you wanted to quit? Look at yourself now. You are a different breed.
        </p>
        <p className="text-lg text-zinc-300 leading-relaxed font-bold text-white mt-6">
          Rest up. Tomorrow is the final test.
        </p>
      </>
    )
  }
];

// Build the pages array dynamically
const generatePages = (): EbookPage[] => {
  const pages: EbookPage[] = [
    {
      id: 'cover', section: 'Front Section', title: 'Cover',
      content: (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-8">
          <h4 className="text-amber-500 tracking-widest uppercase text-sm font-bold">Premium Fitness Guide</h4>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-tight">
            The Aesthetic <br />
            <span className="text-amber-500">Body Blueprint</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-lg mx-auto font-light">
            30-Day Hybrid Transformation
          </p>
          <div className="pt-12">
            <p className="text-zinc-500 text-sm uppercase tracking-widest">By Mohamed Kazan</p>
          </div>
        </div>
      )
    },
    {
      id: 'intro', section: 'Front Section', title: 'Introduction',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-amber-500">The Awakening</h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            Look in the mirror. Are you satisfied with the reflection staring back at you? If you are reading this, the answer is no. You are tired of being average. You are tired of feeling weak, looking soft, and blending into the background.
          </p>
          <p className="text-lg text-zinc-300 leading-relaxed">
            This is not a generic fitness guide. This is a blueprint for physical and mental transformation. Over the next 30 days, you will break down your current self and forge an aesthetic, powerful, and functional physique. 
          </p>
          <p className="text-lg text-zinc-300 leading-relaxed">
            We don't just build muscle here. We build discipline. We build respect. Welcome to the Aesthetic Body Blueprint.
          </p>
        </div>
      )
    },
    {
      id: 'who-is-this-for', section: 'Front Section', title: 'Who is this for?',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-amber-500">Who is this for?</h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            This program is designed specifically for young men (16–25) who are ready to stop making excuses. 
          </p>
          <ul className="space-y-4 mt-6">
            <li className="flex items-start">
              <span className="text-amber-500 mr-3">✓</span>
              <span className="text-zinc-300">You want a V-taper: broad shoulders, a wide back, and a tight waist.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-3">✓</span>
              <span className="text-zinc-300">You want functional strength, not just puffy gym muscles.</span>
            </li>
            <li className="flex items-start">
              <span className="text-amber-500 mr-3">✓</span>
              <span className="text-zinc-300">You are willing to put in the work, push through the pain, and stay consistent.</span>
            </li>
          </ul>
          <p className="text-lg text-zinc-300 leading-relaxed mt-6">
            If you are looking for a magic pill or a 5-minute shortcut, close this book now. This requires sweat, iron, and gravity.
          </p>
        </div>
      )
    },
    {
      id: 'how-to-use', section: 'Front Section', title: 'How to use this program',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-amber-500">The Rules of Engagement</h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            This blueprint consists of 30 daily workouts and 5 dedicated rest/mindset days. Totaling a 35-day journey.
          </p>
          <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800 mt-6">
            <h3 className="text-xl font-bold text-white mb-4">The Directives:</h3>
            <ol className="list-decimal list-inside space-y-3 text-zinc-300">
              <li><strong>Progressive Overload:</strong> You must push harder than last time. Add a rep, add some weight, or improve your form.</li>
              <li><strong>No Skipped Days:</strong> Follow the schedule exactly as written. Rest days are for recovery, not laziness.</li>
              <li><strong>Track Everything:</strong> Keep a log of your sets, reps, and weights. What gets measured gets managed.</li>
              <li><strong>Form Over Ego:</strong> A sloppy pull-up is worth nothing. Control the eccentric (lowering) portion of every movement.</li>
            </ol>
          </div>
        </div>
      )
    },
    {
      id: 'why-hybrid', section: 'Front Section', title: 'Why Hybrid Training?',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-amber-500">The Best of Both Worlds</h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            Most guys fall into one of two traps: they either become bulky meatheads who can't touch their toes, or skinny calisthenics guys with no leg mass.
          </p>
          <p className="text-lg text-zinc-300 leading-relaxed">
            <strong>Hybrid Training</strong> combines the raw muscle-building power of weightlifting with the functional, body-control mastery of calisthenics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold text-white mb-2">Weights (The Gym)</h3>
              <p className="text-zinc-400">Isolates muscles, builds raw size, and develops heavy lower-body power (squats, deadlifts).</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold text-white mb-2">Calisthenics (Bodyweight)</h3>
              <p className="text-zinc-400">Builds a dense, shredded upper body, incredible core strength, and absolute body control.</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  // Insert workouts and rest days
  for (let i = 0; i < 30; i++) {
    const workout = workoutsData[i];
    
    pages.push({
      id: `day-${workout.day}`,
      section: '30-Day Program',
      title: `Day ${workout.day}: ${workout.title}`,
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-amber-500">Day {workout.day}</h2>
          <p className="text-lg text-zinc-300 italic border-l-4 border-amber-500 pl-4">
            {workout.intro}
          </p>
          
          <div className="space-y-4 mt-8">
            {workout.exercises.map((ex, idx) => (
              <div key={idx} className="flex justify-between items-center bg-zinc-900 p-4 rounded border border-zinc-800">
                <span className="font-bold text-white">{ex.name}</span>
                <span className="text-amber-500 font-mono">{ex.sets} x {ex.reps}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-[#1a1000] border border-[#332000] p-4 rounded-lg">
            <p className="text-amber-400 text-sm font-bold uppercase tracking-wider mb-1">Pro Tip</p>
            <p className="text-zinc-300">{workout.proTip}</p>
          </div>
        </div>
      )
    });

    // Add a rest day every 6 days
    if ((i + 1) % 6 === 0) {
      const restDayIndex = ((i + 1) / 6) - 1;
      const restDay = restDaysData[restDayIndex];
      pages.push({
        id: `rest-${restDayIndex + 1}`,
        section: 'Rest Days',
        title: restDay.title,
        content: (
          <div className="space-y-6">
            <h2 className="text-3xl font-bold uppercase tracking-tight text-amber-500">
              Rest Day {(restDayIndex + 1)}
            </h2>
            {restDay.content}
          </div>
        )
      });
    }
  }

  // Add back matter
  pages.push(
    {
      id: 'nutrition', section: 'Nutrition Section', title: 'The Fuel (Nutrition)',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-amber-500">Simple Diet Strategy</h2>
          <p className="text-lg text-zinc-300 leading-relaxed">
            You cannot out-train a bad diet. If you want to look aesthetic, you need to feed the muscle and starve the fat. No complicated diets, just simple rules.
          </p>
          
          <div className="grid grid-cols-1 gap-6 mt-6">
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold text-white mb-2">1. Protein is King</h3>
              <p className="text-zinc-400">Aim for 1 gram of protein per pound of body weight. Chicken, beef, eggs, fish, and whey protein. Non-negotiable.</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold text-white mb-2">2. Calories (Bulk vs Cut)</h3>
              <p className="text-zinc-400">Skinny? Eat in a 300-500 calorie surplus. Fat? Eat in a 300-500 calorie deficit. Use an online TDEE calculator to find your maintenance.</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-lg border border-zinc-800">
              <h3 className="text-xl font-bold text-white mb-2">3. Hydration</h3>
              <p className="text-zinc-400">Drink 1 gallon (3.7 liters) of water every single day. Muscles are 70% water. Dehydration kills performance and aesthetics.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'mistakes', section: 'Mistakes Section', title: 'Common Beginner Mistakes',
      content: (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold uppercase tracking-tight text-amber-500">Avoid These Traps</h2>
          <ul className="space-y-6 mt-6">
            <li className="bg-zinc-900 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-white mb-2">Ego Lifting</h3>
              <p className="text-zinc-400">Swinging heavy weights with terrible form to impress people who don't care. Drop the weight, control the eccentric, and actually build muscle.</p>
            </li>
            <li className="bg-zinc-900 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-white mb-2">Program Hopping</h3>
              <p className="text-zinc-400">Changing your workout routine every week because you saw a new TikTok video. Stick to the blueprint. Consistency beats novelty.</p>
            </li>
            <li className="bg-zinc-900 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-white mb-2">Ignoring Sleep</h3>
              <p className="text-zinc-400">You don't grow in the gym. You grow in bed. If you are sleeping 4 hours a night, you are destroying your testosterone and your gains.</p>
            </li>
          </ul>
        </div>
      )
    },
    {
      id: 'outro', section: 'Final Page', title: 'The Beginning',
      content: (
        <div className="space-y-8 text-center py-12">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-white">This is not the end.</h2>
          <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            30 days is just the prologue. You have built the foundation. You have proven to yourself that you have the discipline to follow through.
          </p>
          <p className="text-xl text-zinc-300 leading-relaxed max-w-2xl mx-auto">
            The aesthetic physique is a lifelong pursuit. It is a daily choice to be better than yesterday. Keep pushing. Keep lifting. Keep growing.
          </p>
          <div className="pt-12">
            <h3 className="text-3xl font-bold text-amber-500 uppercase tracking-widest">Stay Aesthetic.</h3>
          </div>
        </div>
      )
    }
  );

  return pages;
};

export const ebookPages = generatePages();
export const sections = Array.from(new Set(ebookPages.map(p => p.section)));
