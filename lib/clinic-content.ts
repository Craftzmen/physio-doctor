export type PhotoKey =
  | "cupping"
  | "ems"
  | "paediatric"
  | "traction"
  | "therasonic"
  | "mobility"
  | "elderlyCare"

export type ServicePage = {
  slug: string
  title: string
  summary: string
  lead: string
  covers: string[]
  audience: string
  bring: string[]
  photo: PhotoKey
  featured: boolean
}

export const services: ServicePage[] = [
  {
    slug: "physiotherapy",
    title: "Physiotherapy",
    summary: "Assessment and exercise for joints, muscles, and everyday movement.",
    lead: "A physiotherapy visit starts with how you move, what hurts, and what you need to get back to. Treatment can include guided exercise, hands-on work, and a short plan you can practice between visits.",
    covers: ["Movement and strength checks", "Guided exercise", "Hands-on joint and muscle work", "A home plan you can actually follow"],
    audience: "People recovering from a strain, a stiff joint, surgery, or pain that is changing how they sit, walk, or work.",
    bring: ["Comfortable clothes", "Any imaging reports you already have", "A list of current medicines", "The shoes you usually walk in"],
    photo: "mobility",
    featured: true,
  },
  {
    slug: "chiropractic",
    title: "Chiropractic",
    summary: "Spine and joint care for stiffness, headaches linked to the neck, and uneven movement.",
    lead: "Chiropractic care looks at how the spine and nearby joints are moving. A session may include joint work and advice on posture, lifting, and desk setup. It is not a substitute for emergency care if you have sudden weakness, numbness, or a recent injury.",
    covers: ["Spine and joint movement", "Neck and back stiffness", "Advice for desk and lifting habits", "A decision on whether joint work is suitable"],
    audience: "Adults with recurring neck or back stiffness who want a clinician to check whether hands-on joint care is appropriate.",
    bring: ["Notes on when the pain started", "Work or sport demands", "Previous treatment you have tried"],
    photo: "traction",
    featured: true,
  },
  {
    slug: "osteopathy",
    title: "Osteopathy",
    summary: "Whole-body manual care that connects posture, joints, and how you load them.",
    lead: "Osteopathy uses hands-on techniques and movement advice to look at more than the sore spot. The clinician checks how neighboring joints and muscles share load, then chooses techniques that fit your age and comfort.",
    covers: ["Posture and load sharing", "Gentle joint and soft-tissue work", "Breathing and rib movement when relevant", "Activity changes for the next week"],
    audience: "People who want a broader look at aches that move around, or stiffness after long hours of sitting or standing.",
    bring: ["Clothing you can move in", "A short history of the problem", "Questions you want answered in the visit"],
    photo: "cupping",
    featured: true,
  },
  {
    slug: "acupuncture",
    title: "Acupuncture",
    summary: "Fine needles used alongside other care for selected pain problems.",
    lead: "Acupuncture here is an added option inside a rehab plan, not a standalone promise. The clinician explains where needles would go, how long they stay in, and whether another approach fits better.",
    covers: ["Whether needling is suitable", "What you should feel during a session", "How it sits next to exercise", "Hygiene and aftercare"],
    audience: "Adults already being assessed for muscle or joint pain who want to ask about needling as one part of care.",
    bring: ["A list of bleeding or skin conditions", "Current medicines", "Comfortable clothing"],
    photo: "ems",
    featured: true,
  },
  {
    slug: "pediatric",
    title: "Pediatric physiotherapy",
    summary: "Movement support for babies, children, and teenagers, with parents in the room.",
    lead: "Pediatric sessions are paced for the child. The clinician watches play, walking, balance, or sport, then shows parents what to practice at home. Goals stay specific: a clearer step, easier stairs, or a return to play.",
    covers: ["Motor milestones and gait", "Balance and coordination", "Sport and growth-related aches", "Home practice for caregivers"],
    audience: "Families who want a movement check for a child, from early walking through school sport.",
    bring: ["The child’s usual shoes", "Any pediatric reports", "A favorite toy if it helps them settle"],
    photo: "paediatric",
    featured: true,
  },
  {
    slug: "speech-therapy",
    title: "Speech therapy",
    summary: "Support for speech, voice, and swallowing questions across ages.",
    lead: "Speech therapy looks at how clearly someone speaks, how the voice holds up, or how safely they swallow. Sessions mix assessment with practice. The therapist tells you what can be worked on here and what needs another specialist.",
    covers: ["Speech clarity", "Voice use", "Swallowing questions", "Practice for home or school"],
    audience: "Children and adults whose speech, voice, or swallowing is getting in the way of daily life.",
    bring: ["Examples of words or situations that are hard", "School or medical notes if you have them", "A quiet slot of time for the session"],
    photo: "paediatric",
    featured: true,
  },
  {
    slug: "neurological",
    title: "Neurological rehab",
    summary: "Retraining movement after stroke, Parkinson’s disease, or a spinal problem.",
    lead: "Neurological rehab breaks a hard task into smaller ones: sitting balance, a step, an arm reach, or a transfer. Progress is measured against your own baseline. The clinician will say if the clinic is the right setting or if hospital care comes first.",
    covers: ["Balance and transfers", "Walking practice", "Arm and hand tasks", "Caregiver coaching"],
    audience: "People leaving hospital, or living with a neurological condition, who need structured movement practice.",
    bring: ["Current therapy notes", "The walking aid you use", "A family member if transfers are difficult"],
    photo: "elderlyCare",
    featured: true,
  },
  {
    slug: "occupational-therapy",
    title: "Occupational therapy",
    summary: "Practical help for dressing, work tasks, school, and home routines.",
    lead: "Occupational therapy focuses on the activities you need to do, not only the injured part. That can mean hand use, energy pacing, or changing a task so it is safer at home or work.",
    covers: ["Daily tasks such as dressing and cooking", "Hand and arm function", "Work or school setup", "Simple equipment ideas"],
    audience: "People whose injury, illness, or development makes ordinary tasks harder than they used to be.",
    bring: ["A description of a typical day", "Photos of a difficult setup if useful", "Any splints you already use"],
    photo: "mobility",
    featured: true,
  },
  {
    slug: "behavioral-therapy",
    title: "Behavioral therapy",
    summary: "Psychology support for mood, behavior, and the stress that comes with injury.",
    lead: "A psychologist can help when pain, injury, or family stress is affecting sleep, school, or mood. This is a conversation-based service. It does not replace emergency mental health care.",
    covers: ["Coping with persistent pain", "Behavior concerns in children", "Stress around recovery", "When to seek urgent help instead"],
    audience: "Adults and families who want a psychologist involved alongside physical rehab.",
    bring: ["What you hope will be different", "Any previous therapy notes you are willing to share"],
    photo: "paediatric",
    featured: false,
  },
  {
    slug: "nutrition",
    title: "Nutrition",
    summary: "Food guidance that supports healing, energy, and training load.",
    lead: "Nutrition visits look at what you eat around injury, growth, or a long rehab block. Advice is practical and adjusted to your kitchen, not a fixed meal plan sold as a cure.",
    covers: ["Meals around recovery", "Weight and energy questions", "Sport or growth needs", "How food advice fits medical care you already have"],
    audience: "People in rehab who want food advice from someone who understands the physical plan.",
    bring: ["A rough note of yesterday’s meals", "Diet restrictions", "Relevant lab results if you have them"],
    photo: "therasonic",
    featured: false,
  },
  {
    slug: "home-visits",
    title: "Home visits",
    summary: "Therapy at home when travel to the clinic is not realistic.",
    lead: "Home visits are for people who cannot safely or comfortably come in. The clinician works with the space you have: a bed, a chair, a hallway. Availability depends on distance and scheduling, and a clinic visit is still better when equipment on site matters.",
    covers: ["Who qualifies for a home visit", "What the therapist can do without gym equipment", "How caregivers join the session", "When a clinic visit is the better choice"],
    audience: "Patients after surgery, with limited walking, or with a home setup that needs to be seen in person.",
    bring: ["A clear path to the room you will use", "Someone who can open the door", "Your current exercise sheet"],
    photo: "elderlyCare",
    featured: false,
  },
]

