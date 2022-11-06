import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

export type Book = {
  __typename?: 'Book';
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
};

export type Comment = {
  __typename?: 'Comment';
  createdAt: Scalars['ISO8601DateTime'];
  post: Post;
  text?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
  uuid: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  body?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Comment>>;
  createdAt: Scalars['ISO8601DateTime'];
  title?: Maybe<Scalars['String']>;
  updatedAt: Scalars['ISO8601DateTime'];
  uuid: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  books: Array<Book>;
  post?: Maybe<Post>;
  posts: Array<Post>;
};


export type QueryPostArgs = {
  uuid: Scalars['ID'];
};

export type AllBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type AllBooksQuery = { __typename?: 'Query', books: Array<{ __typename?: 'Book', id: string, title?: string | null }> };

export type AllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type AllPostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', uuid: string, title?: string | null, body?: string | null, comments?: Array<{ __typename?: 'Comment', uuid: string, text?: string | null }> | null }> };

export type SinglePostQueryVariables = Exact<{
  uuid: Scalars['ID'];
}>;


export type SinglePostQuery = { __typename?: 'Query', post?: { __typename?: 'Post', uuid: string, title?: string | null, body?: string | null, comments?: Array<{ __typename?: 'Comment', uuid: string, text?: string | null }> | null } | null };


export const AllBooksDocument = gql`
    query allBooks {
  books {
    id
    title
  }
}
    `;

/**
 * __useAllBooksQuery__
 *
 * To run a query within a React component, call `useAllBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllBooksQuery(baseOptions?: Apollo.QueryHookOptions<AllBooksQuery, AllBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllBooksQuery, AllBooksQueryVariables>(AllBooksDocument, options);
      }
export function useAllBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllBooksQuery, AllBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllBooksQuery, AllBooksQueryVariables>(AllBooksDocument, options);
        }
export type AllBooksQueryHookResult = ReturnType<typeof useAllBooksQuery>;
export type AllBooksLazyQueryHookResult = ReturnType<typeof useAllBooksLazyQuery>;
export type AllBooksQueryResult = Apollo.QueryResult<AllBooksQuery, AllBooksQueryVariables>;
export const AllPostsDocument = gql`
    query allPosts {
  posts {
    uuid
    title
    body
    comments {
      uuid
      text
    }
  }
}
    `;

/**
 * __useAllPostsQuery__
 *
 * To run a query within a React component, call `useAllPostsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllPostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllPostsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllPostsQuery(baseOptions?: Apollo.QueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, options);
      }
export function useAllPostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllPostsQuery, AllPostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllPostsQuery, AllPostsQueryVariables>(AllPostsDocument, options);
        }
export type AllPostsQueryHookResult = ReturnType<typeof useAllPostsQuery>;
export type AllPostsLazyQueryHookResult = ReturnType<typeof useAllPostsLazyQuery>;
export type AllPostsQueryResult = Apollo.QueryResult<AllPostsQuery, AllPostsQueryVariables>;
export const SinglePostDocument = gql`
    query singlePost($uuid: ID!) {
  post(uuid: $uuid) {
    uuid
    title
    body
    comments {
      uuid
      text
    }
  }
}
    `;

/**
 * __useSinglePostQuery__
 *
 * To run a query within a React component, call `useSinglePostQuery` and pass it any options that fit your needs.
 * When your component renders, `useSinglePostQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSinglePostQuery({
 *   variables: {
 *      uuid: // value for 'uuid'
 *   },
 * });
 */
export function useSinglePostQuery(baseOptions: Apollo.QueryHookOptions<SinglePostQuery, SinglePostQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SinglePostQuery, SinglePostQueryVariables>(SinglePostDocument, options);
      }
export function useSinglePostLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SinglePostQuery, SinglePostQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SinglePostQuery, SinglePostQueryVariables>(SinglePostDocument, options);
        }
export type SinglePostQueryHookResult = ReturnType<typeof useSinglePostQuery>;
export type SinglePostLazyQueryHookResult = ReturnType<typeof useSinglePostLazyQuery>;
export type SinglePostQueryResult = Apollo.QueryResult<SinglePostQuery, SinglePostQueryVariables>;