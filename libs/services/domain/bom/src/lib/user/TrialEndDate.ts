export class TrialEndDate {
  date: Date

  static of(date: Date): TrialEndDate {
    const trialEndDate = new TrialEndDate()
    trialEndDate.date = date
    return trialEndDate
  }

  static ofSafely(date?: Date): TrialEndDate | null {
    if (date) {
      return TrialEndDate.of(date)
    }
    return null
  }

  static fromString(date: string): TrialEndDate | null {
    const trialEndDate = new TrialEndDate()
    trialEndDate.date = new Date(date)
    return trialEndDate
  }

  static fromStringSafely(date?: string): TrialEndDate | null {
    if (date) {
      return TrialEndDate.fromString(date)
    }
    return null
  }

  static fromDay(day: number): TrialEndDate {
    const trialEndDate = new TrialEndDate()
    trialEndDate.date = new Date()
    trialEndDate.date.setDate(trialEndDate.date.getDate() + day)
    return trialEndDate
  }

  toString(): string {
    return this.date.toISOString()
  }
}
