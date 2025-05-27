import type { Schema, Struct } from '@strapi/strapi';

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
      'elements.title': ElementsTitle;
    }
  }
}
