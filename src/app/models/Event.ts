import { User } from './User';

export enum EventStatus {
  OPENED = 'opened',
  CLOSED = 'closed',
  PAUSED = 'paused',
};

export interface Event {
  _id?: string;
  repositoryId?: string;
  status?: EventStatus;
  creator: User;
  startDate: Date;
  endDate: Date;
  pullRequestPoints: number;
  issuePoints: number;
  commentsPoints: number;
  mergedPullRequestPoints: number;
  winner?: User;
}