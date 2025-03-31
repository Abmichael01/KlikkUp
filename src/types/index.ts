export type User = {
  id?: number;
  username: string;
  email: string;
  is_admin?: boolean;
  is_staff?: boolean;
  roles?: number[];
  point_balance?: number;
  xp?: number;
  xp_in_level: number;
  current_level?: number;
  current_level_xp?: number;
  xp_needed?: number;
  xp_remaining?: number;
  next_level?: number;
  next_level_xp?: number;
  percent_xp_in_level?: number;
  total_referrals?: number;
};

export type ReferralUser = {
  id: number;
  username: string;
  email: string;
  point_balance: number;
  xp: number;
  total_referrals: number;
}

export type ReferralsData = {
    ref_code: string;
    total_referrals: number;
    referrals: ReferralUser[];
    points_earned: number;
    rank: number;
    leaderboard: ReferralUser[];
}

export type RegisterData = {
  username: string;
  email: string;
  coupon: string;
  ref_code: string;
  password: string;
  re_password: string;
}

export type LoginData = {
  username: string;
  password: string;
};

export type Coupon = {
  id: number;
  code: string;
  sold: boolean;
  used: boolean;
}

export type ApiResponse = {
  error?: string | Record<string, string[]>;
  message?: string | undefined;
  [key: string]: unknown;
}

export type Task = {
  id?: number;
  title: string;
  link: string;
  reward: number;
  confirmation_code?: string;
}

export type Story = {
  id?: number;
  title: string;
  body: string;
  reward: number;
}

export type Announcement = {
  id: number;
  title: string;
  message: string;
  link?: string; // Optional link for the announcement
};