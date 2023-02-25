const SERVER_DOMAIN = 'https://the-trivia-api.com/api';

export const getCategoris = async () => {
  try {
    const response = await fetch(`${SERVER_DOMAIN}/categories`);
    return response.json();
  } catch {
    throw new Error('could not fetch categories');
  }
};

