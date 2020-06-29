export interface Points {
  pullRequests: number;
  comments: number;
  issues: number;
  merges: number;
}

export interface Contributions extends Points {}
export type Avatar = string;
export type Username = string;

export interface LeaderboardData {
  githubId: string;
  repositoryId: string;
  points: Points;
  contributions: Contributions;
  avatar: Avatar;
  username: Username;
  totalPoints: number;
  totalContributions: number;
}