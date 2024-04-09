import type {
	ChainModifiers,
	Entry,
	EntryFieldTypes,
	EntrySkeletonType,
	LocaleCode,
} from 'contentful';

export interface TypeServicePostFields {
	title?: EntryFieldTypes.Symbol;
	slug: EntryFieldTypes.Symbol;
	shortDescription?: EntryFieldTypes.Symbol;
	description?: EntryFieldTypes.RichText;
	imageUrl?: EntryFieldTypes.AssetLink;
}

export type TypeServicePostSkeleton = EntrySkeletonType<
	TypeServicePostFields,
	'service'
>;
export type TypeServicePost<
	Modifiers extends ChainModifiers,
	Locales extends LocaleCode,
> = Entry<TypeServicePostSkeleton, Modifiers, Locales>;
