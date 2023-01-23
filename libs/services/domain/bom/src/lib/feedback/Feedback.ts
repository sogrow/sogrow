import { CustomerSatisfactionScore } from './CustomerSatisfactionScore'

export class Feedback {
  id?: string
  userId?: string
  csat: CustomerSatisfactionScore
  message?: string
}
