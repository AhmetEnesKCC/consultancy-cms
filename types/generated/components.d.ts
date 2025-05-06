import type { Schema, Struct } from '@strapi/strapi';

export interface CommonStringString extends Struct.ComponentSchema {
  collectionName: 'components_common_string_strings';
  info: {
    displayName: 'string';
  };
  attributes: {
    content: Schema.Attribute.Text;
  };
}

export interface CvformCountry extends Struct.ComponentSchema {
  collectionName: 'components_cvform_countries';
  info: {
    displayName: 'country';
  };
  attributes: {
    code: Schema.Attribute.String;
    dialCode: Schema.Attribute.String;
    flag: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface CvformCvformInput extends Struct.ComponentSchema {
  collectionName: 'components_cvform_cvform_inputs';
  info: {
    description: '';
    displayName: 'cvform-input';
  };
  attributes: {
    countries: Schema.Attribute.Component<'cvform.country', true>;
    label: Schema.Attribute.String;
    name: Schema.Attribute.String;
    options: Schema.Attribute.Component<'common-string.string', true>;
    placeholder: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['text', 'select']>;
  };
}

export interface DescriptionDescription extends Struct.ComponentSchema {
  collectionName: 'components_description_descriptions';
  info: {
    displayName: 'description';
  };
  attributes: {
    content: Schema.Attribute.Text;
  };
}

export interface ServiceService extends Struct.ComponentSchema {
  collectionName: 'components_service_services';
  info: {
    description: '';
    displayName: 'service';
  };
  attributes: {
    description: Schema.Attribute.Component<'description.description', true>;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface WhyusStatsStats extends Struct.ComponentSchema {
  collectionName: 'components_whyus_stats_stats';
  info: {
    displayName: 'stats';
  };
  attributes: {
    label: Schema.Attribute.Text;
    prefix: Schema.Attribute.String;
    suffix: Schema.Attribute.String;
    value: Schema.Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common-string.string': CommonStringString;
      'cvform.country': CvformCountry;
      'cvform.cvform-input': CvformCvformInput;
      'description.description': DescriptionDescription;
      'service.service': ServiceService;
      'whyus-stats.stats': WhyusStatsStats;
    }
  }
}
