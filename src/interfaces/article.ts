interface ISource {
	id: string | number | null;
	name: string;
}

export interface IArticle {
	source: ISource;
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
}
