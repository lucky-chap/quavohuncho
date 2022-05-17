import { Container } from 'layouts/Container';

export default function Blog() {
  return (
    <Container title="Blog - Obed Boakye Danquah">
      <h1>
        <span className="block text-base font-semibold tracking-wide text-center text-teal-500 uppercase dark:text-teal-400">
          My Blog
        </span>
        <span className="block max-w-2xl mx-auto mt-2 text-4xl font-bold leading-10 text-center sm:text-5xl">
          Insightful and helpful content curated for you.
        </span>
      </h1>
    </Container>
  );
}
