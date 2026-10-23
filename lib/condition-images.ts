/**
 * Condition guide photos (Unsplash, free license) stored under /public/images/conditions/.
 * Each file is chosen to match the body area or rehab activity described in the guide.
 */
export type ConditionImage = {
  src: string
  alt: string
  objectPosition?: string
}

const conditionPhotoBase = "/images/conditions"

const photos: Record<string, ConditionImage> = {
  "frozen-shoulder": {
    src: `${conditionPhotoBase}/frozen-shoulder.jpg`,
    alt: "Physiotherapist assisting a patient with shoulder resistance training in clinic",
    objectPosition: "50% 35%",
  },
  spine: {
    src: `${conditionPhotoBase}/spine.jpg`,
    alt: "Therapist treating upper back and spine during a manual therapy session",
    objectPosition: "50% 30%",
  },
  "chest-pain": {
    src: `${conditionPhotoBase}/chest-pain.jpg`,
    alt: "Patient lying supine for calm breathing and rib mobility work after medical clearance",
    objectPosition: "50% 40%",
  },
  "facial-palsy": {
    src: `${conditionPhotoBase}/facial-palsy.jpg`,
    alt: "Person gently touching the face during neuromuscular recovery awareness exercises",
    objectPosition: "50% 25%",
  },
  "hip-pain": {
    src: `${conditionPhotoBase}/hip-pain.jpg`,
    alt: "Physiotherapist measuring and assessing a patient's leg and hip range of motion",
    objectPosition: "50% 45%",
  },
  arthritis: {
    src: `${conditionPhotoBase}/arthritis.jpg`,
    alt: "Clinician supervising light strengthening exercises for joint-friendly movement",
    objectPosition: "50% 40%",
  },
  posture: {
    src: `${conditionPhotoBase}/posture.jpg`,
    alt: "Person seated at a desk — typical posture and ergonomics reviewed in clinic",
    objectPosition: "50% 35%",
  },
  wrist: {
    src: `${conditionPhotoBase}/wrist.jpg`,
    alt: "Close view of a hand and wrist resting during assessment of strain or overuse",
    objectPosition: "50% 50%",
  },
  sciatica: {
    src: `${conditionPhotoBase}/sciatica.jpg`,
    alt: "Clinician examining a patient's leg and nerve tension during lower-back assessment",
    objectPosition: "50% 40%",
  },
  "slipped-disc": {
    src: `${conditionPhotoBase}/slipped-disc.jpg`,
    alt: "Gentle upper-back and core support work on a therapy mat",
    objectPosition: "50% 35%",
  },
  neck: {
    src: `${conditionPhotoBase}/neck.jpg`,
    alt: "Clinician performing a careful upper back and neck adjustment in a treatment room",
    objectPosition: "50% 30%",
  },
  stroke: {
    src: `${conditionPhotoBase}/stroke.jpg`,
    alt: "Older adult working on strength and mobility in a supervised rehabilitation gym",
    objectPosition: "50% 40%",
  },
}

export function getConditionImage(conditionId: string): ConditionImage {
  return photos[conditionId] ?? photos.spine
}
