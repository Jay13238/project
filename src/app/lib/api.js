

export const sendContactForm = async (data) =>
  fetch("http://localhost:3000/api", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
