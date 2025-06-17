import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsButtonDownload extends Struct.ComponentSchema {
  collectionName: 'components_elements_button_downloads';
  info: {
    description: '';
    displayName: 'ButtonDownload';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

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

export interface ElementsFrameCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_frame_cards';
  info: {
    description: '';
    displayName: 'FrameCard';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
    color: Schema.Attribute.Enumeration<
      ['prune', 'violet', 'yellow', 'orange', 'blue', 'black']
    >;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsImage extends Struct.ComponentSchema {
  collectionName: 'components_elements_images';
  info: {
    description: '';
    displayName: 'Image';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['center', 'expanded']> &
      Schema.Attribute.DefaultTo<'center'>;
    caption: Schema.Attribute.String;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
  };
}

export interface ElementsLicense extends Struct.ComponentSchema {
  collectionName: 'components_elements_licenses';
  info: {
    displayName: 'License';
  };
  attributes: {
    description: Schema.Attribute.Text;
    licenseItems: Schema.Attribute.Component<'elements.license-item', true>;
  };
}

export interface ElementsLicenseItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_license_items';
  info: {
    displayName: 'LicenseItem';
  };
  attributes: {
    content: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementsParagraph extends Struct.ComponentSchema {
  collectionName: 'components_elements_paragraphs';
  info: {
    description: '';
    displayName: 'Paragraph';
  };
  attributes: {
    align: Schema.Attribute.Enumeration<['left', 'center', 'right']>;
    body: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
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
      'elements.button-download': ElementsButtonDownload;
      'elements.button-link': ElementsButtonLink;
      'elements.frame-card': ElementsFrameCard;
      'elements.image': ElementsImage;
      'elements.license': ElementsLicense;
      'elements.license-item': ElementsLicenseItem;
      'elements.paragraph': ElementsParagraph;
      'elements.sub-title': ElementsSubTitle;
      'elements.title': ElementsTitle;
    }
  }
}
