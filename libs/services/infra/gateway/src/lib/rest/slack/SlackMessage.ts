import { SlackMessageBlock } from './SlackMessageBlock'

export class SlackMessage {
  text: string
  blocks?: SlackMessageBlock[]
}
