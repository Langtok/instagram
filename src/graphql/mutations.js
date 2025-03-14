/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createPostHashtag = /* GraphQL */ `
  mutation CreatePostHashtag(
    $input: CreatePostHashtagInput!
    $condition: ModelPostHashtagConditionInput
  ) {
    createPostHashtag(input: $input, condition: $condition) {
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
export const updatePostHashtag = /* GraphQL */ `
  mutation UpdatePostHashtag(
    $input: UpdatePostHashtagInput!
    $condition: ModelPostHashtagConditionInput
  ) {
    updatePostHashtag(input: $input, condition: $condition) {
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
export const deletePostHashtag = /* GraphQL */ `
  mutation DeletePostHashtag(
    $input: DeletePostHashtagInput!
    $condition: ModelPostHashtagConditionInput
  ) {
    deletePostHashtag(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createLike = /* GraphQL */ `
  mutation CreateLike(
    $input: CreateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    createLike(input: $input, condition: $condition) {
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
export const updateLike = /* GraphQL */ `
  mutation UpdateLike(
    $input: UpdateLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    updateLike(input: $input, condition: $condition) {
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
export const deleteLike = /* GraphQL */ `
  mutation DeleteLike(
    $input: DeleteLikeInput!
    $condition: ModelLikeConditionInput
  ) {
    deleteLike(input: $input, condition: $condition) {
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
export const createUserFollower = /* GraphQL */ `
  mutation CreateUserFollower(
    $input: CreateUserFollowerInput!
    $condition: ModelUserFollowerConditionInput
  ) {
    createUserFollower(input: $input, condition: $condition) {
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
export const updateUserFollower = /* GraphQL */ `
  mutation UpdateUserFollower(
    $input: UpdateUserFollowerInput!
    $condition: ModelUserFollowerConditionInput
  ) {
    updateUserFollower(input: $input, condition: $condition) {
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
export const deleteUserFollower = /* GraphQL */ `
  mutation DeleteUserFollower(
    $input: DeleteUserFollowerInput!
    $condition: ModelUserFollowerConditionInput
  ) {
    deleteUserFollower(input: $input, condition: $condition) {
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
export const createGroup = /* GraphQL */ `
  mutation CreateGroup(
    $input: CreateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    createGroup(input: $input, condition: $condition) {
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
export const updateGroup = /* GraphQL */ `
  mutation UpdateGroup(
    $input: UpdateGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    updateGroup(input: $input, condition: $condition) {
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
export const deleteGroup = /* GraphQL */ `
  mutation DeleteGroup(
    $input: DeleteGroupInput!
    $condition: ModelGroupConditionInput
  ) {
    deleteGroup(input: $input, condition: $condition) {
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
export const createGroupMember = /* GraphQL */ `
  mutation CreateGroupMember(
    $input: CreateGroupMemberInput!
    $condition: ModelGroupMemberConditionInput
  ) {
    createGroupMember(input: $input, condition: $condition) {
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
export const updateGroupMember = /* GraphQL */ `
  mutation UpdateGroupMember(
    $input: UpdateGroupMemberInput!
    $condition: ModelGroupMemberConditionInput
  ) {
    updateGroupMember(input: $input, condition: $condition) {
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
export const deleteGroupMember = /* GraphQL */ `
  mutation DeleteGroupMember(
    $input: DeleteGroupMemberInput!
    $condition: ModelGroupMemberConditionInput
  ) {
    deleteGroupMember(input: $input, condition: $condition) {
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
