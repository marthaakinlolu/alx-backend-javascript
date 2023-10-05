export interface MajorCredits {
  credits: number & { __brand: 'MajorCredits.credits' };
}

export interface MinorCredits {
  credits: number & { __brand: 'MinorCredits.credits' };
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

