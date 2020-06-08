import { User } from './User';
import { Repository } from '../models/Repository';

export enum EventStatus {
  OPENED = 'opened',
  CLOSED = 'closed',
  PAUSED = 'paused',
};

export interface Event {
  _id?: string;
  status?: EventStatus;
  creatorId: string;
  startDate: Date;
  endDate: Date;
  pullRequestPoints: number;
  issuePoints: number;
  commentsPoints: number;
  mergedPullRequestPoints: number;
  winner?: User;
  repository: Repository;
}