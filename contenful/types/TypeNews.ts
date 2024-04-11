import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from 'contentful';

export interface TypeNewsFields {
	title?: EntryFieldTypes.Symbol;
	slug: EntryFieldTypes.Symbol;
	shortDescription?: EntryFieldTypes.Symbol;
	description?: EntryFieldTypes.RichText;
	imageUrl?: EntryFieldTypes.AssetLink;
	metadata?: EntryFieldTypes.Object;
	createdAt?: EntryFieldTypes.Date;
}

export type TypeNewsSkeleton = EntrySkeletonType<TypeNewsFields, 'news'>;
export type TypeNews<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
> = Entry<TypeNewsSkeleton, Modifiers, Locales>;
