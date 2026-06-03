// === 1. THE 72 GENDERS DATABASE ===
const GENDERS = {
  // --- Binary Alignments (13) ---
  "Cisgender": {
    category: "Binary Alignments",
    definition: "Individuals whose internal gender identity aligns with the physical sex assigned to them at birth. Represents standard biological and psychological congruence.",
    colorTheme: "static",
    vector: [50, 50, 5, 5, 5, 5, 5, 98]
  },
  "Cis Male": {
    category: "Binary Alignments",
    definition: "An individual assigned male at birth who experiences psychological and somatic congruence with a stable male sex-role and identity.",
    colorTheme: "static",
    vector: [95, 5, 5, 5, 5, 5, 5, 98]
  },
  "Cis Female": {
    category: "Binary Alignments",
    definition: "An individual assigned female at birth who experiences psychological and somatic congruence with a stable female sex-role and identity.",
    colorTheme: "static",
    vector: [5, 95, 5, 5, 5, 5, 5, 98]
  },
  "Cis Man": {
    category: "Binary Alignments",
    definition: "An adult male who experiences deep internal comfort, recognition, and somatic alignment with the male sex assigned to him at birth.",
    colorTheme: "static",
    vector: [95, 5, 5, 5, 5, 5, 5, 98]
  },
  "Cis Woman": {
    category: "Binary Alignments",
    definition: "An adult female who experiences deep internal comfort, recognition, and somatic alignment with the female sex assigned to her at birth.",
    colorTheme: "static",
    vector: [5, 95, 5, 5, 5, 5, 5, 98]
  },
  "Transgender": {
    category: "Binary Alignments",
    definition: "A formal psychological term for individuals whose internal gender identity or expression departs from standard expectations associated with birth sex assignment.",
    colorTheme: "context",
    vector: [45, 45, 20, 15, 15, 10, 50, 2]
  },
  "Trans Male": {
    category: "Binary Alignments",
    definition: "A transgender individual who identifies as male, transitioning away from an assigned female birth sex.",
    colorTheme: "context",
    vector: [90, 5, 10, 10, 10, 5, 50, 2]
  },
  "Trans Female": {
    category: "Binary Alignments",
    definition: "A transgender individual who identifies as female, transitioning away from an assigned male birth sex.",
    colorTheme: "context",
    vector: [5, 90, 10, 10, 10, 5, 50, 2]
  },
  "Trans Man": {
    category: "Binary Alignments",
    definition: "An adult male who was assigned female at birth and transitioned to align physical body characteristics and social presentation with a male identity.",
    colorTheme: "context",
    vector: [92, 5, 5, 5, 5, 5, 45, 2]
  },
  "Trans Woman": {
    category: "Binary Alignments",
    definition: "An adult female who was assigned male at birth and transitioned to align physical body characteristics and social presentation with a female identity.",
    colorTheme: "context",
    vector: [5, 92, 5, 5, 5, 5, 45, 2]
  },
  "Female to Male": {
    category: "Binary Alignments",
    definition: "A transmasculine transition pathway (commonly abbreviated FTM) oriented toward alignment with male sex-roles, social presentation, and somatic attributes.",
    colorTheme: "context",
    vector: [85, 10, 10, 15, 15, 5, 40, 5]
  },
  "Male to Female": {
    category: "Binary Alignments",
    definition: "A transfeminine transition pathway (commonly abbreviated MTF) oriented toward alignment with female sex-roles, social presentation, and somatic attributes.",
    colorTheme: "context",
    vector: [10, 85, 10, 15, 15, 5, 40, 5]
  },
  "Transsexual": {
    category: "Binary Alignments",
    definition: "A medical and diagnostic classification describing individuals who seek or undergo hormonal and surgical transitions to permanently align body sex characteristics with internal identity.",
    colorTheme: "context",
    vector: [45, 45, 10, 10, 10, 5, 45, 2]
  },

  // --- Non-Binary (Static) (18) ---
  "Androgyne": {
    category: "Non-Binary (Static)",
    definition: "A static non-binary identity characterized by a balanced internalization of both masculine and feminine energies, which co-exist in equilibrium.",
    colorTheme: "static",
    vector: [60, 60, 10, 10, 10, 5, 20, 20]
  },
  "Non-binary": {
    category: "Non-Binary (Static)",
    definition: "A stable identity existing completely outside the traditional male/female binary. Represents positive non-binary gender alignments.",
    colorTheme: "static",
    vector: [40, 40, 50, 20, 20, 15, 50, 15]
  },
  "Genderqueer": {
    category: "Non-Binary (Static)",
    definition: "An identity that consciously rejects standard gender divisions. It blends and queries conventional categories, remaining relatively stable over time.",
    colorTheme: "static",
    vector: [45, 45, 35, 30, 25, 20, 70, 15]
  },
  "Gender Nonconforming": {
    category: "Non-Binary (Static)",
    definition: "Behaviors, social expressions, or self-categorizations that actively depart from binary cultural expectations relative to one's sex assigned at birth.",
    colorTheme: "defiant",
    vector: [40, 40, 20, 15, 15, 10, 75, 50]
  },
  "Gender Variant": {
    category: "Non-Binary (Static)",
    definition: "A clinical designation for gender expressions or internal identities that show significant developmental variance from major societal baselines.",
    colorTheme: "static",
    vector: [45, 45, 25, 25, 25, 15, 60, 20]
  },
  "Gender Questioning": {
    category: "Non-Binary (Static)",
    definition: "An active cognitive state of exploring, investigating, and evaluating one's own internal gender identity and comfort levels.",
    colorTheme: "static",
    vector: [40, 40, 40, 40, 40, 20, 40, 30]
  },
  "Intersex": {
    category: "Non-Binary (Static)",
    definition: "A biological variance in sexual anatomy or genetics that intersects with, and informs, specialized non-binary gender identities.",
    colorTheme: "context",
    vector: [40, 40, 30, 15, 15, 10, 35, 50]
  },
  "Demiboy": {
    category: "Non-Binary (Static)",
    definition: "A static partial connection to masculinity, while the remaining portion of the self is neutral, agender, or empty.",
    colorTheme: "static",
    vector: [55, 5, 50, 10, 10, 10, 30, 25]
  },
  "Demigirl": {
    category: "Non-Binary (Static)",
    definition: "A static partial connection to femininity, while the remaining portion of the self is neutral, agender, or empty.",
    colorTheme: "static",
    vector: [5, 55, 50, 10, 10, 10, 30, 25]
  },
  "Deminonbinary": {
    category: "Non-Binary (Static)",
    definition: "A static partial connection to a non-binary gender alignment, while the remaining self feels agender, empty, or neutral.",
    colorTheme: "static",
    vector: [25, 25, 50, 15, 15, 15, 40, 20]
  },
  "Bigender": {
    category: "Non-Binary (Static)",
    definition: "Possessing two distinct gender identities simultaneously, locked in place without shifting (e.g. feeling both male and female at once).",
    colorTheme: "static",
    vector: [80, 80, 5, 30, 20, 5, 30, 15]
  },
  "Trigender": {
    category: "Non-Binary (Static)",
    definition: "Possessing three distinct gender identities simultaneously, locked in place (typically male, female, and neutral/agender).",
    colorTheme: "static",
    vector: [70, 70, 50, 25, 20, 10, 35, 15]
  },
  "Pangender": {
    category: "Non-Binary (Static)",
    definition: "An expansive static identity characterized by the experience of countless genders, or all possible genders simultaneously.",
    colorTheme: "static",
    vector: [85, 85, 10, 30, 30, 20, 40, 10]
  },
  "Multi-gender": {
    category: "Non-Binary (Static)",
    definition: "An umbrella identity for individuals who experience more than one gender identity at the same time, or in close overlap.",
    colorTheme: "static",
    vector: [70, 70, 15, 20, 20, 15, 40, 15]
  },
  "Polygender": {
    category: "Non-Binary (Static)",
    definition: "Experiencing multiple distinct genders, representing a rich internal landscape of diverse gender nodes.",
    colorTheme: "static",
    vector: [75, 75, 15, 25, 25, 20, 45, 15]
  },
  "Omnigender": {
    category: "Non-Binary (Static)",
    definition: "Possessing and experiencing all genders on the human spectrum simultaneously, with high overall intensity.",
    colorTheme: "static",
    vector: [90, 90, 10, 25, 25, 25, 45, 10]
  },
  "Ceterogender": {
    category: "Non-Binary (Static)",
    definition: "A non-binary gender identity characterized by a positive, non-binary gender presence that has masculine or feminine energy.",
    colorTheme: "static",
    vector: [20, 20, 60, 15, 15, 30, 50, 15]
  },
  "Maverique": {
    category: "Non-Binary (Static)",
    definition: "An autonomous, positive non-binary gender identity that is completely independent of male, female, or neutral concepts.",
    colorTheme: "static",
    vector: [10, 10, 40, 10, 10, 30, 80, 10]
  },

  // --- Non-Binary (Dynamic & Fluid) (11) ---
  "Gender Fluid": {
    category: "Non-Binary (Dynamic & Fluid)",
    definition: "The classic dynamic identity where one's gender moves smoothly and continuously between different points on the spectrum.",
    colorTheme: "dynamic",
    vector: [50, 50, 30, 95, 40, 15, 40, 15]
  },
  "Ceterofluid": {
    category: "Non-Binary (Dynamic & Fluid)",
    definition: "Fluidity restricted strictly within the non-binary, alternative, or neutral regions of the gender landscape.",
    colorTheme: "dynamic",
    vector: [15, 15, 60, 85, 35, 20, 50, 15]
  },
  "Femfluid": {
    category: "Non-Binary (Dynamic & Fluid)",
    definition: "Fluidity restricted strictly within feminine, female-aligned, or softer sectors of the gender spectrum.",
    colorTheme: "dynamic",
    vector: [5, 75, 30, 85, 35, 10, 40, 15]
  },
  "Alexigender": {
    category: "Non-Binary (Dynamic & Fluid)",
    definition: "Experiencing fluid shifts between multiple genders, but finding it cognitively impossible to isolate or name the specific states.",
    colorTheme: "dynamic",
    vector: [35, 35, 35, 80, 45, 25, 60, 15]
  },
  "Boyflux": {
    category: "Non-Binary (Dynamic & Fluid)",
    definition: "A dynamic gender where the identity remains masculine, but its internal intensity fluctuates between strongly male and agender.",
    colorTheme: "dynamic",
    vector: [70, 5, 40, 25, 80, 5, 30, 20]
  },
  "Girlflux": {
    category: "Non-Binary (Dynamic & Fluid)",
    definition: "A dynamic gender where the identity remains feminine, but its internal intensity fluctuates between strongly female and agender.",
    colorTheme: "dynamic",
    vector: [5, 70, 40, 25, 80, 5, 30, 20]
  },
  "Agenderflux": {
    category: "Non-Binary (Dynamic & Fluid)",
    definition: "Predominantly agender and null, but experiencing brief, low-intensity shifts into a specific gendered presence.",
    colorTheme: "null",
    vector: [5, 5, 85, 20, 75, 10, 50, 15]
  },
  "Genderflux": {
    category: "Non-Binary (Dynamic & Fluid)",
    definition: "A general state where the intensity of one's gender fluctuates over time, ranging from strongly gendered to genderless.",
    colorTheme: "dynamic",
    vector: [45, 45, 35, 30, 85, 10, 40, 15]
  },
  "Fluidflux": {
    category: "Non-Binary (Dynamic & Fluid)",
    definition: "A compound dynamic state where both the core gender identity type shifts and its intensity/volume fluctuates.",
    colorTheme: "dynamic",
    vector: [50, 50, 30, 85, 85, 15, 45, 15]
  },
  "Demifluid": {
    category: "Non-Binary (Dynamic & Fluid)",
    definition: "Having multiple gender components where some parts are permanently fixed, while other parts shift fluidly.",
    colorTheme: "dynamic",
    vector: [30, 30, 40, 60, 50, 15, 40, 20]
  },
  "Burstgender": {
    category: "Non-Binary (Dynamic & Fluid)",
    definition: "A dynamic signature where gender remains at a stable baseline, experiences a sudden massive spike, and immediately drops back.",
    colorTheme: "dynamic",
    vector: [40, 40, 30, 55, 90, 20, 50, 15]
  },

  // --- Agender & Nullity (9) ---
  "Agender": {
    category: "Agender & Nullity",
    definition: "A complete lack of gender identity. Experiencing oneself as genderless, neutral, or entirely outside gendered concepts.",
    colorTheme: "null",
    vector: [5, 5, 95, 5, 5, 5, 60, 10]
  },
  "Neutrois": {
    category: "Agender & Nullity",
    definition: "A state of active gender neutrality. It represents possessing a gender identity that is neutral (neither male nor female).",
    colorTheme: "null",
    vector: [10, 10, 85, 10, 10, 5, 50, 15]
  },
  "Nullgender": {
    category: "Agender & Nullity",
    definition: "Feeling your gender as an empty canvas, a literal blank space, or a featureless void within the self.",
    colorTheme: "null",
    vector: [0, 0, 95, 5, 5, 10, 65, 10]
  },
  "Gendervoid": {
    category: "Agender & Nullity",
    definition: "An active feeling of gender that is experienced specifically as a void, black hole, or empty space.",
    colorTheme: "null",
    vector: [0, 0, 98, 5, 5, 40, 70, 5]
  },
  "Anergender": {
    category: "Agender & Nullity",
    definition: "Having a gender experience that is defined by the absolute inability to feel or process gender identity.",
    colorTheme: "null",
    vector: [0, 0, 90, 5, 5, 10, 85, 20]
  },
  "Apogender": {
    category: "Agender & Nullity",
    definition: "Entirely separate from the concept of gender, feeling that the very framework of gender is inapplicable to the self.",
    colorTheme: "null",
    vector: [0, 0, 95, 5, 5, 10, 90, 10]
  },
  "Libragender": {
    category: "Agender & Nullity",
    definition: "Mostly agender and neutral, but possessing a tiny, subtle connection to a specific gendered presence.",
    colorTheme: "null",
    vector: [15, 15, 80, 10, 10, 10, 60, 15]
  },
  "Libraboy": {
    category: "Agender & Nullity",
    definition: "Predominantly agender and genderless (75-99%), but experiencing a small, lingering attachment to masculinity.",
    colorTheme: "null",
    vector: [30, 5, 75, 10, 10, 10, 50, 15]
  },
  "Libragirl": {
    category: "Agender & Nullity",
    definition: "Predominantly agender and genderless (75-99%), but experiencing a small, lingering attachment to femininity.",
    colorTheme: "null",
    vector: [5, 30, 75, 10, 10, 10, 50, 15]
  },

  // --- Xenogenders & Metaphorical (8) ---
  "Xenogender": {
    category: "Xenogenders & Metaphorical",
    definition: "A category of identities defined through abstract metaphors, nature, cosmic entities, or digital aesthetics rather than human genders.",
    colorTheme: "context",
    vector: [15, 15, 30, 25, 25, 95, 60, 10]
  },
  "Abimegender": {
    category: "Xenogenders & Metaphorical",
    definition: "A gender experience that feels profoundly deep, infinite, and vast, resembling an endless well or a conceptual abyss.",
    colorTheme: "context",
    vector: [20, 20, 45, 20, 20, 75, 65, 10]
  },
  "Caelgender": {
    category: "Xenogenders & Metaphorical",
    definition: "A cosmic identity deeply integrated with spatial properties, outer space vacuums, stars, or galaxies.",
    colorTheme: "context",
    vector: [10, 10, 30, 15, 15, 90, 55, 10]
  },
  "Colorgender": {
    category: "Xenogenders & Metaphorical",
    definition: "A color-mapped identity using colors (e.g. pastel pink, soft teal, dark blue) to conceptualize and articulate internal gender.",
    colorTheme: "context",
    vector: [15, 15, 25, 20, 20, 85, 60, 15]
  },
  "Biogender": {
    category: "Xenogenders & Metaphorical",
    definition: "A nature-aligned identity intimately connected to the biophysical world, natural ecosystems, flora, or fauna.",
    colorTheme: "context",
    vector: [15, 15, 20, 15, 15, 85, 50, 20]
  },
  "Esspigender": {
    category: "Xenogenders & Metaphorical",
    definition: "A spirit-aligned identity directly integrated with spectral spirits, ethereal entities, or metaphysical energy templates.",
    colorTheme: "context",
    vector: [20, 20, 30, 20, 20, 90, 55, 15]
  },
  "Glitchgender": {
    category: "Xenogenders & Metaphorical",
    definition: "An aesthetic micro-label where gender is felt as a digital glitch, computational error, or beautifully fragmented computer code.",
    colorTheme: "context",
    vector: [20, 20, 40, 65, 65, 85, 80, 8]
  },
  "Gendervague": {
    category: "Xenogenders & Metaphorical",
    definition: "An identity where the boundaries of gender are highly obscure, fuzzy, or depersonalized, frequently associated with neurodivergence.",
    colorTheme: "context",
    vector: [25, 25, 55, 30, 30, 40, 60, 20]
  },

  // --- Cultural & Historic Traditions (7) ---
  "Two-Spirit": {
    category: "Cultural & Historic Traditions",
    definition: "An Indigenous North American cultural gender role combining masculine and feminine spirits. Reserved strictly for Native cultures.",
    colorTheme: "context",
    vector: [75, 75, 10, 20, 20, 40, 30, 30]
  },
  "Hijra": {
    category: "Cultural & Historic Traditions",
    definition: "A historic South Asian third-gender community of individuals assigned male at birth who adopt feminine expressions.",
    colorTheme: "context",
    vector: [10, 70, 30, 10, 10, 15, 40, 15]
  },
  "Kathoey": {
    category: "Cultural & Historic Traditions",
    definition: "A recognized Thai third-gender identity, often corresponding to transgender women or highly effeminate males.",
    colorTheme: "context",
    vector: [5, 80, 20, 10, 10, 10, 35, 10]
  },
  "Fa'afafine": {
    category: "Cultural & Historic Traditions",
    definition: "A Samoan third-gender role meaning 'in the manner of a woman,' playing a valued, traditional part in family and social life.",
    colorTheme: "context",
    vector: [10, 80, 20, 10, 10, 10, 30, 25]
  },
  "Bakla": {
    category: "Cultural & Historic Traditions",
    definition: "A Filipino identity referring to individuals assigned male at birth who express feminine behaviors, widely integrated in society.",
    colorTheme: "context",
    vector: [15, 75, 25, 10, 10, 10, 35, 25]
  },
  "Māhū": {
    category: "Cultural & Historic Traditions",
    definition: "A traditional Hawaiian third-gender role embodying both male and female characteristics, acting as sacred teachers and cultural guardians.",
    colorTheme: "context",
    vector: [60, 60, 20, 15, 15, 25, 30, 30]
  },
  "Travesti": {
    category: "Cultural & Historic Traditions",
    definition: "A Latin American gender identity used by trans women or individuals assigned male at birth who express feminine identities.",
    colorTheme: "context",
    vector: [5, 85, 15, 10, 10, 10, 40, 5]
  },

  // --- Meta-Defiance & Apathy (6) ---
  "Cassgender": {
    category: "Meta-Defiance & Apathy",
    definition: "An apathetic state where you treat the entire concept of gender with radical apathy; it simply doesn't matter to you.",
    colorTheme: "defiant",
    vector: [20, 20, 40, 5, 5, 10, 95, 40]
  },
  "Genderpunk": {
    category: "Meta-Defiance & Apathy",
    definition: "A subversive gender experience used explicitly to disrupt, break, or subvert normative binary expectations.",
    colorTheme: "defiant",
    vector: [40, 40, 30, 40, 30, 35, 98, 5]
  },
  "Egogender": {
    category: "Meta-Defiance & Apathy",
    definition: "A fully self-contained, personal identity that is entirely unique to your internal processing universe and cannot be compared to others.",
    colorTheme: "defiant",
    vector: [30, 30, 30, 20, 20, 30, 90, 15]
  },
  "Commogender": {
    category: "Meta-Defiance & Apathy",
    definition: "Living as your birth sex for convenience, while fully aware that it doesn't represent your internal gender truth.",
    colorTheme: "defiant",
    vector: [45, 45, 25, 10, 10, 10, 70, 75]
  },
  "Novigender": {
    category: "Meta-Defiance & Apathy",
    definition: "Having a gender experience so intricate, complex, and distinct that it is structurally impossible to describe in simple terms.",
    colorTheme: "defiant",
    vector: [35, 35, 35, 45, 45, 65, 85, 10]
  },
  "Quoigender": {
    category: "Meta-Defiance & Apathy",
    definition: "An identity defined by the feeling that gender categories, classifications, and questions are inapplicable or deeply confusing.",
    colorTheme: "defiant",
    vector: [25, 25, 50, 35, 35, 25, 95, 20]
  }
};