export function getService(slug: string) {
  const service = services.find((item) => item.slug === slug)
  if (!service) throw new Error(`Unknown service: ${slug}`)
  return service
}

export const conditions = [
  { id: "frozen-shoulder", title: "Frozen shoulder", text: "Stiffness that limits reaching overhead or behind the back. Care usually mixes gentle range work with a plan for pain, and it can take months. A clinician checks that the shoulder, not the neck, is the main driver." },
  { id: "spine", title: "Spine", text: "Neck and back pain from posture, lifting, or a flare of a longer problem. The visit looks at movement, nerve symptoms, and which positions ease or provoke pain." },
  { id: "chest-pain", title: "Chest pain", text: "New or severe chest pain needs urgent medical care first. Physio may later help with rib, posture, or breathing stiffness once a doctor has ruled out an emergency." },
  { id: "facial-palsy", title: "Facial palsy", text: "Facial weakness needs a careful look at the cause. Therapy, when appropriate, focuses on gentle movement and avoiding over-forcing the face." },
  { id: "hip-pain", title: "Hip pain", text: "Hip and groin pain can come from the joint, tendons, or the way you walk. Assessment includes walking, strength, and how the back and knee share load." },
  { id: "arthritis", title: "Arthritis", text: "Joint wear does not mean you should stop moving. Sessions aim for manageable activity, strength, and ways to pace painful days." },
  { id: "posture", title: "Posture", text: "Long sitting or standing often shows up as neck, shoulder, or back ache. Advice is about changing positions through the day, not holding one perfect pose." },
  { id: "wrist", title: "Wrist", text: "Wrist and hand pain from work, sport, or a sprain. Care may include load changes, splint advice, and tendon or joint exercises." },
  { id: "sciatica", title: "Sciatica", text: "Leg pain that seems to come from the back. The clinician screens nerve signs and decides whether movement care is enough or whether you should see a doctor promptly." },
  { id: "slipped-disc", title: "Slipped disc", text: "Disc-related back pain varies widely. Many people improve with guided movement. Sudden bladder changes, saddle numbness, or worsening weakness need urgent medical review, not a routine appointment." },
  { id: "neck", title: "Neck", text: "Neck pain with or without headache. Treatment looks at movement, desk setup, and whether the pain refers to the arm." },
  { id: "stroke", title: "Stroke", text: "After a stroke, rehab practices the tasks that matter: sitting, standing, walking, and using the arm. Goals are set with you and updated as ability changes." },
]

