// BEGIN
export default function getDomainInfo(domain) {
  if (domain.startsWith('https://')) {
    return {
      scheme: 'https',
      name: domain.slice(8),
    };
  }
  if (domain.startsWith('http://')) {
    return {
      scheme: 'http',
      name: domain.slice(7),
    };
  }
  return {
    scheme: 'http',
    name: domain,
  };
}
// END