const GENDER_CATEGORIES = {
  "Binary Alignments": [
    "Cisgender", "Cis Male", "Cis Female", "Cis Man", "Cis Woman",
    "Transgender", "Trans Male", "Trans Female", "Trans Man", "Trans Woman",
    "Female to Male", "Male to Female", "Transsexual"
  ],
  "Non-Binary (Static)": [
    "Androgyne", "Non-binary", "Genderqueer", "Gender Nonconforming", "Gender Variant", 
    "Gender Questioning", "Intersex", "Demiboy", "Demigirl", "Deminonbinary",
    "Bigender", "Trigender", "Pangender", "Multi-gender", "Polygender", "Omnigender", "Ceterogender", "Maverique"
  ],
  "Non-Binary (Dynamic & Fluid)": [
    "Gender Fluid", "Ceterofluid", "Femfluid", "Alexigender", "Boyflux", "Girlflux", 
    "Agenderflux", "Genderflux", "Fluidflux", "Demifluid", "Burstgender"
  ],
  "Agender & Nullity": [
    "Agender", "Neutrois", "Nullgender", "Gendervoid", "Anergender", "Apogender", 
    "Libragender", "Libraboy", "Libragirl"
  ],
  "Xenogenders & Metaphorical": [
    "Xenogender", "Abimegender", "Caelgender", "Colorgender", "Biogender", "Esspigender", 
    "Glitchgender", "Gendervague"
  ],
  "Cultural & Historic Traditions": [
    "Two-Spirit", "Hijra", "Kathoey", "Fa'afafine", "Bakla", "Māhū", "Travesti"
  ],
  "Meta-Defiance & Apathy": [
    "Cassgender", "Genderpunk", "Egogender", "Commogender", "Novigender", "Quoigender"
  ]
};

