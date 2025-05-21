import type { Schema, Struct } from '@strapi/strapi';

export interface GlobalTitle extends Struct.ComponentSchema {
  collectionName: 'components_global_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'global.title': GlobalTitle;
    }
  }
}
