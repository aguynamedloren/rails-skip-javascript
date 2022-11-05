import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;

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