// === 2. THE 72 QUESTIONS DATABASE ===
const QUESTIONS = [
  // --- Scale I: Masculine Internalization (Q1 - Q9) ---
  { id: "q1", text: "I experience a deep, internal resonance with masculine archetypes and expressions.", scale: "M", weights: { masculinity: 1.5, nullity: -0.5 } },
  { id: "q2", text: "When I visualize my core self in dreams or reflections, that self is masculine.", scale: "M", weights: { masculinity: 1.5, congruence: -0.3 } },
  { id: "q3", text: "I feel a sense of alignment and validation when referred to as a man, male, or using masculine terms.", scale: "M", weights: { masculinity: 1.5 } },
  { id: "q4", text: "I feel a natural sense of belonging and connection in spaces designated for men.", scale: "M", weights: { masculinity: 1.2 } },
  { id: "q5", text: "I internalize masculine attributes (e.g., strength, protector roles, masculine styles) as essential to my sense of self.", scale: "M", weights: { masculinity: 1.0 } },
  { id: "q6", text: "My psychological development has been shaped by a desire to embody masculine traits.", scale: "M", weights: { masculinity: 1.2 } },
  { id: "q7", text: "I feel an intuitive comfort when my presentation reflects a masculine silhouette or aesthetic.", scale: "M", weights: { masculinity: 1.0 } },
  { id: "q8", text: "When others describe me as masculine, it feels like an accurate reflection of my true self.", scale: "M", weights: { masculinity: 1.3 } },
  { id: "q9", text: "I find that masculine energies or qualities form a solid, dominant pillar of my internal identity.", scale: "M", weights: { masculinity: 1.5 } },

  // --- Scale II: Feminine Internalization (Q10 - Q18) ---
  { id: "q10", text: "I experience a deep, internal resonance with feminine archetypes and expressions.", scale: "F", weights: { femininity: 1.5, nullity: -0.5 } },
  { id: "q11", text: "When I visualize my core self in dreams or reflections, that self is feminine.", scale: "F", weights: { femininity: 1.5, congruence: -0.3 } },
  { id: "q12", text: "I feel a sense of alignment and validation when referred to as a woman, female, or using feminine terms.", scale: "F", weights: { femininity: 1.5 } },
  { id: "q13", text: "I feel a natural sense of belonging and connection in spaces designated for women.", scale: "F", weights: { femininity: 1.2 } },
  { id: "q14", text: "I internalize feminine attributes (e.g., nurturing roles, feminine styles, grace) as essential to my sense of self.", scale: "F", weights: { femininity: 1.0 } },
  { id: "q15", text: "My psychological development has been shaped by a desire to embody feminine traits.", scale: "F", weights: { femininity: 1.2 } },
  { id: "q16", text: "I feel an intuitive comfort when my presentation reflects a feminine silhouette or aesthetic.", scale: "F", weights: { femininity: 1.0 } },
  { id: "q17", text: "When others describe me as feminine, it feels like an accurate reflection of my true self.", scale: "F", weights: { femininity: 1.3 } },
  { id: "q18", text: "I find that feminine energies or qualities form a solid, dominant pillar of my internal identity.", scale: "F", weights: { femininity: 1.5 } },

  // --- Scale III: Agender / Nullity (Q19 - Q27) ---
  { id: "q19", text: "When I search for my internal gender, I find a quiet, neutral space rather than a masculine or feminine presence.", scale: "N", weights: { nullity: 1.5, masculinity: -0.5, femininity: -0.5 } },
  { id: "q20", text: "I experience my identity as a featureless void or an empty canvas, devoid of gendered characteristics.", scale: "N", weights: { nullity: 1.8, masculinity: -0.8, femininity: -0.8 } },
  { id: "q21", text: "I feel completely detached from the concept of gender; it feels like a foreign language I do not speak.", scale: "N", weights: { nullity: 1.5, defiance: 0.5 } },
  { id: "q22", text: "My internal self feels neutral, like water or clear glass, lacking any color, warmth, or gendered tone.", scale: "N", weights: { nullity: 1.5 } },
  { id: "q23", text: "I feel most authentic when I am perceived simply as a human being, entirely outside gender categories.", scale: "N", weights: { nullity: 1.5 } },
  { id: "q24", text: "I feel that gender is a property I do not possess; I am genderless.", scale: "N", weights: { nullity: 1.8, congruence: -0.5 } },
  { id: "q25", text: "If my internal identity were a canvas, it would be entirely blank and clean, without any lines or shapes.", scale: "N", weights: { nullity: 1.5 } },
  { id: "q26", text: "I feel an active neutrality, a positive state of being gender-free rather than an empty lack.", scale: "N", weights: { nullity: 1.5 } },
  { id: "q27", text: "I find the experience of having a gender identity to be abstract, alien, or inapplicable to my sense of self.", scale: "N", weights: { nullity: 1.8, defiance: 0.4 } },

  // --- Scale IV: Fluidity (Q28 - Q36) ---
  { id: "q28", text: "My gender identity is dynamic; it moves, drifts, or shifts over time.", scale: "FL", weights: { fluidity: 1.8, congruence: -0.3 } },
  { id: "q29", text: "I experience my gender as a fluid stream, changing its flow and characteristics depending on my internal states.", scale: "FL", weights: { fluidity: 1.5, flux: 0.4 } },
  { id: "q30", text: "I feel like a different gender at different times, moving between masculine, feminine, and neutral spaces.", scale: "FL", weights: { fluidity: 1.8 } },
  { id: "q31", text: "The way I relate to gender is highly temporal, with noticeable transitions over days, weeks, or months.", scale: "FL", weights: { fluidity: 1.8 } },
  { id: "q32", text: "I feel comfortable with the idea that my gender is not a fixed destination, but a journey of continuous motion.", scale: "FL", weights: { fluidity: 1.5 } },
  { id: "q33", text: "I experience periods where my gender feels masculine, followed by periods where it shifts to feminine or neutral.", scale: "FL", weights: { fluidity: 1.8 } },
  { id: "q34", text: "My internal gender presentation and sense of self are in a state of ongoing, adaptive transition.", scale: "FL", weights: { fluidity: 1.5, flux: 0.5 } },
  { id: "q35", text: "I find that my gender is highly responsive to external settings, shifting its nature depending on the social environment.", scale: "FL", weights: { fluidity: 1.5, defiance: 0.3 } },
  { id: "q36", text: "I identify with the concept of gender fluidity as a permanent and stable way of being unstable.", scale: "FL", weights: { fluidity: 1.8 } },

  // --- Scale V: Flux (Q37 - Q45) ---
  { id: "q37", text: "The intensity of my gendered feelings fluctuates, ranging from highly amplified to barely perceptible.", scale: "FX", weights: { flux: 1.8, fluidity: 0.4 } },
  { id: "q38", text: "Some days I feel my gender very strongly, while on other days it fades to a faint, quiet background whisper.", scale: "FX", weights: { flux: 1.8, nullity: 0.5 } },
  { id: "q39", text: "The 'volume' of my gender experience is variable, even when the core type of gender remains constant.", scale: "FX", weights: { flux: 1.5 } },
  { id: "q40", text: "I experience sudden spikes or surges in my gender's intensity, followed by a return to a low-energy baseline.", scale: "FX", weights: { flux: 1.8, fluidity: 0.5 } },
  { id: "q41", text: "I feel a partial, muted connection to gender, like a radio station that is slightly out of tune or fading in and out.", scale: "FX", weights: { flux: 1.5, nullity: 0.5 } },
  { id: "q42", text: "My gendered energy operates on a dimmer switch, changing its brightness rather than its color.", scale: "FX", weights: { flux: 1.5 } },
  { id: "q43", text: "I experience states where my gender is intensely active, contrasted with states where it feels almost agender.", scale: "FX", weights: { flux: 1.8, nullity: 0.5 } },
  { id: "q44", text: "The strength of my identification with any gender is volatile, rising and falling in waves.", scale: "FX", weights: { flux: 1.5 } },
  { id: "q45", text: "I experience a sense of gendered presence that is inconsistent, fluctuating in its clarity and power.", scale: "FX", weights: { flux: 1.8 } },

  // --- Scale VI: Xenic Metaphor (Q46 - Q54) ---
  { id: "q46", text: "I conceptualize my internal identity using metaphors from nature, such as plants, elements, or ecosystems.", scale: "X", weights: { xenic: 1.8 } },
  { id: "q47", text: "Traditional human gender terms feel too limiting; I relate my gender to cosmic concepts like stars, nebulas, or space.", scale: "X", weights: { xenic: 1.8, nullity: 0.4 } },
  { id: "q48", text: "I feel a sense of alignment between my gender identity and computational concepts, like computer code, software, or glitches.", scale: "X", weights: { xenic: 1.8, fluidity: 0.3 } },
  { id: "q49", text: "My internal gender experience feels closely aligned with specific aesthetic styles, textures, or color palettes.", scale: "X", weights: { xenic: 1.5 } },
  { id: "q50", text: "My experience of gender is deeply intertwined with my neurodivergence (e.g., autism, ADHD), shaping how I perceive identity.", scale: "X", weights: { xenic: 1.5, nullity: 0.4 } },
  { id: "q51", text: "I relate my gender to abstract concepts or non-human entities rather than traditional masculine or feminine roles.", scale: "X", weights: { xenic: 1.8 } },
  { id: "q52", text: "I find that art, music, or sensory atmospheres capture my gender far better than any social label.", scale: "X", weights: { xenic: 1.5 } },
  { id: "q53", text: "My gender feels like a custom landscape composed of elements that are not traditionally associated with gender at all.", scale: "X", weights: { xenic: 1.8 } },
  { id: "q54", text: "I perceive my gender as an ethereal or spiritual energy rather than a biological or social category.", scale: "X", weights: { xenic: 1.5 } },

  // --- Scale VII: Systemic Defiance (Q55 - Q63) ---
  { id: "q55", text: "I view my gender identity and presentation as an active, conscious disruption of societal norms.", scale: "D", weights: { defiance: 1.8 } },
  { id: "q56", text: "I feel a profound indifference or apathy toward how society labels my gender; it simply does not matter to me.", scale: "D", weights: { defiance: 1.8, nullity: 0.4 } },
  { id: "q57", text: "I feel that social gender categories are artificial boundaries, and I actively choose to subvert them.", scale: "D", weights: { defiance: 1.8, congruence: -0.4 } },
  { id: "q58", text: "My gender is an entirely self-contained system unique to my own consciousness, independent of comparison to others.", scale: "D", weights: { defiance: 1.5, xenic: 0.3 } },
  { id: "q59", text: "I experience a sense of empowerment in presenting my gender in ways that confuse, challenge, or defy binary expectations.", scale: "D", weights: { defiance: 1.5 } },
  { id: "q60", text: "I reject the institutional and legal structures that force individuals into rigid gender boxes.", scale: "D", weights: { defiance: 1.8 } },
  { id: "q61", text: "I treat gender as a playground or performance art, deliberately mixing and matching conflicting signals.", scale: "D", weights: { defiance: 1.7 } },
  { id: "q62", text: "My identity is defined by a refusal to conform to any established gender expectations, binary or non-binary.", scale: "D", weights: { defiance: 1.8 } },
  { id: "q63", text: "I feel that trying to fit my internal experience into a social gender label is counterproductive or limiting.", scale: "D", weights: { defiance: 1.8 } },

  // --- Scale VIII: Assigned Sex Congruence (Q64 - Q72) ---
  { id: "q64", text: "I experience a sense of peace, comfort, and natural alignment with the sex I was assigned at birth.", scale: "C", weights: { congruence: 1.8 } },
  { id: "q65", text: "I experience distress, anxiety, or alienation (dysphoria) when looking at my physical sex characteristics.", scale: "C", weights: { congruence: -1.8 } },
  { id: "q66", text: "I have taken, or strongly desire to take, medical steps (hormones, surgery) to transition my body to match my identity.", scale: "C", weights: { congruence: -1.8 } },
  { id: "q67", text: "I feel completely at ease when others address me using the gender roles and terms associated with my birth sex.", scale: "C", weights: { congruence: 1.5 } },
  { id: "q68", text: "I experience a sense of somatic congruence; my physical body and my internal identity are in harmonious agreement.", scale: "C", weights: { congruence: 1.8 } },
  { id: "q69", text: "I feel that my birth sex assignment is a central and correct aspect of my overall gender experience.", scale: "C", weights: { congruence: 1.5 } },
  { id: "q70", text: "I experience a strong desire to be recognized as a gender completely different from the one assigned to me at birth.", scale: "C", weights: { congruence: -1.8 } },
  { id: "q71", text: "When others refer to me using the pronouns of my birth sex, it feels natural and correct.", scale: "C", weights: { congruence: 1.5 } },
  { id: "q72", text: "I experience no disconnect between my physical anatomy, my social role, and my internal sense of gender.", scale: "C", weights: { congruence: 1.8 } }
];

