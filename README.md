# og

This is a [Next.js](https://nextjs.org/) project created to generate and server open graph images for my personal website.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000/api/generate](http://localhost:3000/api/generate) with your browser to see the generated image.

## Generating Images

Different image layouts can be selected using URL query parameters. There are three layouts available, `page`, `post` and `profile`. Some layouts may require additional parameters to properly generate an image.

### Parameters

| Parameter | Values                                    | Default                         | Description                                                                             |
| --------- | ----------------------------------------- | ------------------------------- | --------------------------------------------------------------------------------------- |
| type      | `'page'`, `'profile'`, `'post'` or `none` | `'page'`                        | The type of card that you would like to generate                                        |
| title     | `string`                                  | `'Stephen Vondenstein'`         | The title of the page, post, or profile                                                 |
| subtitle  | `string`                                  | `'Software Engineer'`           | The subtitle when using type `'profile'`                                                |
| image     | `URL`                                     | blank image matching background | Link to the image that you would like to use (when using types `'profile'` or `'post'`) |

### Examples

Below are examples of each layout type, including the URL query string required to generate each image.

#### Page

Query string: `title=Hello%20World!`

Result:
![Image generated with Page layout](https://og.vondenstein.com/api/generate?title=Hello%20World!)

#### Profile

Query string: `type=profile&title=Hello%20World!&subtitle=Check%20out%20this%20awesome%20Open%20Graph%20&image=https://avatars.githubusercontent.com/u/17032946`

Result:
![Image generated with Profile layout](https://og.vondenstein.com/api/generate?type=profile&title=Hello%20World!&subtitle=Check%20out%20this%20awesome%20Open%20Graph%20&image=https://avatars.githubusercontent.com/u/17032946)

#### Post

Query string: `type=post&title=Hello%20World!&image=http://localhost:8000/static/2f54bcb5636a79dddc8613cb17979cf2/97edb/hero.jpg`

Result:

![Image generated with Post layout](https://og.vondenstein.com/api/generate?type=post&title=Hello%20World!&image=http://localhost:8000/static/2f54bcb5636a79dddc8613cb17979cf2/97edb/hero.jpg)

## Deploy on Vercel

You can clone/fork this repo and modify it to serve images for your own website by deploying to the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) (from the creators of Next.js).