export const teamRoles = [
  { title: "Physiotherapist", text: "Leads movement assessment, exercise, and recovery plans for joints, muscles, and after injury." },
  { title: "Chiropractor", text: "Checks spinal and joint movement and uses hands-on care when it is suitable." },
  { title: "Osteopath", text: "Looks at how posture and neighboring joints share load, then chooses manual techniques to match." },
  { title: "Speech therapist", text: "Works on speech clarity, voice, and swallowing questions for children and adults." },
  { title: "Occupational therapist", text: "Helps with daily tasks, hand use, and practical changes at home, work, or school." },
  { title: "Psychologist", text: "Supports mood, behavior, and the stress that often sits beside a long recovery." },
]

export const privacySections = [
  { id: "what-we-collect", title: "What you share when you contact us", body: "If you book or ask questions on WhatsApp, phone, or email, we use the details you choose to send — such as your name, contact number, preferred day, and a short description of your concern — to reply and arrange care. Do not send identity-card numbers, full medical files, or payment card details in chat." },
  { id: "how-it-is-used", title: "How it is used", body: "Those details are used to schedule or decline a visit and to answer the question you asked. We do not sell contact details. Clinic records created after you become a patient are handled separately from this website." },
  { id: "email", title: "Email and phone", body: "You can email or call using the details on the contact page. WhatsApp is the main way to request a visit on this site." },
]

export const termsSections = [
  { id: "information", title: "Information on this site", body: "Pages describe the kinds of care the clinic offers. They are not a diagnosis, a treatment plan, or a promise of a result. A clinician decides what is appropriate after speaking with you." },
  { id: "appointments", title: "Appointments", body: "Messaging on WhatsApp does not reserve a time. A visit is confirmed only when the clinic replies. Urgent symptoms, including chest pain, sudden weakness, or trouble breathing, need emergency services rather than a routine booking." },
  { id: "payments", title: "Payments", body: "This website does not take card payments, deposits, or insurance claims. Any fee is explained by the clinic before a confirmed visit." },
]