const DIMENSION_KEYS = ["masculinity", "femininity", "nullity", "fluidity", "flux", "xenic", "defiance", "congruence"];
const DIMENSION_BOUNDS = {};

// === 3. STARTUP CONFIGURATION & CALIBRATION ===
function calibrateDimensionBounds() {
  DIMENSION_KEYS.forEach(dim => {
    let maxVal = 0;
    let minVal = 0;
    QUESTIONS.forEach(q => {
      const w = q.weights[dim] || 0;
      if (w > 0) {
        maxVal += w * 1.0;  // Strongly Agree
        minVal += w * -1.0; // Strongly Disagree
      } else if (w < 0) {
        maxVal += w * -1.0; // Strongly Disagree adds to max because w is negative
        minVal += w * 1.0;  // Strongly Agree adds to min
      }
    });
    DIMENSION_BOUNDS[dim] = { min: minVal, max: maxVal };
  });
}

// === 4. STATE MANAGEMENT ===
const QuizState = {
  currentQuestionIndex: 0,
  historyStack: [],
  userAnswers: {}, // Maps Question ID -> Selected score (-1.0 to 1.0)
  quizStatus: "welcome", // "welcome" | "active" | "complete"
  mode: "quiz", // "quiz" | "chart" | "math"

  reset() {
    this.currentQuestionIndex = 0;
    this.historyStack = [];
    this.userAnswers = {};
    this.quizStatus = "welcome";
  }
};

// === 5. ALGORITHM MATH ENGINE ===

// Sum answers and weights, normalize to 0-100
function computeUserVector() {
  const rawScores = {};
  DIMENSION_KEYS.forEach(k => rawScores[k] = 0);

  // Accumulate scores
  QUESTIONS.forEach(q => {
    const answer = QuizState.userAnswers[q.id];
    if (answer !== undefined) {
      DIMENSION_KEYS.forEach(k => {
        const w = q.weights[k] || 0;
        rawScores[k] += w * answer;
      });
    }
  });

  // Normalize to 0-100 based on dynamic bounds
  const normalizedVector = {};
  DIMENSION_KEYS.forEach(k => {
    const bounds = DIMENSION_BOUNDS[k];
    const range = bounds.max - bounds.min;
    if (range === 0) {
      normalizedVector[k] = 50;
    } else {
      const percentage = (rawScores[k] - bounds.min) / range * 100;
      normalizedVector[k] = Math.max(0, Math.min(100, Math.round(percentage)));
    }
  });

  return normalizedVector;
}

// Salience-Weighted similarity ranking
function calculateGenderMatches(userVector) {
  // Determine salience multipliers based on user vectors to prune incompatible matches
  const salienceWeights = {};
  DIMENSION_KEYS.forEach(k => salienceWeights[k] = 1.0);

  // 1. Fluidity Constraint: if user has low fluidity, heavily penalize fluid identities
  if (userVector.fluidity < 20) {
    salienceWeights.fluidity = 2.5;
    salienceWeights.flux = 2.0;
  }
  // 2. Xenic Constraint: if user does not identify with xenic, screen out xenogenders
  if (userVector.xenic < 15) {
    salienceWeights.xenic = 2.2;
  }
  // 3. Congruence Constraint: if user has high birth congruence, prioritize cis profiles
  if (userVector.congruence > 80) {
    salienceWeights.congruence = 2.5;
  }
  // 4. Agender Constraint: if user has very high nullity, prioritize agender spectrums
  if (userVector.nullity > 80) {
    salienceWeights.nullity = 2.0;
  }

  // Calculate sum of salience weights for distance normalization
  let salienceSum = 0;
  DIMENSION_KEYS.forEach(k => salienceSum += salienceWeights[k]);
  const maxPossibleDistance = 100 * Math.sqrt(salienceSum);

  const matches = Object.entries(GENDERS).map(([genderName, genderDetails]) => {
    let sumSquaredDiff = 0;
    DIMENSION_KEYS.forEach((k, idx) => {
      const userVal = userVector[k];
      const genderVal = genderDetails.vector[idx];
      const diff = userVal - genderVal;
      sumSquaredDiff += salienceWeights[k] * diff * diff;
    });

    const distance = Math.sqrt(sumSquaredDiff);
    
    // Scale matching using a tuned discriminative factor
    // Scale factor makes the matching selective: a distance of ~45 leads to ~65% match
    const scaleFactor = 120 * Math.sqrt(salienceSum / 8);
    const matchPercentage = Math.max(0, Math.round(100 * (1 - (distance / scaleFactor))));

    return {
      name: genderName,
      match: matchPercentage,
      details: genderDetails
    };
  });

  // Sort descending by match percentage
  matches.sort((a, b) => b.match - a.match);
  return matches;
}

// Compute Psychometric Indices
function calculateDiagnosticIndices(userVector) {
  const gci = userVector.congruence; // Gender Congruence Index
  const tdi = Math.round((userVector.fluidity + userVector.flux) / 2); // Temporal Dynamism Index
  const xmi = userVector.xenic; // Xenic Metaphor Index
  const sdi = userVector.defiance; // Social Defiance Index
  
  // Dual-energy balance (Masculinity vs Femininity ratio)
  const sumMF = userVector.masculinity + userVector.femininity;
  let mRatio = 50;
  if (sumMF > 0) {
    mRatio = Math.round((userVector.masculinity / sumMF) * 100);
  }

  return { gci, tdi, xmi, sdi, mRatio };
}

