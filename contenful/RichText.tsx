import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import type { Document as RichTextDocument } from '@contentful/rich-text-types';

type RichTextProps = {
	document: RichTextDocument | null;
};

function RichText({ document }: RichTextProps) {
	if (!document) {
		return null;
	}

	return <>{documentToReactComponents(document)}</>;
}

export default RichText;
