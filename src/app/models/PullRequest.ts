

export interface PullRequestUserData {
  login: string;
  githubId: string;
  avatar_url: string;
  type: string;
}

export interface PullRequestData {
  url: string;
  pullRequestID: string;
  nodeId: string;
  created_at: Date;
  updated_at: Date;
  closed_at: Date;
  merged_at: Date;
}

export interface Repository {
  repositoryId: string;
  name: string;
  private: boolean;
}

export interface PullRequest {
  state: string;
  number: number;
  pullRequestData: PullRequestData;
  pullRequestUserData: PullRequestUserData;
  repository: Repository;
}
