
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "app/frontend/graphql/schema.graphql",
  documents: "app/frontend/**/*.tsx",
  generates: {
    "app/frontend/graphql/": {
      preset: "client",
      plugins: ['typescript-react-apollo']
    }
  }
};

export default config;
