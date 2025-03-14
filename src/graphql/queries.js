/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const popularHashtags = /* GraphQL */ `
  query PopularHashtags {
    popularHashtags
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      bio
      avatar
      isPrivate
      posts {
        nextToken
        __typename
      }
      followers {
        nextToken
        __typename
      }
      following {
        nextToken
        __typename
      }
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      groupMemberships {
        nextToken
        __typename
      }
      tags
      socialLinks
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        bio
        avatar
        isPrivate
        tags
        socialLinks
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userByUsername = /* GraphQL */ `
  query UserByUsername(
    $username: String!
    $sortDirection: ModelSortDirection
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        email
        bio
        avatar
        isPrivate
        tags
        socialLinks
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      userID
      owner {
        id
        username
        email
        bio
        avatar
        isPrivate
        tags
        socialLinks
        createdAt
        updatedAt
        owner
        __typename
      }
      groupID
      group {
        id
        name
        avatar
        createdAt
        updatedAt
        owner
        __typename
      }
      caption
      image
      video
      audio
      type
      hashtags {
        nextToken
        __typename
      }
      tags
      location
      createdAt
      likes {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        groupID
        caption
        image
        video
        audio
        type
        tags
        location
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const postsByUserIDAndCreatedAt = /* GraphQL */ `
  query PostsByUserIDAndCreatedAt(
    $userID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByUserIDAndCreatedAt(
      userID: $userID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        groupID
        caption
        image
        video
        audio
        type
        tags
        location
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const postsByGroupIDAndCreatedAt = /* GraphQL */ `
  query PostsByGroupIDAndCreatedAt(
    $groupID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByGroupIDAndCreatedAt(
      groupID: $groupID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        groupID
        caption
        image
        video
        audio
        type
        tags
        location
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPostHashtag = /* GraphQL */ `
  query GetPostHashtag($id: ID!) {
    getPostHashtag(id: $id) {
      id
      postID
      post {
        id
        userID
        groupID
        caption
        image
        video
        audio
        type
        tags
        location
        createdAt
        updatedAt
        __typename
      }
      hashtag
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listPostHashtags = /* GraphQL */ `
  query ListPostHashtags(
    $filter: ModelPostHashtagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostHashtags(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        hashtag
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const postHashtagsByPostID = /* GraphQL */ `
  query PostHashtagsByPostID(
    $postID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPostHashtagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postHashtagsByPostID(
      postID: $postID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postID
        hashtag
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const postsByHashtag = /* GraphQL */ `
  query PostsByHashtag(
    $hashtag: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPostHashtagFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByHashtag(
      hashtag: $hashtag
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postID
        hashtag
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postID
      post {
        id
        userID
        groupID
        caption
        image
        video
        audio
        type
        tags
        location
        createdAt
        updatedAt
        __typename
      }
      userID
      owner {
        id
        username
        email
        bio
        avatar
        isPrivate
        tags
        socialLinks
        createdAt
        updatedAt
        owner
        __typename
      }
      content
      media
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        userID
        content
        media
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const commentsByPostIDAndCreatedAt = /* GraphQL */ `
  query CommentsByPostIDAndCreatedAt(
    $postID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByPostIDAndCreatedAt(
      postID: $postID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postID
        userID
        content
        media
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const commentsByUserID = /* GraphQL */ `
  query CommentsByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    commentsByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postID
        userID
        content
        media
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLike = /* GraphQL */ `
  query GetLike($id: ID!) {
    getLike(id: $id) {
      id
      postID
      post {
        id
        userID
        groupID
        caption
        image
        video
        audio
        type
        tags
        location
        createdAt
        updatedAt
        __typename
      }
      userID
      user {
        id
        username
        email
        bio
        avatar
        isPrivate
        tags
        socialLinks
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        postID
        userID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const likesByPostIDAndCreatedAt = /* GraphQL */ `
  query LikesByPostIDAndCreatedAt(
    $postID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesByPostIDAndCreatedAt(
      postID: $postID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postID
        userID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const likesByUserID = /* GraphQL */ `
  query LikesByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelLikeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    likesByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        postID
        userID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserFollower = /* GraphQL */ `
  query GetUserFollower($id: ID!) {
    getUserFollower(id: $id) {
      id
      followerID
      follower {
        id
        username
        email
        bio
        avatar
        isPrivate
        tags
        socialLinks
        createdAt
        updatedAt
        owner
        __typename
      }
      followingID
      following {
        id
        username
        email
        bio
        avatar
        isPrivate
        tags
        socialLinks
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listUserFollowers = /* GraphQL */ `
  query ListUserFollowers(
    $filter: ModelUserFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserFollowers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        followerID
        followingID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userFollowersByFollowerIDAndCreatedAt = /* GraphQL */ `
  query UserFollowersByFollowerIDAndCreatedAt(
    $followerID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userFollowersByFollowerIDAndCreatedAt(
      followerID: $followerID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        followerID
        followingID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userFollowersByFollowingIDAndCreatedAt = /* GraphQL */ `
  query UserFollowersByFollowingIDAndCreatedAt(
    $followingID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userFollowersByFollowingIDAndCreatedAt(
      followingID: $followingID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        followerID
        followingID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGroup = /* GraphQL */ `
  query GetGroup($id: ID!) {
    getGroup(id: $id) {
      id
      name
      avatar
      members {
        nextToken
        __typename
      }
      posts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listGroups = /* GraphQL */ `
  query ListGroups(
    $filter: ModelGroupFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        avatar
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getGroupMember = /* GraphQL */ `
  query GetGroupMember($id: ID!) {
    getGroupMember(id: $id) {
      id
      userID
      user {
        id
        username
        email
        bio
        avatar
        isPrivate
        tags
        socialLinks
        createdAt
        updatedAt
        owner
        __typename
      }
      groupID
      group {
        id
        name
        avatar
        createdAt
        updatedAt
        owner
        __typename
      }
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listGroupMembers = /* GraphQL */ `
  query ListGroupMembers(
    $filter: ModelGroupMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGroupMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        groupID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const groupMembersByUserID = /* GraphQL */ `
  query GroupMembersByUserID(
    $userID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelGroupMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    groupMembersByUserID(
      userID: $userID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        groupID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const groupMembersByGroupIDAndCreatedAt = /* GraphQL */ `
  query GroupMembersByGroupIDAndCreatedAt(
    $groupID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelGroupMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    groupMembersByGroupIDAndCreatedAt(
      groupID: $groupID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userID
        groupID
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