// Generate diagnostic narrative report based on indices
function generateClinicalInterpretation(indices, topGender) {
  let narrative = "";

  // 1. Core Profile Alignment
  narrative += `Your primary vector coordinates show a close structural alignment with **${topGender.name}** (${topGender.match}% alignment congruence). `;
  
  // 2. Somatic Congruence
  if (indices.gci >= 75) {
    narrative += "Your somatic profile indicates a high degree of comfort and congruence with your birth-assigned sex, showing minimal physical dysphoria or transition drive. ";
  } else if (indices.gci <= 30) {
    narrative += "You present a profile characterized by significant somatic incongruence and gender dysphoria, suggesting an internal sense of self that strongly departs from physical biological markers and frequently indicates transitioning desires. ";
  } else {
    narrative += "Your somatic markers show moderate congruence, indicating a flexible or neutral relationship with biological sex characteristics without intense dysphoria. ";
  }

  // 3. Dynamism
  if (indices.tdi >= 70) {
    narrative += "Your cognitive tracking reflects high temporal volatility. Your gender is experienced as an active, shifting stream, subject to temporal transitions (fluidity) and variations in experienced intensity (flux). ";
  } else if (indices.tdi <= 25) {
    narrative += "Your identity is anchored by a highly stable, static baseline. You experience little to no temporal shifting or intensity variance over time. ";
  } else {
    narrative += "You show moderate dynamism, suggesting that while your core gender feels relatively stable, you experience mild shifts in response to specific environments or internal moods. ";
  }

  // 4. Metaphorical Framing (Xenic)
  if (indices.xmi >= 65) {
    narrative += "You demonstrate a strong tendency toward xenic cognitive schemas, conceptualizing identity through ecological, celestial, or digital constructs rather than human social frameworks. This pattern is clinically associated with neurodivergence-entangled gender conceptualizations. ";
  }

  // 5. Defiance
  if (indices.sdi >= 75) {
    narrative += "You exhibit a high Social Defiance posture. You reject standard systemic labels, experiencing your gender as a self-contained construct or active defiance of institutional boundaries. ";
  } else if (indices.sdi <= 30) {
    narrative += "Your profile reflects social compliance; you integrate comfortably into existing social classification systems and feel at ease using standard pronouns and honorifics. ";
  }

  return narrative;
}

// === 6. SPA RENDERING WORKFLOW ===
function startQuiz() {
  QuizState.reset();
  QuizState.quizStatus = "active";
  renderState();
}

function selectLikert(value) {
  const currentQ = QUESTIONS[QuizState.currentQuestionIndex];
  QuizState.userAnswers[currentQ.id] = value;

  QuizState.historyStack.push(QuizState.currentQuestionIndex);

  if (QuizState.currentQuestionIndex < QUESTIONS.length - 1) {
    QuizState.currentQuestionIndex++;
    triggerSlideAnimation(() => {
      renderState();
    });
  } else {
    QuizState.quizStatus = "complete";
    triggerSlideAnimation(() => {
      renderState();
    });
  }
}

function goBack() {
  if (QuizState.historyStack.length === 0) return;

  const previousIndex = QuizState.historyStack.pop();
  const currentQ = QUESTIONS[QuizState.currentQuestionIndex];
  delete QuizState.userAnswers[currentQ.id];

  QuizState.currentQuestionIndex = previousIndex;
  QuizState.quizStatus = "active";

  triggerSlideAnimation(() => {
    renderState();
  }, "back");
}

function goForward() {
  if (QuizState.currentQuestionIndex < QUESTIONS.length - 1) {
    QuizState.historyStack.push(QuizState.currentQuestionIndex);
    QuizState.currentQuestionIndex++;
    triggerSlideAnimation(() => {
      renderState();
    });
  } else {
    QuizState.quizStatus = "complete";
    triggerSlideAnimation(() => {
      renderState();
    });
  }
}

function triggerSlideAnimation(callback, direction = "forward") {
  const card = document.getElementById("quiz-card");
  if (!card) {
    callback();
    return;
  }

  card.classList.add(direction === "forward" ? "slide-out-left" : "slide-out-right");
  
  setTimeout(() => {
    callback();
    const newCard = document.getElementById("quiz-card");
    if (newCard) {
      newCard.classList.add(direction === "forward" ? "slide-in-right" : "slide-in-left");
      setTimeout(() => {
        newCard.classList.remove("slide-in-right", "slide-in-left");
      }, 300);
    }
  }, 200);
}

function renderState() {
  const container = document.getElementById("app-container");
  if (!container) return;

  if (QuizState.quizStatus === "welcome") {
    renderWelcome(container);
  } else if (QuizState.quizStatus === "active") {
    renderQuiz(container);
  } else if (QuizState.quizStatus === "complete") {
    renderResult(container);
  }
}

function renderWelcome(container) {
  container.innerHTML = `
    <div id="quiz-card" class="glass-card animate-fade-in text-center">
      <h1 class="hero-title">Multidimensional Gender Identity Inventory</h1>
      <p class="hero-subtitle">
        A clinical psychometric assessment designed for individuals seeking clarity on their gender coordinates. 
        By evaluating your internal resonance across 8 independent psychological dimensions, the engine maps your unique experience against a spectrum of 72 taxonomical profiles, providing clear alignment metrics rather than rigid classifications.
      </p>
      
      <div class="welcome-features font-light">
        <div class="feature-item" style="border-left: 2px solid hsl(var(--color-context)); padding-left: 0.75rem; text-align: left;">
          <div class="feature-text"><strong>8-Axis Psychometrics:</strong> Evaluates Masculinity, Femininity, Nullity, Fluidity, Flux, Xenic elements, Defiance, and Congruence.</div>
        </div>
        <div class="feature-item" style="border-left: 2px solid hsl(var(--color-static)); padding-left: 0.75rem; text-align: left;">
          <div class="feature-text"><strong>Salience similarity matching:</strong> Uses dynamically weighted matrix operations to score matches against 72 verified taxonomy labels.</div>
        </div>
        <div class="feature-item" style="border-left: 2px solid hsl(var(--color-null)); padding-left: 0.75rem; text-align: left;">
          <div class="feature-text"><strong>72 Clinically Curated Items:</strong> Structured statement scales to measure somatic congruence and temporal fluidity with high resolution.</div>
        </div>
      </div>

      <button onclick="startQuiz()" class="btn-primary animate-hover-scale" id="btn-start">
        Begin Psychometric Inventory
      </button>
    </div>
  `;
}

const SCALE_COLORS = {
  "M": "hsl(350, 80%, 78%)",    // Pastel Coral Rose
  "F": "hsl(195, 80%, 78%)",    // Pastel Sky Blue
  "N": "hsl(285, 70%, 80%)",    // Pastel Lilac
  "FL": "hsl(140, 65%, 80%)",   // Pastel Mint
  "FX": "hsl(255, 75%, 80%)",   // Pastel Lavender
  "X": "hsl(28, 85%, 78%)",     // Pastel Peach
  "D": "hsl(15, 75%, 78%)",     // Pastel Terracotta
  "C": "hsl(170, 70%, 78%)"     // Pastel Teal
};

function renderQuiz(container) {
  const q = QUESTIONS[QuizState.currentQuestionIndex];
  const progress = Math.round((QuizState.currentQuestionIndex / QUESTIONS.length) * 100);

  // Generate breadcrumb category trail
  const scaleTitles = { "M": "Masculine Resonance", "F": "Feminine Resonance", "N": "Agender & Nullity", "FL": "Temporal Fluidity", "FX": "Flux & Intensity", "X": "Xenic Metaphor", "D": "Systemic Defiance", "C": "Somatic Congruence" };
  const currentCategory = scaleTitles[q.scale] || "Psychometrics";
  const sectionColor = SCALE_COLORS[q.scale] || "var(--text-secondary)";

  // Check if we already answered this in history to mark active
  const previousAnswer = QuizState.userAnswers[q.id];

  container.innerHTML = `
    <div class="quiz-header">
      <div class="progress-container">
        <div class="progress-meta">
          <span class="progress-title">Diagnostic Resolution Progress</span>
          <span class="progress-value">${QuizState.currentQuestionIndex + 1} / ${QUESTIONS.length} (${progress}%)</span>
        </div>
        <div class="progress-bar-bg">
          <div class="progress-bar-fill" style="width: ${progress}%; --progress-color: ${sectionColor};"></div>
        </div>
      </div>
    </div>

    <div id="quiz-card" class="glass-card">
      <div class="node-category" style="color: ${sectionColor};">${currentCategory}</div>
      <h2 class="question-text" style="min-height: 80px;">${q.text}</h2>
      
      <div class="likert-container">
        <button onclick="selectLikert(-1.0)" class="likert-btn likert-btn-sd ${previousAnswer === -1.0 ? 'active-sd' : ''}" id="likert-sd">
          <span class="likert-label">Strongly Disagree</span>
        </button>
        <button onclick="selectLikert(-0.5)" class="likert-btn likert-btn-d ${previousAnswer === -0.5 ? 'active-d' : ''}" id="likert-d">
          <span class="likert-label">Disagree</span>
        </button>
        <button onclick="selectLikert(0.0)" class="likert-btn likert-btn-n ${previousAnswer === 0.0 ? 'active-n' : ''}" id="likert-n">
          <span class="likert-label">Neutral / N/A</span>
        </button>
        <button onclick="selectLikert(0.5)" class="likert-btn likert-btn-a ${previousAnswer === 0.5 ? 'active-a' : ''}" id="likert-a">
          <span class="likert-label">Agree</span>
        </button>
        <button onclick="selectLikert(1.0)" class="likert-btn likert-btn-sa ${previousAnswer === 1.0 ? 'active-sa' : ''}" id="likert-sa">
          <span class="likert-label">Strongly Agree</span>
        </button>
      </div>

      <div class="quiz-footer" style="display: flex; flex-direction: column; gap: 1rem; width: 100%;">
        <div style="display: flex; gap: 1rem; width: 100%;">
          <button onclick="goBack()" class="btn-secondary" ${QuizState.historyStack.length === 0 ? "disabled" : ""} id="btn-back" style="flex: 1; margin: 0;">
            Previous
          </button>
          ${previousAnswer !== undefined ? `
            <button onclick="goForward()" class="btn-primary" id="btn-next" style="flex: 1; padding: 0.5rem 1rem; font-size: 0.75rem; font-weight: 700; margin: 0;">
              Next
            </button>
          ` : ''}
        </div>
        <span class="desktop-indicator" style="text-align: center; margin-top: 0.25rem;">
          Construct scale index. Calibration remains local.
        </span>
      </div>
    </div>
  `;
}

