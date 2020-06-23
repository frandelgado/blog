import ReactMarkdown from "react-markdown/with-html";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

import Layout from "components/Layout";
import Image from "components/Image";
import SEO from "components/Seo";
import { getPostBySlug, getPostsSlugs } from "utils/posts";

const CodeBlock = ({ language, value }) => {
  return <SyntaxHighlighter language={language}>{value}</SyntaxHighlighter>;
};

const MarkdownImage = ({ alt, src }) => (
  <Image
    alt={alt}
    src={require(`../../content/assets/${src}`)}
    previewSrc={require(`../../content/assets/${src}?lqip`)}
    className="w-full"
  />
);

export default function Post({ post, frontmatter }) {
  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
      />
      <section class="w-full flex flex-col items-center px-3">
        <article class="w-full lg:w-2/3 flex flex-col shadow my-4">
          <div class="bg-white flex flex-col justify-start p-6">
            <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">{frontmatter.title}</a>
            <p href="#" class="text-sm pb-8">
              By <a href="#" class="font-semibold hover:text-gray-800">{frontmatter.author}</a>, Published on {frontmatter.date}
            </p>
            <ReactMarkdown
              escapeHtml={false}
              source={post.content}
              renderers={{ code: CodeBlock, image: MarkdownImage }}
            />
          </div>
        </article>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getPostsSlugs();

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const postData = getPostBySlug(slug);

  return { props: postData };
}
