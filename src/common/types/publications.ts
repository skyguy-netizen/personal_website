export type PublicationKind = 'conference' | 'journal' | 'workshop';

export interface PublicationProps {
  title: string;
  authors: string;
  tag: string;
  venue: string;
  kind: PublicationKind;
  link?: string;
  tagLink?: string;
}