function renderResult(container) {
  const userVector = computeUserVector();
  const sortedMatches = calculateGenderMatches(userVector);
  const primaryMatch = sortedMatches[0];
  const runnerUps = sortedMatches.slice(1, 4);

  const indices = calculateDiagnosticIndices(userVector);
  const narrative = generateClinicalInterpretation(indices, primaryMatch);

  // Generate vector bars listing
  const vectorBarsHTML = DIMENSION_KEYS.map(k => {
    const val = userVector[k];
    const cleanLabel = k.charAt(0).toUpperCase() + k.slice(1);
    return `
      <div class="vector-bar-item">
        <div class="vector-bar-meta">
          <span>${cleanLabel}</span>
          <span>${val}%</span>
        </div>
        <div class="vector-bar-bg">
          <div class="vector-bar-fill fill-${k}" style="width: ${val}%"></div>
        </div>
      </div>
    `;
  }).join("");

  // Generate auxiliary runner-ups HTML
  const runnerUpsHTML = runnerUps.map(ru => `
    <div class="runnerup-item">
      <div>
        <div class="runnerup-name">${ru.name}</div>
        <div class="runnerup-category">${ru.details.category}</div>
      </div>
      <div class="runnerup-match">${ru.match}% Match</div>
    </div>
  `).join("");

  const themeClass = primaryMatch.details.colorTheme || "static";

  container.innerHTML = `
    <div id="quiz-card" class="glass-card result-card theme-${themeClass} animate-fade-in text-center" style="max-width: 820px; margin: 0 auto;">
      <div class="brand-badge">Clinical Profile Discovered</div>
      
      <div class="result-header">
        <h1 class="result-name glow-${themeClass}">${primaryMatch.name}</h1>
        <div class="result-category-pill">${primaryMatch.details.category}</div>
      </div>

      <div class="result-grid-cols">
        <!-- Left Side: Custom SVG Radar Chart & Centroid Centering -->
        <div class="flex-col-center">
          <h3 class="font-bold text-sm text-gray-400 uppercase tracking-widest mb-4">Vector Axis Radar Overlay</h3>
          <div id="result-radar-chart" class="radar-chart-container"></div>
          <p class="radar-info-text">
            The filled shape represents your personal coordinates. The dotted white boundary represents the ideal centroid coordinates of the matched gender.
          </p>
        </div>

        <!-- Right Side: 8-Axis Vector Bars Breakdown -->
        <div class="flex-col-gap4">
          <h3 class="font-bold text-sm text-gray-400 uppercase tracking-widest pb-1" style="border-bottom: 1px solid var(--border-card);">Normalized Vector Profile</h3>
          <div class="panel-bar-grid">
            ${vectorBarsHTML}
          </div>
        </div>
      </div>

      <!-- Section: Clinical Narrative Interpretation -->
      <div class="result-body">
        <div class="definition-container">
          <h3>Psychological Construct Assessment</h3>
          <p class="font-light text-base leading-relaxed text-gray-300">${primaryMatch.details.definition}</p>
        </div>

        <div class="definition-container">
          <h3>Diagnostic Narrative Analysis</h3>
          <p class="font-light text-sm leading-relaxed text-gray-400">${narrative}</p>
        </div>

        <div class="definition-container">
          <h3>Compassionate Guidance for Your Journey</h3>
          <p class="font-light text-sm leading-relaxed text-gray-400">
            Exploring your gender identity can feel overwhelming, and it is entirely normal to feel uncertain or experience shifts. 
            Labels are simply tools to help you conceptualize your feelings and connect with others; they are not rigid boxes. 
            Give yourself permission and time to explore without pressure.
          </p>
        </div>

        <div class="definition-container">
          <h3>Supportive Exploration Resources</h3>
          <p class="font-light text-xs text-gray-400 mb-3">
            If you are struggling with isolation, dysphoria, or uncertainty, reaching out to affirming organizations can provide comfort and guidance:
          </p>
          <ul class="font-light text-xs text-gray-400" style="list-style-type: disc; padding-left: 1.25rem; display: flex; flex-direction: column; gap: 0.5rem;">
            <li><strong>Gender Spectrum:</strong> Offers online support groups, consulting, and resources for gender-expansive youth and families.</li>
            <li><strong>The Trevor Project:</strong> 24/7 confidential crisis intervention and support services for LGBTQ+ youth (TrevorLifeline, TrevorChat).</li>
            <li><strong>Psychology Today / WPATH:</strong> Directories to locate licensed, gender-affirming mental health therapists in your local region.</li>
            <li><strong>Q Chat Space:</strong> Moderated online discussion groups for LGBTQ+ teens ages 13-19.</li>
          </ul>
        </div>
      </div>

      <!-- Section: Dynamic Indices & Dual-Energy Balance -->
      <div class="my-6">
        <h3 class="font-bold text-sm text-gray-400 uppercase tracking-widest text-left pb-1 mb-4" style="border-bottom: 1px solid var(--border-card);">Clinical Diagnostic Indicators</h3>
        
        <!-- Dual-Energy Balance -->
        <div class="deb-scale-container">
          <div class="deb-scale-labels">
            <span>Feminine Dominant</span>
            <span>Balanced Energy</span>
            <span>Masculine Dominant</span>
          </div>
          <div class="deb-scale-track">
            <div class="deb-scale-pointer" style="left: ${indices.mRatio}%"></div>
          </div>
        </div>

        <!-- Dynamic Index Cards -->
        <div class="diagnostic-indices-grid">
          <div class="index-card">
            <span class="index-title">Somatic Congruence (GCI)</span>
            <div class="index-value-wrapper">
              <span class="index-value">${indices.gci}</span>
              <span class="text-xs text-gray-500">/ 100</span>
            </div>
            <p class="index-desc">Comfort index with biological sex markers at birth.</p>
          </div>
          <div class="index-card">
            <span class="index-title">Temporal Dynamism (TDI)</span>
            <div class="index-value-wrapper">
              <span class="index-value">${indices.tdi}</span>
              <span class="text-xs text-gray-500">/ 100</span>
            </div>
            <p class="index-desc">Volatility rate of gender fluidity and experienced intensity spikes.</p>
          </div>
          <div class="index-card">
            <span class="index-title">Xenic Metaphor Index (XMI)</span>
            <div class="index-value-wrapper">
              <span class="index-value">${indices.xmi}</span>
              <span class="text-xs text-gray-500">/ 100</span>
            </div>
            <p class="index-desc">Strength of identification with botanical, celestial, or computational domains.</p>
          </div>
          <div class="index-card">
            <span class="index-title">Social Defiance Index (SDI)</span>
            <div class="index-value-wrapper">
              <span class="index-value">${indices.sdi}</span>
              <span class="text-xs text-gray-500">/ 100</span>
            </div>
            <p class="index-desc">Level of active subversion and apathy toward institutional categorizations.</p>
          </div>
        </div>
      </div>

      <!-- Section: Auxiliary Runner-Up Alignments -->
      <div class="text-left mb-8">
        <h3 class="font-bold text-sm text-gray-400 uppercase tracking-widest pb-1 mb-4" style="border-bottom: 1px solid var(--border-card);">Auxiliary Spectrum Alignments</h3>
        <div class="runnerups-container">
          ${runnerUpsHTML}
        </div>
      </div>

      <div class="result-actions">
        <button onclick="startQuiz()" class="btn-primary animate-hover-scale" id="btn-restart">
          Restart Psychological Evaluation
        </button>
      </div>
    </div>
  `;

  // Render SVG radar chart
  renderRadarSVG(userVector, primaryMatch.details.vector, themeClass);
}

