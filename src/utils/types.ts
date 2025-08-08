export interface PersonalInfo {
    name: string;
    dob: string;
    birthPlace: string;
    height: string;
    weight: string;
    zodiac: string;
    hobbies: string[];
    bodyMeasurements: {
      chest: string;
      waist: string;
    };
  }
  
  export interface Family {
    father: string;
    mother: string;
    stepMother: string;
    siblings: { name: string; relation: string }[];
    spouse: {
      name: string;
      marriedDate: string;
    };
    children: { name: string; dob: string }[];
  }
  
  export interface Career {
    debut: {
      film: string;
      year: number;
      award: string;
    };
    breakthrough: { film: string; year: number }[];
    definingFilms: { film: string; year: number; image: string }[];
    filmography: {
      totalLeadRoles: number;
      careerSpan: number;
      notableFilms: string[];
    };
    upcomingProject: {
      title: string;
      director: string;
      genre: string;
      release: string;
    };
  }
  
  export interface Achievements {
    awards: { name: string; count?: number; for?: string }[];
    records: {
      television: {
        film: string;
        telecasts: number;
        note: string;
      };
      boxOffice: string[];
    };
    recognitions: string[];
  }
  
  export interface Philanthropy {
    annualDonation: number;
    donationPercentage: number;
    foundation: string;
    adoptedVillages: { name: string; state: string }[];
    heartSurgeries: {
      total: number;
      initialMilestone: number;
      partners: string[];
      foundation: string;
    };
    socialImpact: { film: string; impact: string }[];
  }
  
  export interface BusinessVenture {
    name: string;
    type: string;
  }
  
  export interface MaheshBabuData {
    personalInfo: PersonalInfo;
    family: Family;
    career: Career;
    achievements: Achievements;
    philanthropy: Philanthropy;
    businessVentures: BusinessVenture[];
    cultClassics: CultClassic[];
    actionLegacy: ActionLegacy;
    superstarJourney: SuperstarJourneyPhase[];
    familyAudienceConnection: FamilyAudienceConnection[];
    televisionDominance: TelevisionDominance;
  }
  
  export interface CultClassic {
    film: string;
    year: number;
    director: string;
    whyIconic: string;
    cultStatus: string;
    legacy: string;
    image: string;
    fanLove?: string;
    boxOffice?: string;
    whyLegendary?: string[];
    currentStatus?: string;
  }
  
  export interface ActionLegacy {
    film: string;
    year: number;
    stuntInnovation: string;
    physicalTransformation: string;
    legacy: string;
    fanImpact: string;
    image: string;
  }
  
  export interface SuperstarJourneyPhase {
    phase: string;
    years: string;
    title: string;
    description: string[];
  }
  
  export interface FamilyAudienceConnection {
    title: string;
    points: string[];
  }
  
  export interface TelevisionDominance {
      film: string;
      telecasts: string;
      impact: string[];
  }
