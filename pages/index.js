import Link from "next/link";

import Layout from "components/Layout";
import SEO from "components/Seo";
import { getSortedPosts } from "utils/posts";

export default function Home({ posts }) {
  return (
    <Layout>
    <SEO title="All posts" />
    <section class="w-full flex flex-col items-center px-3">
        {posts.map(({ frontmatter: { title, description, date, category }, slug }) => (
            <article class="w-full lg:w-2/3 flex flex-col shadow my-4">
                <Link href={"/post/[slug]"} as={`/post/${slug}`}>
                  <div>
                    <a href="#" class="hover:opacity-75">
                        <img src="https://source.unsplash.com/collection/1346951/1500x250?sig=1"/>
                    </a>
                    <div class="bg-white flex flex-col justify-start p-6">
                        <a href="#" class="text-blue-700 text-sm font-bold uppercase pb-4 no-underline hover:no-underline">{category}</a>
                        <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">{title}</a>
                        <a href="#" class="pb-6">{description}..</a>
                        <a href="#" class="uppercase text-gray-800 hover:text-black">Continue Reading <i class="fas fa-arrow-right"></i></a>
                    </div>
                  </div>
                </Link>
            </article>
        ))}
    </section>
</Layout>
  );
}

export async function getStaticProps() {
  const posts = getSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
