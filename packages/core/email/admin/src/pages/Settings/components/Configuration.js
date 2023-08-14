/* eslint-disable no-useless-escape */

import React from 'react';

import { Flex, Grid, GridItem, Option, Select, TextInput, Typography } from '@strapi/design-system';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import styled from 'styled-components';

const DocumentationLink = styled.a`
  color: ${({ theme }) => theme.colors.primary600};
`;

const Configuration = ({ config }) => {
  const { formatMessage } = useIntl();

  return (
    <Flex direction="column" alignItems="stretch" gap={4}>
      <Flex direction="column" alignItems="stretch" gap={1}>
        <Typography variant="delta" as="h2">
          {formatMessage({
            id: 'email.Settings.email.plugin.title.config',
            defaultMessage: 'Configuration',
          })}
        </Typography>
        <Typography>
          {formatMessage(
            {
              id: 'email.Settings.email.plugin.text.configuration',
              defaultMessage:
                'The plugin is configured through the {file} file, checkout this {link} for the documentation.',
            },
            {
              file: './config/plugins.js',
              link: (
                <DocumentationLink
                  href="https://docs.strapi.io/developer-docs/latest/plugins/email.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {formatMessage({
                    id: 'email.link',
                    defaultMessage: 'Link',
                  })}
                </DocumentationLink>
              ),
            }
          )}
        </Typography>
      </Flex>
      <Grid gap={5}>
        <GridItem col={6} s={12}>
          <TextInput
            name="shipper-email"
            label={formatMessage({
              id: 'email.Settings.email.plugin.label.defaultFrom',
              defaultMessage: 'Default sender email',
            })}
            placeholder={formatMessage({
              id: 'email.Settings.email.plugin.placeholder.defaultFrom',
              defaultMessage: "ex: Strapi No-Reply '<'no-reply@strapi.io'>'",
            })}
            disabled
            onChange={() => {}}
            value={config.settings.defaultFrom}
          />
        </GridItem>
        <GridItem col={6} s={12}>
          <TextInput
            name="response-email"
            label={formatMessage({
              id: 'email.Settings.email.plugin.label.defaultReplyTo',
              defaultMessage: 'Default response email',
            })}
            placeholder={formatMessage({
              id: 'email.Settings.email.plugin.placeholder.defaultReplyTo',
              defaultMessage: `ex: Strapi '<'example@strapi.io'>'`,
            })}
            disabled
            onChange={() => {}}
            value={config.settings.defaultReplyTo}
          />
        </GridItem>
        <GridItem col={6} s={12}>
          <Select
            name="email-provider"
            label={formatMessage({
              id: 'email.Settings.email.plugin.label.provider',
              defaultMessage: 'Email provider',
            })}
            disabled
            onChange={() => {}}
            value={config.provider}
          >
            <Option value={config.provider}>{config.provider}</Option>
          </Select>
        </GridItem>
      </Grid>
    </Flex>
  );
};

Configuration.propTypes = {
  config: PropTypes.shape({
    provider: PropTypes.string,
    settings: PropTypes.shape({
      defaultFrom: PropTypes.string,
      defaultReplyTo: PropTypes.string,
    }),
  }).isRequired,
};

export default Configuration;
