import { getPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Our Story',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ text: 'Get in Touch', href: getPermalink('/contact') }],
};

export const footerData = {
  links: [
    {
      title: 'Pages',
      links: [
        { text: 'Our Story', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
  ],
  secondaryLinks: [{ text: 'Privacy Policy', href: getPermalink('/privacy') }],
  socialLinks: [
    // Add your social media links here if desired
    // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  ],
  footNote: `
    Thank you for visiting our profile. We appreciate your interest in our journey.
  `,
};
