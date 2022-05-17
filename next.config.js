/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      's3.us-west-2.amazonaws.com',
      'via.placeholder.com',
      'images.unsplash.com',
      'pbs.twimg.com',
      'dwgyu36up6iuz.cloudfront.net',
      'cdn.hashnode.com',
      'res.craft.do',
      'res.cloudinary.com',
      'avatars.githubusercontent.com'
    ]
  }
};

module.exports = nextConfig;