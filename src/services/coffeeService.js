// coffeeService.js
// Serviço para consumir a API de cafés quentes

const API_URL = "https://api.sampleapis.com/coffee/hot";

export async function getHotCoffees() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Erro ao buscar cafés");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro na requisição:", error);
    return [];
  }
}

export async function getIcedCoffees() {
  const API_URL = "https://api.sampleapis.com/coffee/iced";
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Erro ao buscar cafés");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro na requisição:", error);
    return [];
  }
}
