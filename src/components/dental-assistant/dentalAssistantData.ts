export interface DentalProblem {
  id: string;
  label: string;
  icon: string;
  questions: string[];
  advice: {
    cause: string;
    tips: string[];
    duration: string;
    warning: string;
  };
}

export const dentalProblems: DentalProblem[] = [
  {
    id: "yellow-teeth",
    label: "Yellow Teeth",
    icon: "😬",
    questions: [
      "Since how long are your teeth yellow?",
      "Do you smoke or drink tea/coffee daily?",
      "Do you brush twice a day?",
      "Is the color light yellow or dark brown?",
    ],
    advice: {
      cause: "This may be due to coffee, tea, smoking, or irregular brushing habits.",
      tips: [
        "Brush twice daily with whitening toothpaste",
        "Rinse mouth after tea/coffee",
        "Avoid tobacco products",
        "Drink more water throughout the day",
        "Clean your tongue daily",
      ],
      duration: "Visible improvement in 7–14 days",
      warning: "If color is dark or does not improve, visit a dentist for professional scaling.",
    },
  },
  {
    id: "bad-breath",
    label: "Bad Mouth Smell",
    icon: "😮‍💨",
    questions: [
      "Is the smell constant or only in the morning?",
      "Do your gums bleed when brushing?",
      "Do you clean your tongue regularly?",
      "Do you have any stomach issues?",
    ],
    advice: {
      cause: "Bad breath is often caused by bacteria buildup on the tongue, gum disease, or digestive issues.",
      tips: [
        "Clean your tongue with a scraper every morning",
        "Use an antibacterial mouthwash",
        "Brush and floss twice daily",
        "Stay hydrated — drink plenty of water",
        "Avoid strong-smelling foods like garlic and onion",
      ],
      duration: "Improvement may be noticed within 5–7 days",
      warning: "If the smell persists after 7 days, please visit a dentist to rule out gum disease or cavities.",
    },
  },
  {
    id: "tooth-pain",
    label: "Tooth Pain",
    icon: "🦷",
    questions: [
      "Is the pain sharp or dull?",
      "Does it hurt while eating hot or cold food?",
      "Is there any swelling near the tooth?",
      "Since how many days have you had this pain?",
    ],
    advice: {
      cause: "Tooth pain can be caused by cavities, infection, cracked teeth, or gum problems.",
      tips: [
        "Rinse with warm salt water 2–3 times a day",
        "Avoid very hot or cold food and drinks",
        "Take an over-the-counter pain reliever if needed",
        "Apply a cold compress on the cheek for swelling",
        "Avoid chewing on the painful side",
      ],
      duration: "Pain relief may take 2–3 days with home care",
      warning: "If pain is severe, persistent, or accompanied by swelling or fever, see a dentist immediately.",
    },
  },
  {
    id: "bleeding-gums",
    label: "Bleeding Gums",
    icon: "🩸",
    questions: [
      "Do your gums bleed while brushing or flossing?",
      "Are your gums red, swollen, or tender?",
      "How often do you floss?",
      "Have you noticed any bad breath along with bleeding?",
    ],
    advice: {
      cause: "Bleeding gums are usually caused by plaque buildup, gingivitis, or using a hard-bristle toothbrush.",
      tips: [
        "Switch to a soft-bristle toothbrush",
        "Brush gently in circular motions, not aggressively",
        "Floss daily to remove plaque between teeth",
        "Rinse with warm salt water twice a day",
        "Eat vitamin C–rich foods like oranges and guavas",
      ],
      duration: "Improvement may be seen in 5–7 days",
      warning: "If bleeding continues beyond a week, visit a dentist for a gum health check.",
    },
  },
  {
    id: "sensitive-teeth",
    label: "Sensitive Teeth",
    icon: "❄️",
    questions: [
      "Do you feel pain with hot, cold, or sweet food?",
      "Do you brush too hard or use a hard toothbrush?",
      "Have you recently had any dental treatment?",
      "Is the sensitivity in one tooth or multiple teeth?",
    ],
    advice: {
      cause: "Sensitivity occurs when tooth enamel wears down or gums recede, exposing the inner layer of the tooth.",
      tips: [
        "Use a sensitivity toothpaste (e.g., Sensodyne)",
        "Avoid acidic foods and drinks like citrus and soda",
        "Use a soft-bristle toothbrush",
        "Don't brush too hard — use gentle strokes",
        "Avoid extremely hot or cold foods temporarily",
      ],
      duration: "Relief may begin within 1–2 weeks of using sensitivity toothpaste",
      warning: "If sensitivity is severe or sudden, see a dentist to check for cracks or decay.",
    },
  },
  {
    id: "swollen-gums",
    label: "Swollen Gums",
    icon: "🔴",
    questions: [
      "Is the swelling near a specific tooth or across the gums?",
      "Is there any pain or tenderness?",
      "Do you have difficulty eating or chewing?",
      "Have you noticed any pus or discharge?",
    ],
    advice: {
      cause: "Swollen gums can result from infection, trapped food, gingivitis, or an abscessed tooth.",
      tips: [
        "Rinse with warm salt water 3 times a day",
        "Apply a cold compress on the outside of the cheek",
        "Brush gently around the swollen area",
        "Avoid spicy and hard foods",
        "Stay hydrated and maintain oral hygiene",
      ],
      duration: "Mild swelling may reduce in 3–5 days",
      warning: "If swelling worsens, spreads to the face, or is accompanied by fever, visit a dentist urgently.",
    },
  },
  {
    id: "loose-tooth",
    label: "Loose Tooth",
    icon: "🪥",
    questions: [
      "Is the loose tooth a baby tooth or a permanent tooth?",
      "Did you experience any injury or trauma?",
      "Do your gums bleed or feel tender around it?",
      "Have you noticed the tooth moving more over time?",
    ],
    advice: {
      cause: "A loose permanent tooth may be caused by gum disease, injury, teeth grinding, or bone loss.",
      tips: [
        "Avoid wiggling or touching the loose tooth",
        "Eat soft foods to reduce pressure on the tooth",
        "Maintain gentle brushing and flossing",
        "Rinse with salt water to keep the area clean",
        "Avoid hard, crunchy, or sticky foods",
      ],
      duration: "This requires professional evaluation — home care is temporary",
      warning: "Please visit a dentist as soon as possible. A loose permanent tooth needs professional treatment to prevent tooth loss.",
    },
  },
];

