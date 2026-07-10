export const getUsers = async () => {
  const response = await fetch("/api/users");

  const data = await response.json();

  if (!response.ok) {
    throw data;
  }

  return data;
};