import { Box } from "grommet";

import { useApiKey } from "../../../../hooks/apiKey";
import { isServer } from "../../../../lib/detection";
import { routes } from "../../../../lib/routes";
import { copy } from "../../../../theme/copy";
import CodeBlock from "../../../shared/CodeBlock";
import ExternalLink from "../../../shared/ExternalLink";
import Text from "../../../shared/Text";
import { labelTextProps } from "../helpers";

const pluginHref =
  "https://app.netlify.com/plugins/netlify-plugin-qawolf/install";
const variablesHref =
  "https://docs.netlify.com/configure-builds/environment-variables/#declare-variables";

export default function NetlifyBuildPlugin(): JSX.Element {
  const { apiKey } = useApiKey();

  const docsHref = new URL(
    `${routes.docs}/run-tests-on-netlify-deployment#install-qa-wolf-build-plugin`,
    isServer() ? "https://www.qawolf.com" : window.location.origin
  ).href;

  return (
    <>
      <Box align="center" direction="row">
        <Text
          {...labelTextProps}
          margin={{ ...labelTextProps.margin, right: "xxsmall" }}
        >
          {copy.setUp}
        </Text>
        <ExternalLink isBold href={docsHref} margin={labelTextProps.margin}>
          {`(${copy.docs})`}
        </ExternalLink>
      </Box>
      <ExternalLink href={pluginHref}>{copy.netlifyBuildPlugin}</ExternalLink>
      <ExternalLink href={variablesHref} margin={{ vertical: "small" }}>
        {copy.netlifyBuildVariable}
      </ExternalLink>
      <CodeBlock>{apiKey}</CodeBlock>
    </>
  );
}