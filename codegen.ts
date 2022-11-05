
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "app/frontend/graphql/schema.graphql",
  documents: "app/frontend/graphql/queries/**/*.gql",
  generates: {
    "app/frontend/graphql/generated-types.ts": {
      plugins: ['typescript-react-apollo']
    }
  }
};

export default config;