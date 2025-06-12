import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'ButtonLink';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsSubTitle extends Struct.ComponentSchema {
  collectionName: 'components_elements_sub_titles';
  info: {
    description: '';
    displayName: 'SubTitle';
  };
  attributes: {
    font: Schema.Attribute.Enumeration<['Default', 'Figtree', 'Playfair']> &
      Schema.Attribute.DefaultTo<'Default'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsTitle extends Struct.ComponentSchema {
  collectionName: 'components_elements_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    font: Schema.Attribute.String;
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'elements.button-link': ElementsButtonLink;
      'elements.sub-title': ElementsSubTitle;
      'elements.title': ElementsTitle;
    }
  }
}
