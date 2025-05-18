// IP do seu ESP8266 na rede local
const IP_ARDUINO = 'http://192.168.0.143';

/**
 * Envia um comando para o ESP8266 pela rota especificada
 * @param {string} action - rota desejada, ex: 'alimentar'
 * @returns {string} - texto retornado pelo servidor ou 'ERRO'
 */
export async function sendCommand(action) {
  try {
    const url = `${IP_ARDUINO}/${action}`;
    const response = await fetch(url);

    // Se não retornar status 200, lança erro
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    // Lê a resposta como texto (por ex: "Alimentado com sucesso")
    const data = await response.text();
    console.log('Resposta do ESP:', data);
    return data;
  } catch (error) {
    console.error('Erro ao comunicar com o ESP:', error.message);
    return 'ERRO'; // Você pode tratar esse valor no app para exibir alerta
  }
}