export const questionOptions: Record<string, string[][]> = {
  "yellow-teeth": [
    ["Less than a month", "1–6 months", "More than 6 months", "Since childhood"],
    ["Yes, daily", "Occasionally", "No"],
    ["Yes, twice a day", "Only once", "Not regularly"],
    ["Light yellow", "Dark yellow", "Brown/stained"],
  ],
  "bad-breath": [
    ["Only in the morning", "Throughout the day", "After eating"],
    ["Yes", "Sometimes", "No"],
    ["Yes, daily", "Sometimes", "No"],
    ["Yes", "No", "Not sure"],
  ],
  "tooth-pain": [
    ["Sharp and sudden", "Dull and constant", "Throbbing"],
    ["Yes, with hot food", "Yes, with cold food", "Both", "No"],
    ["Yes", "Slight swelling", "No"],
    ["1–2 days", "3–7 days", "More than a week"],
  ],
  "bleeding-gums": [
    ["While brushing", "While flossing", "Randomly", "Both brushing & flossing"],
    ["Yes, red and swollen", "Slightly tender", "No, they look normal"],
    ["Daily", "Sometimes", "Never"],
    ["Yes", "No"],
  ],
  "sensitive-teeth": [
    ["Hot food", "Cold food", "Sweet food", "All of the above"],
    ["Yes", "No", "Not sure"],
    ["Yes", "No"],
    ["One tooth", "A few teeth", "All teeth"],
  ],
  "swollen-gums": [
    ["Near one tooth", "Across the gums", "One side of the mouth"],
    ["Yes, painful", "Mild tenderness", "No pain"],
    ["Yes", "Slight difficulty", "No"],
    ["Yes", "No"],
  ],
  "loose-tooth": [
    ["Baby tooth", "Permanent tooth", "Not sure"],
    ["Yes, recent injury", "Yes, old injury", "No injury"],
    ["Yes", "Sometimes", "No"],
    ["Yes, getting worse", "It's been the same", "Just noticed it"],
  ],
};