// === 7. SVG RADAR CHART GENERATOR ===
function renderRadarSVG(userVector, centroidVector, themeClass) {
  const container = document.getElementById("result-radar-chart");
  if (!container) return;

  const width = 300;
  const height = 300;
  const cx = width / 2;
  const cy = height / 2;
  const maxRadius = 110;

  const numAxes = 8;
  const angleSlice = (Math.PI * 2) / numAxes;

  // Axis Labels & Description Mapping
  const axesLabels = ["Masc", "Fem", "Null", "Fluid", "Flux", "Xenic", "Defy", "Congr"];

  const getCoordinates = (value, axisIndex) => {
    const angle = angleSlice * axisIndex - Math.PI / 2;
    const r = (value / 100) * maxRadius;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    return { x, y };
  };

  // Build Grid circles/octagons
  let webHTML = "";
  const gridLevels = [0.25, 0.5, 0.75, 1.0];
  gridLevels.forEach(level => {
    const points = [];
    for (let i = 0; i < numAxes; i++) {
      const coords = getCoordinates(level * 100, i);
      points.push(`${coords.x},${coords.y}`);
    }
    webHTML += `<polygon class="radar-web" points="${points.join(" ")}" />`;
  });

  // Build Axis Lines & Text Labels
  let axisLinesHTML = "";
  let axisLabelsHTML = "";
  for (let i = 0; i < numAxes; i++) {
    const outerCoords = getCoordinates(100, i);
    axisLinesHTML += `<line class="radar-axis-line" x1="${cx}" y1="${cy}" x2="${outerCoords.x}" y2="${outerCoords.y}" />`;

    // Position labels slightly outside max radius
    const labelAngle = angleSlice * i - Math.PI / 2;
    const labelR = maxRadius + 18;
    const lx = cx + labelR * Math.cos(labelAngle);
    const ly = cy + labelR * Math.sin(labelAngle) + 3; // slight offset for baseline alignment

    let textAnchor = "middle";
    if (Math.cos(labelAngle) > 0.1) textAnchor = "start";
    else if (Math.cos(labelAngle) < -0.1) textAnchor = "end";

    axisLabelsHTML += `
      <text class="radar-axis-label" x="${lx}" y="${ly}" text-anchor="${textAnchor}">
        ${axesLabels[i]}
      </text>
    `;
  }

  // Build User Polygon
  const userPoints = [];
  DIMENSION_KEYS.forEach((k, idx) => {
    const userVal = userVector[k];
    const coords = getCoordinates(userVal, idx);
    userPoints.push(`${coords.x},${coords.y}`);
  });
  const userPolyPoints = userPoints.join(" ");

  // Build Centroid Polygon
  const centroidPoints = [];
  centroidVector.forEach((val, idx) => {
    const coords = getCoordinates(val, idx);
    centroidPoints.push(`${coords.x},${coords.y}`);
  });
  const centroidPolyPoints = centroidPoints.join(" ");

  // Theme variable colors mapping
  const colorThemes = {
    null: "hsl(350, 85%, 76%)",
    static: "hsl(28, 85%, 76%)",
    dynamic: "hsl(215, 80%, 80%)",
    context: "hsl(285, 75%, 82%)",
    defiant: "hsl(15, 80%, 75%)"
  };
  const themeColor = colorThemes[themeClass] || colorThemes.static;

  const svgHTML = `
    <svg width="${width}" height="${height}" style="overflow: visible;">
      <!-- Outer Web Grid -->
      ${webHTML}
      
      <!-- Axis Lines -->
      ${axisLinesHTML}
      
      <!-- Centroid Polygon Overlay (Dotted Model Benchmark) -->
      <polygon class="radar-poly-centroid" points="${centroidPolyPoints}" />

      <!-- User Polygon with Flat translucent fill -->
      <polygon class="radar-poly-user" points="${userPolyPoints}" stroke="${themeColor}" fill="${themeColor}" fill-opacity="0.15" />
      
      <!-- Interactive Points for User scores -->
      ${DIMENSION_KEYS.map((k, idx) => {
        const val = userVector[k];
        const coords = getCoordinates(val, idx);
        return `<circle class="radar-point-user" cx="${coords.x}" cy="${coords.y}" r="3.5" fill="${themeColor}" stroke="#ffffff" stroke-opacity="0.6" fill-opacity="1.0" />`;
      }).join("")}

      <!-- Axis Labels -->
      ${axisLabelsHTML}
    </svg>
  `;

  container.innerHTML = svgHTML;
}

// === 8. D3.JS TAXONOMY VISUAL EXPLORER ===

function loadD3(callback) {
  if (window.d3) {
    callback();
    return;
  }
  
  const canvas = document.getElementById("chart-canvas");
  if (canvas) {
    canvas.innerHTML = `
      <div id="chart-loader" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; min-height: 500px; color: var(--text-secondary); gap: 1rem;">
        <div class="loader-spinner"></div>
        <span style="font-size: 0.75rem; font-weight: 500; letter-spacing: 0.05em; text-transform: uppercase;">Loading D3.js Taxonomy Modules...</span>
      </div>
    `;
  }

  const script = document.createElement("script");
  script.src = "https://d3js.org/d3.v7.min.js";
  script.onload = () => {
    const loader = document.getElementById("chart-loader");
    if (loader) loader.remove();
    callback();
  };
  document.head.appendChild(script);
}

function setViewMode(mode) {
  QuizState.mode = mode;
  const quizWrapper = document.getElementById("quiz-shell-wrapper");
  const chartWrapper = document.getElementById("explore-chart-container");
  const mathWrapper = document.getElementById("math-sources-container");
  const btnQuiz = document.getElementById("toggle-quiz-mode");
  const btnChart = document.getElementById("toggle-chart-mode");
  const btnMath = document.getElementById("toggle-math-mode");
  
  if (!quizWrapper || !chartWrapper || !btnQuiz || !btnChart) return;

  if (mode === 'quiz') {
    quizWrapper.classList.remove("hidden");
    chartWrapper.classList.add("hidden");
    if (mathWrapper) mathWrapper.classList.add("hidden");
    
    btnQuiz.className = "switcher-btn active";
    btnChart.className = "switcher-btn inactive";
    if (btnMath) btnMath.className = "switcher-btn inactive";
  } else if (mode === 'chart') {
    quizWrapper.classList.add("hidden");
    chartWrapper.classList.remove("hidden");
    if (mathWrapper) mathWrapper.classList.add("hidden");
    
    btnQuiz.className = "switcher-btn inactive";
    btnChart.className = "switcher-btn active";
    if (btnMath) btnMath.className = "switcher-btn inactive";
    
    setTimeout(() => {
      loadD3(initializeD3Tree);
    }, 50);
  } else if (mode === 'math') {
    quizWrapper.classList.add("hidden");
    chartWrapper.classList.add("hidden");
    if (mathWrapper) mathWrapper.classList.remove("hidden");
    
    btnQuiz.className = "switcher-btn inactive";
    btnChart.className = "switcher-btn inactive";
    if (btnMath) btnMath.className = "switcher-btn active";
  }
}

// Build hierarchy dynamically from structured GENDER_CATEGORIES mapping
function buildTaxonomyHierarchy() {
  const root = {
    id: "root",
    name: "Taxonomy Root",
    category: "System Core",
    text: "The clinical spectrum of 72 human gender identities and experiences.",
    type: "decision",
    children: []
  };

  for (const [catName, genders] of Object.entries(GENDER_CATEGORIES)) {
    const catNode = {
      id: "cat_" + catName.replace(/[^a-z0-9]/gi, '_').toLowerCase(),
      name: catName,
      category: "Category",
      text: `Select nodes below to explore specific gender coordinates in the ${catName.toLowerCase()} cluster.`,
      type: "decision",
      children: []
    };

    genders.forEach(gName => {
      const details = GENDERS[gName];
      if (details) {
        catNode.children.push({
          id: "gender_" + gName.replace(/[^a-z0-9]/gi, '_').toLowerCase(),
          name: gName,
          category: catName,
          text: details.definition,
          type: "result"
        });
      }
    });

    root.children.push(catNode);
  }

  return root;
}

function collapseDeeperThan(d, maxDepth) {
  if (d.depth >= maxDepth && d.children) {
    d._children = d.children;
    d.children = null;
  }
  if (d.children) {
    d.children.forEach(c => collapseDeeperThan(c, maxDepth));
  }
  if (d._children) {
    d._children.forEach(c => collapseDeeperThan(c, maxDepth));
  }
}

const CATEGORY_COLORS = {
  "Binary Alignments": "hsl(28, 85%, 76%)",
  "Non-Binary (Static)": "hsl(215, 80%, 80%)",
  "Non-Binary (Dynamic & Fluid)": "hsl(285, 75%, 82%)",
  "Agender & Nullity": "hsl(350, 85%, 76%)",
  "Xenogenders & Metaphorical": "hsl(15, 80%, 75%)",
  "Cultural & Historic Traditions": "hsl(22, 60%, 78%)",
  "Meta-Defiance & Apathy": "hsl(190, 75%, 78%)"
};

let chartTooltip = null;

function initializeD3Tree() {
  const canvas = document.getElementById("chart-canvas");
  if (!canvas) return;

  d3.select("#chart-canvas").selectAll("svg").remove();

  const width = canvas.clientWidth || 800;
  const height = canvas.clientHeight || 600;

  const svg = d3.select("#chart-canvas")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  const gMain = svg.append("g").attr("class", "main-group");

  const zoom = d3.zoom()
    .scaleExtent([0.15, 3])
    .on("zoom", (event) => {
      gMain.attr("transform", event.transform);
    });

  svg.call(zoom);
  
  window.d3Svg = svg;
  window.d3Zoom = zoom;

  // Initialize tooltips if not already created
  if (!chartTooltip) {
    chartTooltip = d3.select("body").append("div")
      .attr("class", "chart-tooltip");
  }

  const rawHierarchy = buildTaxonomyHierarchy();
  const root = d3.hierarchy(rawHierarchy);

  // Collapse genders under category branches by default to keep clean visual state
  collapseDeeperThan(root, 2);
  
  root.x0 = height / 2;
  root.y0 = 0;

  window.d3Root = root;

  // D3 Horizontal Tree Layout sizing
  const treeLayout = d3.tree().nodeSize([38, 200]);

  const pathGenerator = d3.linkHorizontal()
    .x(d => d.y)
    .y(d => d.x);

  function updateTree(source) {
    treeLayout(root);

    const nodes = root.descendants();
    const links = root.links();

    nodes.forEach(d => {
      d.y = d.depth * 220;
    });

    const linkSelection = gMain.selectAll("path.link")
      .data(links, d => d.target.data.id);

    const linkEnter = linkSelection.enter()
      .append("path")
      .attr("class", "link")
      .style("stroke", d => {
        const catName = d.source.data.id === "root" ? d.target.data.name : d.target.data.category;
        return CATEGORY_COLORS[catName] || "rgba(255, 255, 255, 0.25)";
      })
      .style("stroke-opacity", d => d.source.data.id === "root" ? 0.55 : (d.target.data.type === "result" ? 0.22 : 0.4))
      .attr("d", d => {
        const o = { x: source.x0, y: source.y0 };
        return pathGenerator({ source: o, target: o });
      });

    linkSelection.merge(linkEnter).transition().duration(400)
      .attr("d", pathGenerator)
      .style("stroke", d => {
        const catName = d.source.data.id === "root" ? d.target.data.name : d.target.data.category;
        return CATEGORY_COLORS[catName] || "rgba(255, 255, 255, 0.25)";
      })
      .style("stroke-opacity", d => d.source.data.id === "root" ? 0.55 : (d.target.data.type === "result" ? 0.22 : 0.4));

    linkSelection.exit().transition().duration(400)
      .attr("d", d => {
        const o = { x: source.x, y: source.y };
        return pathGenerator({ source: o, target: o });
      })
      .remove();

    const nodeSelection = gMain.selectAll("g.node")
      .data(nodes, d => d.data.id);

    const nodeEnter = nodeSelection.enter()
      .append("g")
      .attr("class", d => `node ${d.data.type === "result" ? "node-leaf" : "node-decision"}`)
      .attr("transform", d => `translate(${source.y0},${source.x0})`)
      .on("click", (event, d) => {
        onNodeClick(d);
        if (d.data.type === "decision") {
          if (d.children) {
            d._children = d.children;
            d.children = null;
          } else {
            d.children = d._children;
            d._children = null;
          }
          updateTree(d);
        }
      })
      .on("mouseover", (event, d) => {
        if (d.data.name === "Taxonomy Root" || d.data.category === "Category") return;
        chartTooltip.transition().duration(150).style("opacity", 1);
        chartTooltip.html(`<strong>${d.data.name}</strong><br/>${d.data.text || ''}`)
          .style("left", (event.pageX + 12) + "px")
          .style("top", (event.pageY - 12) + "px");
      })
      .on("mousemove", (event) => {
        chartTooltip.style("left", (event.pageX + 12) + "px")
          .style("top", (event.pageY - 12) + "px");
      })
      .on("mouseout", () => {
        chartTooltip.transition().duration(150).style("opacity", 0);
      });

    nodeEnter.filter(d => d.data.type === "decision")
      .append("circle")
      .attr("r", 5.5)
      .style("stroke-width", "1.5px");

    nodeEnter.filter(d => d.data.type === "result")
      .append("rect")
      .attr("class", d => {
        const name = d.data.name;
        const details = GENDERS[name] || {};
        return `node-leaf-rect rect-theme-${details.colorTheme || 'static'}`;
      })
      .attr("y", -11)
      .attr("height", 22)
      .attr("rx", 0)
      .attr("ry", 0)
      .attr("width", d => d.data.name.length * 6.5 + 24)
      .attr("x", 0);

    nodeEnter.filter(d => d.data.type === "decision")
      .append("text")
      .attr("dy", ".35em")
      .attr("x", d => d.children || d._children ? -10 : 10)
      .attr("text-anchor", d => d.children || d._children ? "end" : "start")
      .text(d => d.data.name);

    nodeEnter.filter(d => d.data.type === "result")
      .append("text")
      .attr("dy", ".35em")
      .attr("x", 12)
      .attr("text-anchor", "start")
      .text(d => d.data.name);

    const nodeUpdate = nodeSelection.merge(nodeEnter);
    
    nodeUpdate.transition().duration(400)
      .attr("transform", d => `translate(${d.y},${d.x})`);

    nodeUpdate.select("circle")
      .style("fill", d => {
        if (d.data.name === "Taxonomy Root") return "#ffffff";
        return d._children ? (CATEGORY_COLORS[d.data.name] || "hsl(215, 60%, 80%)") : "var(--bg-darkest)";
      })
      .style("stroke", d => {
        if (d.data.name === "Taxonomy Root") return "hsl(215, 60%, 80%)";
        return CATEGORY_COLORS[d.data.name] || "hsl(215, 60%, 80%)";
      });

    nodeUpdate.classed("node-collapsed", d => !d.children && d._children);

    nodeSelection.exit().transition().duration(400)
      .attr("transform", d => `translate(${source.y},${source.x})`)
      .remove();

    nodes.forEach(d => {
      d.x0 = d.x;
      d.y0 = d.y;
    });
  }

  updateTree(root);
  window.d3UpdateTree = updateTree;

  // Zoom center translation offset
  svg.call(zoom.transform, d3.zoomIdentity.translate(40, height / 2 - 10).scale(0.8));
}

