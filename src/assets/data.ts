export enum SocialMedia {
  FACEBOOK = "facebook",
  TWITTER = "twitter",
  INSTAGRAM = "instagram",
  YOUTUBE = "youtube",
}

export const facebookData = {
  username: "nathanf",
  followers: {
    count: 1987,
    countChange: 12,
  },
  pageViews: {
    count: 87,
    percentageChange: 3,
  },
  likes: {
    count: 52,
    percentageChange: -2,
  },
};

export const twitterData = {
  username: "nathanf",
  followers: {
    count: 1044,
    countChange: 99,
  },
  retweets: {
    count: 117,
    percentageChange: 303,
  },
  likes: {
    count: 507,
    percentageChange: 553,
  },
};

export const instagramData = {
  username: "realnathanf",
  followers: {
    count: 11000,
    countChange: 1099,
  },
  profileViews: {
    count: 52000,
    percentageChange: 1375,
  },
  likes: {
    count: 5462,
    percentageChange: 2257,
  },
};

export const youtubeData = {
  username: "Nathan F.",
  followers: {
    count: 8239,
    countChange: -144,
  },
  totalViews: {
    count: 1407,
    percentageChange: -12,
  },
  likes: {
    count: 107,
    percentageChange: -19,
  },
};

export const socialMediaData = {
  [SocialMedia.FACEBOOK]: facebookData,
  [SocialMedia.TWITTER]: twitterData,
  [SocialMedia.INSTAGRAM]: instagramData,
  [SocialMedia.YOUTUBE]: youtubeData,
};
