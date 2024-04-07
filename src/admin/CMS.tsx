import CMS from "decap-cms-app";
// Initialize the CMS object
CMS.init({
    config: {
        backend: {
            name: 'github',
            repo: 'cindydj/gillian-brassil-website',
            branch: 'main',
        },
        media_folder: 'public/images/uploads',
        collections: [
            {
                name: 'articles',
                label: 'Article',
                folder: 'public/articles',
                create: true,
                slug: '{{year}}-{{month}}-{{day}}-{{slug}}',
                fields: [
                    { label: "Title", name: "title", widget: "string" },
                    { label: "Publish Date", name: "date", widget: "datetime" },
                    { label: "Featured Image", name: "thumbnail", widget: "image" },
                    { label: "Rating (scale of 1-5)", name: "rating", widget: "number" },
                    { label: "Body", name: "body", widget: "markdown" },
                ],
            }
        ],
    },
});

export function Component() {
    return (
        <>
        </>
    );
}