function onNodeClick(node) {
  const emptyState = document.getElementById("panel-empty-state");
  const activeState = document.getElementById("panel-active-state");
  
  if (!emptyState || !activeState) return;

  emptyState.classList.add("hidden");
  activeState.classList.remove("hidden");

  const categoryPill = document.getElementById("panel-category-pill");
  const nodeType = document.getElementById("panel-node-type");
  const nodeTitle = document.getElementById("panel-node-title");
  const nodeId = document.getElementById("panel-node-id");
  const nodeDesc = document.getElementById("panel-node-desc");
  const vectorSection = document.getElementById("panel-vector-section");
  const vectorBars = document.getElementById("panel-vector-bars");

  if (node.data.type === "result") {
    const leafName = node.data.name;
    const details = GENDERS[leafName] || {};
    
    categoryPill.innerText = details.category || "Taxonomy Result";
    categoryPill.className = `result-category-pill theme-${details.colorTheme || 'static'}`;

    nodeType.innerText = "Taxon Profile";
    nodeType.className = "minimal-badge";

    nodeTitle.innerText = leafName;
    nodeId.innerText = `Class ID: ${node.data.id}`;
    nodeDesc.innerText = details.definition || "";

    vectorSection.classList.remove("hidden");
    vectorBars.innerHTML = "";

    // Generate bar profiles for D3 sidebar drawer
    DIMENSION_KEYS.forEach((k, idx) => {
      const val = details.vector[idx];
      const cleanLabel = k.charAt(0).toUpperCase() + k.slice(1);
      vectorBars.innerHTML += `
        <div class="vector-bar-item">
          <div class="vector-bar-meta">
            <span>${cleanLabel}</span>
            <span>${val}%</span>
          </div>
          <div class="vector-bar-bg">
            <div class="vector-bar-fill fill-${k}" style="width: ${val}%"></div>
          </div>
        </div>
      `;
    });

    highlightSvgPath(node);

  } else {
    categoryPill.innerText = node.data.category || "Decision Category";
    categoryPill.className = "minimal-badge";

    nodeType.innerText = "Classification Node";
    nodeType.className = "minimal-badge";

    nodeTitle.innerText = node.data.name;
    nodeId.innerText = `Node ID: ${node.data.id}`;
    nodeDesc.innerText = node.data.text || "";

    vectorSection.classList.add("hidden");
    clearSvgPathHighlight();
  }
}

function highlightSvgPath(leafNode) {
  const ancestors = leafNode.ancestors();
  const pathIds = new Set(ancestors.map(d => d.data.id));

  const leafName = leafNode.data.name;
  const details = GENDERS[leafName] || {};
  const theme = details.colorTheme || "static";

  d3.select("#chart-canvas").selectAll("path.link")
    .classed("path-highlight", false)
    .classed("highlight-null", false)
    .classed("highlight-static", false)
    .classed("highlight-dynamic", false)
    .classed("highlight-context", false)
    .classed("highlight-defiant", false)
    .filter(d => pathIds.has(d.target.data.id))
    .classed("path-highlight", true)
    .classed("highlight-" + theme, true);
}

function clearSvgPathHighlight() {
  d3.select("#chart-canvas").selectAll("path.link")
    .classed("path-highlight", false)
    .classed("highlight-null", false)
    .classed("highlight-static", false)
    .classed("highlight-dynamic", false)
    .classed("highlight-context", false)
    .classed("highlight-defiant", false);
}

function resetChartZoom() {
  const svg = window.d3Svg;
  const zoom = window.d3Zoom;
  const canvas = document.getElementById("chart-canvas");
  if (!svg || !zoom || !canvas) return;

  const height = canvas.clientHeight || 600;

  svg.transition().duration(750)
    .call(zoom.transform, d3.zoomIdentity.translate(40, height / 2 - 10).scale(0.8));
}

function collapseAllNodes() {
  const root = window.d3Root;
  const updateTree = window.d3UpdateTree;
  if (!root || !updateTree) return;

  root.children.forEach(collapseAllRecursively);
  updateTree(root);
  clearSvgPathHighlight();
}

function collapseAllRecursively(d) {
  if (d.children) {
    d._children = d.children;
    d.children = null;
  }
  if (d._children) {
    d._children.forEach(collapseAllRecursively);
  }
}

function expandAllNodes() {
  const root = window.d3Root;
  const updateTree = window.d3UpdateTree;
  if (!root || !updateTree) return;

  expandAllRecursively(root);
  updateTree(root);
}

function expandAllRecursively(d) {
  if (d._children) {
    d.children = d._children;
    d._children = null;
  }
  if (d.children) {
    d.children.forEach(expandAllRecursively);
  }
}

function handleSearch(query) {
  if (!query) {
    clearSvgPathHighlight();
    return;
  }
  const qClean = query.toLowerCase().trim();
  
  // Find a gender whose name matches the query
  const match = Object.keys(GENDERS).find(name => name.toLowerCase().includes(qClean));
  if (!match) return;

  const rootNode = window.d3Root;
  if (!rootNode) return;

  let targetNode = null;
  rootNode.descendants().forEach(d => {
    if (d.data.name.toLowerCase() === match.toLowerCase()) {
      targetNode = d;
    }
  });

  if (!targetNode) return;

  // Ensure all ancestors are expanded
  let ancestor = targetNode.parent;
  let needsUpdate = false;
  while (ancestor) {
    if (ancestor._children) {
      ancestor.children = ancestor._children;
      ancestor._children = null;
      needsUpdate = true;
    }
    ancestor = ancestor.parent;
  }

  const updateTree = window.d3UpdateTree;
  if (needsUpdate && updateTree) {
    updateTree(rootNode);
  }

  // Highlight, select, and center zoom on the matched node
  setTimeout(() => {
    onNodeClick(targetNode);
    centerZoomOnNode(targetNode);
  }, needsUpdate ? 250 : 50);
}

function centerZoomOnNode(d) {
  const svg = window.d3Svg;
  const zoom = window.d3Zoom;
  const canvas = document.getElementById("chart-canvas");
  if (!svg || !zoom || !canvas) return;

  const width = canvas.clientWidth || 800;
  const height = canvas.clientHeight || 600;

  const scale = 1.0;
  const tx = width / 2 - scale * d.y;
  const ty = height / 2 - scale * d.x;

  svg.transition().duration(750)
    .call(zoom.transform, d3.zoomIdentity.translate(tx, ty).scale(scale));
}

// Global Binds for DOM Event calls
window.startQuiz = startQuiz;
window.selectLikert = selectLikert;
window.goBack = goBack;
window.goForward = goForward;
window.setViewMode = setViewMode;
window.resetChartZoom = resetChartZoom;
window.collapseAllNodes = collapseAllNodes;
window.expandAllNodes = expandAllNodes;
window.handleSearch = handleSearch;
window.resetToHome = resetToHome;

function resetToHome() {
  QuizState.quizStatus = "welcome";
  QuizState.currentQuestionIndex = 0;
  QuizState.historyStack = [];
  QuizState.userAnswers = {};
  renderState();
  setViewMode("quiz");
}

document.addEventListener("DOMContentLoaded", () => {
  calibrateDimensionBounds();
  renderState();
});
