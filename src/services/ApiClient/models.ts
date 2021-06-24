
export interface User {
  id: number;
  username?: string;
  email?: string;
}

export enum BodyPart {
  'upper', 
  'lower', 
  'arms', 
  'legs', 
  'glutes', 
  'core', 
  'back', 
  'shoulders', 
  'biceps', 
  'triceps', 
  'hamstrings', 
  'quads', 
  'calves', 
  'lower_back', 
  'upper_back', 
  'chest', 
  'fullbody',
}

export interface Exercise {
  name: string;
  description: string;
  minReps: number;
  maxReps: number;
  videoUrl: string;
  imageUrl: string;
  bodyPart: BodyPart;
}

export interface Session {
  userId: number;
  createdAt: Date;
  stoppedAt: Date;
}

export interface ExerciseSession {
  exerciseId: number;
  sessionId: number;
  stoppedAt: Date;
  reps: number;
}