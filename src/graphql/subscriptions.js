/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onCreatePost(filter: $filter, owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onUpdatePost(filter: $filter, owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onDeletePost(filter: $filter, owner: $owner) {
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
export const onCreatePostHashtag = /* GraphQL */ `
  subscription OnCreatePostHashtag(
    $filter: ModelSubscriptionPostHashtagFilterInput
    $owner: String
  ) {
    onCreatePostHashtag(filter: $filter, owner: $owner) {
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
export const onUpdatePostHashtag = /* GraphQL */ `
  subscription OnUpdatePostHashtag(
    $filter: ModelSubscriptionPostHashtagFilterInput
    $owner: String
  ) {
    onUpdatePostHashtag(filter: $filter, owner: $owner) {
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
export const onDeletePostHashtag = /* GraphQL */ `
  subscription OnDeletePostHashtag(
    $filter: ModelSubscriptionPostHashtagFilterInput
    $owner: String
  ) {
    onDeletePostHashtag(filter: $filter, owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onCreateComment(filter: $filter, owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onUpdateComment(filter: $filter, owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onDeleteComment(filter: $filter, owner: $owner) {
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
export const onCreateLike = /* GraphQL */ `
  subscription OnCreateLike(
    $filter: ModelSubscriptionLikeFilterInput
    $owner: String
  ) {
    onCreateLike(filter: $filter, owner: $owner) {
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
export const onUpdateLike = /* GraphQL */ `
  subscription OnUpdateLike(
    $filter: ModelSubscriptionLikeFilterInput
    $owner: String
  ) {
    onUpdateLike(filter: $filter, owner: $owner) {
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
export const onDeleteLike = /* GraphQL */ `
  subscription OnDeleteLike(
    $filter: ModelSubscriptionLikeFilterInput
    $owner: String
  ) {
    onDeleteLike(filter: $filter, owner: $owner) {
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
export const onCreateUserFollower = /* GraphQL */ `
  subscription OnCreateUserFollower(
    $filter: ModelSubscriptionUserFollowerFilterInput
    $owner: String
  ) {
    onCreateUserFollower(filter: $filter, owner: $owner) {
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
export const onUpdateUserFollower = /* GraphQL */ `
  subscription OnUpdateUserFollower(
    $filter: ModelSubscriptionUserFollowerFilterInput
    $owner: String
  ) {
    onUpdateUserFollower(filter: $filter, owner: $owner) {
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
export const onDeleteUserFollower = /* GraphQL */ `
  subscription OnDeleteUserFollower(
    $filter: ModelSubscriptionUserFollowerFilterInput
    $owner: String
  ) {
    onDeleteUserFollower(filter: $filter, owner: $owner) {
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
export const onCreateGroup = /* GraphQL */ `
  subscription OnCreateGroup(
    $filter: ModelSubscriptionGroupFilterInput
    $owner: String
  ) {
    onCreateGroup(filter: $filter, owner: $owner) {
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
export const onUpdateGroup = /* GraphQL */ `
  subscription OnUpdateGroup(
    $filter: ModelSubscriptionGroupFilterInput
    $owner: String
  ) {
    onUpdateGroup(filter: $filter, owner: $owner) {
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
export const onDeleteGroup = /* GraphQL */ `
  subscription OnDeleteGroup(
    $filter: ModelSubscriptionGroupFilterInput
    $owner: String
  ) {
    onDeleteGroup(filter: $filter, owner: $owner) {
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
export const onCreateGroupMember = /* GraphQL */ `
  subscription OnCreateGroupMember(
    $filter: ModelSubscriptionGroupMemberFilterInput
    $owner: String
  ) {
    onCreateGroupMember(filter: $filter, owner: $owner) {
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
export const onUpdateGroupMember = /* GraphQL */ `
  subscription OnUpdateGroupMember(
    $filter: ModelSubscriptionGroupMemberFilterInput
    $owner: String
  ) {
    onUpdateGroupMember(filter: $filter, owner: $owner) {
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
export const onDeleteGroupMember = /* GraphQL */ `
  subscription OnDeleteGroupMember(
    $filter: ModelSubscriptionGroupMemberFilterInput
    $owner: String
  ) {
    onDeleteGroupMember(filter: $filter, owner: $owner) {
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
